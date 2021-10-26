import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router'
import { GET_ITENS, POST_ITENS } from '../services/api'
export const storageContext = createContext()
export const StorageContext = ({ children }) => {
    const [data, setData] = useState(null)
    const [comentario, setComentario] = useState([{}])
    const [message, setMessage] = useState(null)
    const [show, setShow] = useState(null)
    const [cidade, setCidade] = useState(null)
    const [logradouro, setLogradouro] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const [galeria, setGaleria] = useState(null)
    const [categoria, setCategoria] = useState(null)
    const [formapagamento, setFormaPagamento] = useState(null)
    const [variant, setVariant] = useState(null)
    const [page, setPages] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [logo, setLogo] = useState(null)
    const [curtida, setCurtida] = useState(null)
    const [link, setLink] = useState([])
    const { push } = useHistory()
    const getItens = async (state) => {
        const {
            uri,
            redirect,
            type
        } = state
        if (type !== 3 && type !== 4) {
            setVariant('warning')
            setMessage('Carregando dados...')
            setShow(true)
        }
        const { url, options } = GET_ITENS(uri)
        const response = await fetch(url, options)
        const json = await response.json()
        if (response.ok) {
            setShow(false)
            setVariant(null)
            setMessage(null)
            switch (type) {
                case 0:
                    setData(json)
                    break;
                case 2:
                    setGaleria(json.data)
                    break;
                case 3:
                    setComentario(json)
                    break;
                case 4:
                    setCidade(json)
                    break;
                case 5:
                    setFormaPagamento(json)
                    break;
                case 6:
                    // setCarrinho(json)
                    break;
                case 12:
                    setCurrentPage(json.current_page)
                    setPages(json.last_page)
                    if (Array.isArray(galeria)) {
                        json.data.map(item => {
                            return setGaleria([...galeria, item])
                        })
                    }
                    else setGaleria(json.data)
                    break;
                default:
                    break;
            }
            if (redirect) {
                push(redirect)
            }
        } else {
            setMessage(json.msg)
            setShow(true)
        }

    }
    const postItens = async (state) => {
        const {
            uri,
            redirect,
            method,
            reflow,
            type,
            formData
        } = state
        setVariant('warning')
        setMessage('Salvando dados...')
        setShow(true)
        const { url, options } = POST_ITENS(formData, uri, method)
        const response = await fetch(url, options)
        const json = await response.json()
        if (response.ok) {
            setData(json)
            setVariant('info')
            if (redirect) {
                push(redirect)
            } else {
                if (reflow) getItens({
                    uri: reflow,
                    type: type
                })
            }
        } else {
            setVariant('danger')
            setShow(false)
        }
        setMessage(json.msg)
        setShow(false)
    }

    return (
        <storageContext.Provider value={
            {
                data, setData, comentario, setComentario, message, show, getItens, postItens, isFetching, setIsFetching,
                cidade, setCidade, logradouro, setLogradouro, galeria, setGaleria, categoria, setCategoria,
                formapagamento, setFormaPagamento, variant, setVariant, setShow, setMessage, page, setPages,
                currentPage, setCurrentPage, setLogo, logo, curtida, setCurtida,
                link, setLink
            }
        }>
            {children}
        </storageContext.Provider>
    )
}