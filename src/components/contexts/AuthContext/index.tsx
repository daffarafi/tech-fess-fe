import React, { createContext, useContext } from 'react'
import { AuthContextProviderProps, AuthContextInterface } from './interface'

const AuthContext = createContext({} as AuthContextInterface) // TODO: Declare interface of contextValue

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    // TODO: Write context's logic

    const contextValue = {}

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
