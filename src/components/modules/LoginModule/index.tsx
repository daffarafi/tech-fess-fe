import { useAuthContext } from '@contexts'
import { Button } from '@elements'
import { Check } from '@icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { LoginRegisterFormProps } from './interface'

export const Login: React.FC<LoginRegisterFormProps> = ({
    setShowLoginForm,
    setShowRegisterForm,
}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {
        loadingState,
        isDataValid,
        setIsDataValid,
        errorMessage,
        submitLoginForm,
        loginSuccess,
    } = useAuthContext()

    const submitButtonHandler = () => {
        submitLoginForm({ email, password })
    }

    const renderLoginForm = () => {
        return (
            <>
                <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                    <h1 className="font-semibold text-3xl">Masuk</h1>
                    <div className="flex flex-col gap-6">
                        <label>
                            <p>Email</p>
                            <input
                                type="email"
                                placeholder=""
                                disabled={loadingState}
                                value={email}
                                onChange={(e) => {
                                    const target = e.target as HTMLButtonElement
                                    setIsDataValid(true)
                                    setEmail(target.value)
                                }}
                                className={`bg-transparent border w-full ${
                                    isDataValid
                                        ? 'border-secondary/50'
                                        : 'border-danger'
                                } px-2 py-4 rounded-lg placeholder-secondary/50`}
                            />
                        </label>
                        <label>
                            <p>Password</p>
                            <input
                                type="password"
                                placeholder=""
                                value={password}
                                disabled={loadingState}
                                onChange={(e) => {
                                    const target = e.target as HTMLButtonElement
                                    setIsDataValid(true)
                                    setPassword(target.value)
                                }}
                                className={`bg-transparent border w-full ${
                                    isDataValid
                                        ? 'border-secondary/50'
                                        : 'border-danger'
                                } px-2 py-4 rounded-lg placeholder-secondary/50`}
                            />
                            <p
                                className={`text-danger text-sm ${
                                    isDataValid ? 'hidden' : ''
                                }`}
                            >
                                {errorMessage}
                            </p>
                        </label>
                    </div>
                </div>
                <div className="px-20 py-5 flex flex-col gap-2">
                    {loadingState ? (
                        <div className="w-full flex justify-center">
                            <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                        </div>
                    ) : (
                        <Button
                            fullWidth
                            disabled={email && password ? false : true}
                            onClick={submitButtonHandler}
                        >
                            <span className="py-2 block font-semibold">
                                Login
                            </span>
                        </Button>
                    )}
                    <p className="text-sm text-secondary/75">
                        Belum punya akun?{' '}
                        <Link
                            href={'#'}
                            onClick={() => {
                                setShowLoginForm(false)
                                setShowRegisterForm(true)
                            }}
                            className="text-secondary underline"
                        >
                            Daftar
                        </Link>
                    </p>
                </div>
            </>
        )
    }

    const renderSuccessLogin = () => {
        return (
            <div className="flex flex-col gap-3 w-full h-full justify-center -mt-20 items-center text-center">
                <Check size="w-20 h-20" fill="fill-success" />
                <h1 className="font-semibold text-3xl">Login berhasil!</h1>
                <h2 className="text-xl">Mohon tunggu...</h2>
            </div>
        )
    }

    return (
        <div className="fixed flex justify-center items-center z-20 top-0 left-0 w-full h-screen p-2 bg-secondary/30">
            <div className="w-full flex flex-col max-w-xl h-full max-h-[40rem] rounded-2xl bg-primary">
                <div className="flex items-center py-3 px-4 gap-8">
                    <button
                        className="w-4 h-4 "
                        onClick={() => {
                            setShowLoginForm(false)
                        }}
                    >
                        <div className="w-full h-0.5 bg-white rotate-45" />
                        <div className="w-full h-0.5 bg-white -rotate-45 -translate-y-0.5" />
                    </button>
                </div>
                {loginSuccess ? renderSuccessLogin() : renderLoginForm()}
            </div>
        </div>
    )
}
