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
    const [loadingState, setLoadingState] = useState(false)

    const getUserByEmail = async (email: string) => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}users/checkemail/${email}`
            )
            const responseJson = await response.json()
            return responseJson.username
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingState(false)
        }
    }

    const getUserByUsername = async (username: string) => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}users/checkusername/${username}`
            )
            const responseJson = await response.json()
            return responseJson.id
        } catch (err) {
        } finally {
            setLoadingState(false)
        }
    }

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
        getUserByEmail,
        getUserByUsername,
        loadingState,
    }

    return (
        <RegisterContext.Provider value={contextValue}>
            {children}
        </RegisterContext.Provider>
    )
}
