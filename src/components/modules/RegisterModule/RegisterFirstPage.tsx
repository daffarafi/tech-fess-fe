import { Button, Datepicker } from '@elements'
import React, { useState } from 'react'
import { RegisterFirstPageProps } from './interface'
import { emailFilter } from './constant'
import Link from 'next/link'
import { useRegisterContext } from '@contexts'

export const RegisterFirstPage: React.FC<RegisterFirstPageProps> = ({
    setStep,
    setShowLoginForm,
    setShowRegisterForm,
}) => {
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isEmailAlreadyRegistered, setIsEmailAlreadyRegistered] =
        useState(false)
    const {
        displayName,
        setDisplayName,
        email,
        setEmail,
        birthdate,
        setBirthdate,
    } = useRegisterContext()

    const { loadingState, getUserByEmail } = useRegisterContext()

    const checkEmailFormat = () => (!emailFilter.test(email) ? false : true)

    const inputEmail = (value: string) => {
        setIsEmailValid(true)
        setIsEmailAlreadyRegistered(false)
        setEmail(value)
    }

    const inputDisplayName = (value: string) => {
        if (value.length > 50) return
        setDisplayName(value)
    }

    const isBirthdateFilled = () => {
        const [year, month, day] = birthdate.split('-')
        return year && month && day
    }

    const nextButtonHandler = async () => {
        if (!checkEmailFormat()) {
            setIsEmailValid(false)
            return
        }
        if (await getUserByEmail(email)) {
            setIsEmailAlreadyRegistered(true)
            return
        }
        setIsEmailValid(true)
        setStep(2)
    }

    return (
        <>
            <div className="px-10 md:px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Buat akun</h1>
                <div className="flex flex-col gap-6">
                    <label>
                        <div className="w-full flex justify-between">
                            <p>Nama</p>
                            <p>{displayName.length}/50</p>
                        </div>
                        <input
                            type="text"
                            placeholder="Daffa Rafi"
                            value={displayName}
                            onChange={(e) => {
                                const target = e.target as HTMLButtonElement
                                inputDisplayName(target.value)
                            }}
                            className="bg-transparent border w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                    <div>
                        <label>
                            <p>Email</p>
                            <input
                                type="email"
                                placeholder="dapa@lolosristek.com"
                                value={email}
                                onChange={(e) => {
                                    const target = e.target as HTMLButtonElement
                                    inputEmail(target.value)
                                }}
                                className={`bg-transparent border w-full ${
                                    isEmailValid
                                        ? 'border-secondary/50'
                                        : 'border-danger'
                                } px-2 py-4 rounded-lg placeholder-secondary/50`}
                            />
                        </label>
                        <p
                            className={`text-danger text-sm ${
                                isEmailValid ? 'hidden' : ''
                            }`}
                        >
                            Mohon masukan email yang sesuai! <br />
                            (Contoh: dapa@lolosristek.com)
                        </p>
                        <p
                            className={`text-danger text-sm ${
                                isEmailAlreadyRegistered ? '' : 'hidden'
                            }`}
                        >
                            Email tersebut sudah digunakan!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold">Tanggal lahir</p>
                    <Datepicker date={birthdate} setDate={setBirthdate} />
                    <p className="text-sm text-secondary">
                        Aplikasi masih dalam tahap pengembangan! Mohon untuk
                        tidak mengisi data diri anda yang sebenarnya. Jangan
                        gunakan email dan password yang biasa anda gunakan!
                    </p>
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
                        disabled={
                            email && displayName && isBirthdateFilled()
                                ? false
                                : true
                        }
                        onClick={nextButtonHandler}
                    >
                        <span className="py-2 block font-semibold">
                            Berikutnya
                        </span>
                    </Button>
                )}
                <p className="text-sm text-secondary/75">
                    {' '}
                    Sudah punya akun?{' '}
                    <Link
                        href={'#'}
                        onClick={() => {
                            setShowRegisterForm(false)
                            setShowLoginForm(true)
                        }}
                        className="text-secondary underline"
                    >
                        Masuk
                    </Link>
                </p>
            </div>
        </>
    )
}
