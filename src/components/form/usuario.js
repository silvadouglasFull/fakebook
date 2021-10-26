/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { animationContext } from '../../context/animationContext.js'
import { formContext } from '../../context/formContext'
import { storageContext } from '../../context/storageContext'
import { userContext } from '../../context/userContext'
import Alerta from '../alerts/alert'
const Usuario = ({ title, pathname }) => {
    // const { setHidden } = useContext(animationContext)
    const [visible, setVisible] = useState(false)
    const { state, onChange, CEL, onClick, img } = useContext(formContext)
    const { postItens, setVariant, setShow, setMessage, logradouro } = useContext(storageContext)
    const { user } = useContext(userContext)
    // getItens,, cidade, setCidade getCep,
    const {
        pes_codigo,
        pes_nome,
        pes_email,
        ps_senha,
        pes_celular,
        ps_contra_senha,
        pes_cep,
        // cid_nome
    } = state
    useEffect(() => {
        if (!user) {
            document.getElementById('login_button').click()
        }
    }, [])
    useEffect(() => {
        logradouro && onClick(logradouro)
    }, [logradouro])
    const onSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        if (pes_codigo) formData.append("pes_codigo", pes_codigo)
        formData.append("pes_nome", pes_nome)
        formData.append("pes_email", pes_email)
        formData.append("ps_senha", ps_senha)
        formData.append("pes_celular", pes_celular)
        formData.append("pes_cep", pes_cep)
        if (img) formData.append("pes_img", img.raw)
        if (ps_senha !== ps_contra_senha) {
            setVariant('warning')
            setMessage('Suas senhas não conferem')
            setShow(true)
        } else if (ps_senha.lenght < 6) {
            setVariant('warning')
            setMessage('Sua senha deve ter mais do que 6 caracteres')
            setShow(true)
        }
        else {
            postItens({
                uri: '/pessoa/create',
                method: 'POST',
                formData,
                redirect: '/'
            })
        }
    }
    // const onBlur = () => {
    //     logradouro && onClick(logradouro)
    // }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <Alerta />
            </div>
            <div className="row mb-1">
                <div className="col-12 col-md-12 mb-1">
                    <label htmlFor="pes_nome" className="form-label">Primeiro Nome</label>
                    <input type="text" className="form-control" id="pes_nome"
                        name="pes_nome" value={pes_nome} onChange={onChange} requerid
                        placeholder="Meu primeiro nome" />
                </div>
                {/* <div className="col-12 col-md-6 mb-1 mb-1">
                    <label htmlFor="pes_fantasia" className="form-label">Segundo Nome</label>
                    <input type="text" className="form-control" id="pes_fantasia"
                        name="pes_fantasia" value={pes_fantasia} onChange={onChange} requerid
                        placeholder="Meu segundo nome" />
                </div> */}
            </div>
            <div className="row mb-1">
                <div className="col-12 mb-1">
                    <label htmlFor="pes_email" className="form-label">E-mail</label>
                    <input type="text" className="form-control" id="pes_email"
                        name="pes_email" value={pes_email} onChange={onChange} requerid
                        placeholder="Meu e-mail" />
                </div>
                <div className="col-12 mb-1">
                    <label htmlFor="pes_celular" className="form-label">Celular</label>
                    <input type="text" className="form-control" id="pes_celular"
                        name="pes_celular" value={CEL(pes_celular)} onChange={onChange} requerid
                        placeholder="(00) 00000-0000" />
                </div>
                <div className="col-12 col-md-6 mb-1">
                    <label htmlFor="ps_senha" className="form-label">Senha</label>
                    <div className="input-group">
                        <input type={visible ? "text" : "password"} className="form-control" id="ps_senha"
                            name="ps_senha" value={ps_senha} onChange={onChange} requerid
                            placeholder="Senha" />
                        <span className="input-group-text" onClick={() => setVisible(!visible)}>
                            <i className={visible ? 'far fa-eye-slash' : 'far fa-eye'} ></i>
                        </span>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-1">
                    <label htmlFor="ps_contra_senha" className="form-label">Repita senha</label>
                    <div className="input-group">
                        <input type={visible ? "text" : "password"} className="form-control" id="ps_contra_senha"
                            name="ps_contra_senha" value={ps_contra_senha} onChange={onChange} requerid
                            placeholder="Senha" />
                        <span className="input-group-text" onClick={() => setVisible(!visible)}>
                            <i className={visible ? 'far fa-eye-slash' : 'far fa-eye'} ></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row mb-1">
                {/* <div className="col-6 ">
                    <label htmlFor="pes_cep" className="form-label">CEP</label>
                    <div class="input-group mb-1">
                        <input type="text" className="form-control" id="pes_cep"
                            name="pes_cep" value={pes_cep} onChange={onChange} requerid
                            placeholder="Procurar pelo CEP" onBlur={onBlur} />
                        <span class="input-group-text" id="basic-pes_cep"
                            onBlur={onBlur}
                            onClick={() => getCep(pes_cep)}>
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div> */}
                {/* <div className="col-12 mb-1">
                    <label htmlFor="pes_endereco" className="form-label">Endereço entrega</label>
                    <input type="text" className="form-control" id="pes_endereco"
                        name="pes_endereco" value={pes_endereco} onChange={onChange} requerid
                        placeholder="Meu endereço de entrega" />
                </div> */}
                {/* <div className="col-12 mb-1">
                    <label htmlFor="pes_bairro" className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="pes_bairro"
                        name="pes_bairro" value={pes_bairro} onChange={onChange} requerid
                        placeholder="Meu Bairro" />
                </div> */}
            </div>
            {/* <div className="row mb-1"> */}
            {/* {Array.isArray(cidade) ?
                    <div className="col-12 col-md-6 mb-1">
                        <label htmlFor="pes_cidade" className="form-label">Cidade</label>
                        <div className="input-group">
                            <select className="form-control" name="pes_cidade" value={pes_cidade}
                                onChange={onChange}>
                                {cidade.map(item => (
                                    <option value={item.cid_codigo}>{item.cid_nome}</option>
                                ))}
                            </select>
                            <span class="input-group-text" id="basic-pes_cep"
                                onClick={() => setCidade(null)}>
                                <i className="far fa-times-circle"></i>
                            </span>
                        </div>
                    </div> : */}
            {/* <div className="col-12 col-md-6 mb-1">
                        <label htmlFor="cid_nome" className="form-label">Cidade</label>
                        <div class="input-group">
                            <input type="text" className="form-control" id="cid_nome"
                                name="cid_nome" value={cid_nome} onChange={onChange} requerid
                                placeholder="Minha cidade" />
                            <span class="input-group-text" id="basic-cid_nome"
                                onClick={() => getItens({
                                    uri: `/cidade/d/${cid_nome}`,
                                    type: 4
                                })}>
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                } */}
            {/* {Array.isArray(cidade) ?
                    <div className="col-12 col-md-6 mb-1">
                        <label htmlFor="pes_uf" className="form-label">Estado</label>
                        <select className="form-control" name="pes_uf" value={pes_uf}
                            onChange={onChange}>
                            {cidade.map(item => (
                                <option value={item.cid_uf}>{item.cid_uf}</option>
                            ))}
                        </select>
                    </div> :
                    <div className="col-12 col-md-6 mb-1 mb-1">
                        <label htmlFor="pes_uf" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="pes_uf"
                            name="pes_uf" value={pes_uf} onChange={onChange} requerid
                            placeholder="SP" />
                    </div>
                } */}
            {/* </div> */}
            {/* {title ?
                <div className="mb-1 text-center">
                    <div className="col-12 mb-1">
                        <Link to="#" className="btn w-100 btn-lg btn-outline-dark" type="button"
                            onClick={() => setHidden(1)}>
                            Continuar com pedido{' '}<i className="fa fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
                :
                </div>
            } */}
            <div className="mb-1 text-center">
                <div className="col-12 mb-1">
                    <button className="btn w-100 btn-lg btn-success" type="submit">
                        Cadastra-se
                    </button>
                </div>
            </div>
            <div className="row">
                <Alerta />
            </div>
        </form>
    )
}
export default Usuario