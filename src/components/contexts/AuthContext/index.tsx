import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    AuthContextProviderProps,
    AuthContextProps,
    LoginProps,
    RegisterProps,
    UserProps,
} from './interface'

const AuthContext = createContext({} as AuthContextProps) // TODO: Declare interface of contextValue

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const router = useRouter()
    const [loadingState, setLoadingState] = useState(false)
    const [isDataValid, setIsDataValid] = useState(true)
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState<UserProps | null>(null)

    const submitLoginForm = async ({
        email,
        password,
    }: LoginProps): Promise<void> => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                }
            )

            const responseJson = await response.json()

            if (responseJson.statusCode === 403) {
                throw new Error('Email atau password salah!')
            }

            console.log(responseJson)

            localStorage.setItem('AT', responseJson.access_token)

            setLoginSuccess(true)
            router.push('/', undefined, { shallow: false })
            location.reload()
        } catch (err) {
            if (err instanceof Error) {
                setErrorMessage(err.message)
                setIsDataValid(false)
            }
        } finally {
            setLoadingState(false)
        }
    }

    const submitRegisterForm = async ({
        displayName,
        email,
        birthdate,
        username,
        password,
    }: RegisterProps): Promise<void> => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        displayName,
                        email,
                        birthdate,
                        username,
                        password,
                    }),
                }
            )
            const responseJson = await response.json()

            localStorage.setItem('AT', responseJson.access_token)
        } catch (err) {
        } finally {
            setLoadingState(false)
        }
    }

    const getUserByEmail = async (email: string) => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/checkemail/${email}`
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
                `${process.env.NEXT_PUBLIC_API_URL}/users/checkusername/${username}`
            )
            const responseJson = await response.json()
            return responseJson.id
        } catch (err) {
        } finally {
            setLoadingState(false)
        }
    }

    const getUser = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                }
            )
            const responseJson = await response.json()
            if (responseJson.statusCode === 401) {
                throw new Error('Anda belum login!')
            }
            setUser(responseJson)
        } catch (e) {
        } finally {
            setLoadingState(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const contextValue = {
        user,
        loadingState,
        errorMessage,
        isDataValid,
        setIsDataValid,
        loginSuccess,
        submitLoginForm,
        submitRegisterForm,
        getUserByEmail,
        getUserByUsername,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
