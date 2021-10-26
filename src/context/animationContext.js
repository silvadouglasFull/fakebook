import React, { createContext, useState } from 'react'
export const animationContext = createContext();
export const AnimationContext = ({ children }) => {
    const [grid, setGrid] = useState(false);
    const [hidden, setHidden] = useState(0)
    const [visible, setVisible] = useState(false)
    const [permission, setPermission] = useState(false)
    return (
        <animationContext.Provider
            value={{ grid, setGrid, hidden, setHidden, visible, setVisible,permission, setPermission}}>
            {children}
        </animationContext.Provider>
    )
}