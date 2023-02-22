import React, { createContext, useContext, useState } from 'react'
import { RegisterContextProps, RegisterContextProviderProps } from './interface'

const RegisterContext = createContext({} as RegisterContextProps) // TODO: Declare interface of contextValue

export const useRegisterContext = () => useContext(RegisterContext)

export const RegisterContextProvider: React.FC<
    RegisterContextProviderProps
> = ({ children }) => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const contextValue = {
        displayName,
        setDisplayName,
        email,
        setEmail,
        birthdate,
        setBirthdate,
        username,
        setUsername,
        password,
        setPassword,
    }

    return (
        <RegisterContext.Provider value={contextValue}>
            {children}
        </RegisterContext.Provider>
    )
}
