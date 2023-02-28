import { useAuthContext, useRegisterContext } from '@contexts'
import { Button } from '@elements'
import React, { useState } from 'react'
import { SetStepProps } from './interface'

export const RegisterFourthPage: React.FC<SetStepProps> = ({ setStep }) => {
    const [isValidPassword, setIsValidPassword] = useState(true)

    const { submitRegisterForm } = useAuthContext()
    const { displayName, email, username, birthdate, password, setPassword } =
        useRegisterContext()

    const nextButtonHandler = () => {
        if (password.length < 8) {
            setIsValidPassword(false)
        } else {
            submitRegisterForm({
                displayName,
                email,
                username,
                birthdate,
                password,
            })
            setStep(5)
        }
    }

    const inputPassword = (value: string) => {
        setIsValidPassword(true)
        setPassword(value)
    }

    return (
        <>
            <div className="px-10 md:px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Lindungi akun anda!</h1>
                <div className="flex flex-col gap-6">
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                const target = e.target as HTMLButtonElement
                                inputPassword(target.value)
                            }}
                            className={`bg-transparent w-full border ${
                                isValidPassword
                                    ? 'border-secondary/50'
                                    : 'border-danger'
                            } px-2 py-4 rounded-lg placeholder-secondary/50`}
                        />
                        <p
                            className={`text-danger ${
                                isValidPassword ? 'hidden' : ''
                            }`}
                        >
                            Panjang password tidak boleh kurang dari 8 karakter!
                        </p>
                    </label>
                    <p className="text-sm text-secondary">
                        Berikan password yang kuat dan jangan bagikan password
                        anda!
                    </p>
                </div>
            </div>
            <div className="px-20 py-5 flex flex-col gap-2">
                <Button
                    fullWidth
                    variant="secondary"
                    onClick={() => {
                        setStep(3)
                    }}
                >
                    <span className="py-2 block font-semibold">Kembali</span>
                </Button>
                <Button
                    fullWidth
                    disabled={password ? false : true}
                    onClick={nextButtonHandler}
                >
                    <span className="py-2 block font-semibold">Daftar</span>
                </Button>
            </div>
        </>
    )
}
