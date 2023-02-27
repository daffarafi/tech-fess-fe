import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    AuthContextProviderProps,
    AuthContextProps,
    LoginProps,
    RegisterProps,
    UserProps,
    EditProps,
} from './interface'

const AuthContext = createContext({} as AuthContextProps) // TODO: Declare interface of contextValue

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const router = useRouter()
    const [loadingState, setLoadingState] = useState(true)
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
            await getUser()
        } catch (err) {
        } finally {
            setLoadingState(false)
        }
    }

    const uploadUserProfile = async (photo: File | null) => {
        if (!photo) return

        const body = new Blob([photo], { type: photo.type })
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/photo`,
            {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('AT')}`,
                },
                body,
            }
        )
        const responseJson = response.json()

        return responseJson
    }

    const uploadUserBanner = async (banner: File | null) => {
        console.log('banner', banner)
        console.log(typeof banner)
        if (!banner) return

        const file = new Blob([banner], { type: banner.type })
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/banner`,
            {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    'Content-Type': file.type,
                },
                // @ts-ignore
                body: { file },
            }
        )
        const responseJson = response.json()

        return responseJson
    }

    const submitEditUser = async (displayName: string, biodata: string) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users`,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('AT')}`,
                },
                body: JSON.stringify({ displayName, biodata }),
            }
        )

        const responseJson = await response.json()

        return responseJson
    }

    const submitEditForm = async ({
        displayName,
        biodata,
        photo,
        banner,
    }: EditProps) => {
        const responses = Promise.all([
            uploadUserProfile(photo),
            uploadUserBanner(banner),
            submitEditUser(displayName, biodata),
        ]).then((response) => {
            console.log(response)
        })

        console.log(responses)
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
        submitEditForm,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
