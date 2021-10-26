import React, { createContext, useState } from "react";
import { useHistory } from "react-router";
import { POST_ITENS } from '../services/api'
export const userContext = createContext()
const UserContext = ({ children }) => {
    const [access, setAcces] = useState(false)
    const [user, setUser] = useState({
        name: '',
        photo: '',
    })
    const [load, setLoad] = useState(false)
    const { push } = useHistory()
    const [confgAlert, setConfigAlert] = useState({
        variant: '',
        show: false,
        message: ''
    })
    const onLogin = async (state) => {
        const {
            uri,
            method,
            formData,
            redirect
        } = state
        const { url, options } = POST_ITENS(formData, uri, method);
        setLoad(true)
        const response = await fetch(url, options);
        const json = await response.json();
        if (response.ok) {
            setUser(json)
            setConfigAlert({
                variant: '',
                show: false,
                message: ''
            })
            setAcces(true)
            setLoad(false)
            push(redirect)
        } else {
            setLoad(false)
            setConfigAlert({
                variant: 'danger',
                show: true,
                message: json.msg
            })
        }
        setLoad(false)
    };
    return <userContext.Provider value={{
        access, setAcces, user, setUser, confgAlert, setConfigAlert, onLogin, load, setLoad
    }}>
        {children}
    </userContext.Provider>
}
export default UserContext