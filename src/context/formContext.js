import React, { createContext, useState, useReducer } from 'react'
export const formContext = createContext()
const initialState = {
    email: '',
    password: '',
    pes_nome: "",
    pes_sobrenome: "",
    log_nome: '',
    log_senha: '',
    ps_senha: '',
    ps_pessoa: '',
    pes_codigo: '',
    pes_pessoa: '',
    pes_fantasia_: '',
    pes_cnpj: '',
    pes_ie: '',
    pes_imunicipal: '',
    pes_irural: '',
    pes_nascfunda: new Date().toLocaleDateString(),
    pes_endereco: '',
    pes_bairro: '',
    pes_cidade: '',
    pes_uf: '',
    pes_cep: '',
    pes_fone1: '',
    pes_fone2: '',
    pes_celular: '',
    pes_fax: '',
    pes_email: '',
    pes_cadastro: '',
    pes_contato: '',
    pes_pais: '',
    pes_observacao: 'A melhor vida de todas!',
    pes_enquadramento: '',
    pes_tipocontribuinte: '',
    pes_segmento: '',
    pes_contacontabil: '',
    pes_complemento: '',
    pes_numero: '',
    pes_postal: '',
    pes_img: '',
    pes_capa: '/storage/app/public/pessoa/3949076.webp',
    pes_links: '',
    pes_dados_pes: 1,
    pes_status_shep: 0,
    // pes_observacao: '',
}
const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}
const FormContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [img, setImg] = useState(null)
    const [validated, setValidated] = useState(false)
    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }
    const onClick = async (field) => {
        try {
            Object.keys(field).map((key) => {
                return dispatch({ field: key, value: field[key] });
            })
        } catch (error) {
            console.error(error);
        }
    }
    const CEL = (value) => {
        value = String(value).replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        if (value.length > 15) {
            return CEL(value.substring(0, 15));
        } else {
            return value;
        }
    }

    return <formContext.Provider value={{
        state, dispatch, onChange, img, setImg, validated, setValidated, onClick, CEL
    }}>
        {children}
    </formContext.Provider>
}
export default FormContext