import React, { useState, useContext } from 'react'
import { Form, Image, Button } from 'react-bootstrap'
import { formContext } from '../../context/formContext'
const PhotoProfile = () => {
    const { state } = useContext(formContext)
    const [show, setShow] = useState(false)
    const [preview, setPreview] = useState(false)
    const {
        pes_codigo,
        pes_img
    } = state
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('pes_codigo', pes_codigo)
        formData.append('pes_img', pes_img)
    }
    const handleFile = () => {
        setPreview(false)
        const input = document.getElementById("pes_img")
        input && input.click()
    }
    const onChange = ({ target }) => {
        if (target.files[0]) {
            setShow(true)
            // dispatch({ field: 'pes_img', value: target.files[0] })
            setPreview(URL.createObjectURL(target.files[0]))
        }
    }
    return <>
        <Form.Control type="file" id="pes_img" className="d-nome d-md-none" onChange={onChange} />
        {preview ?
            <Image src={preview} onClick={handleFile} roundedCircle
                style={{ maxWidth: 150, maxHeight: 150 }} alt="profile_photo" />
            :
            <Image src={`https://eshopee.com.br/api${pes_img}`} roundedCircle
                onClick={handleFile} style={{ maxWidth: 150, maxHeight: 150 }} alt="profile_photo" />
        }
        {show &&
            <Button className="w-100 mt-3" variant="primary" onClick={onSubmit}>
                Salvar foto de perfil
            </Button>
        }
    </>
}
export default PhotoProfile