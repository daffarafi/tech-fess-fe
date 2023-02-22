import { useAuthContext, useRegisterContext } from '@contexts'
import { Button } from '@elements'
import React, { useState } from 'react'
import { SetStepProps } from './interface'

export const RegisterSecondPage: React.FC<SetStepProps> = ({ setStep }) => {
    const [isUsernameAlreadyRegistered, setIsUsernameAlreadyRegistered] =
        useState(false)

    const { getUserByUsername, loadingState } = useAuthContext()
    const { username, setUsername } = useRegisterContext()

    const inputUsername = (value: string) => {
        if (value.length > 15) return
        setIsUsernameAlreadyRegistered(false)
        setUsername(value)
    }

    const nextButtonHandler = async () => {
        if (await getUserByUsername(username)) {
            setIsUsernameAlreadyRegistered(true)
            return
        }
        setStep(3)
    }

    return (
        <>
            <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Buat username</h1>
                <div className="flex flex-col gap-6">
                    <label>
                        <div className="flex w-full justify-between">
                            <p>Username</p>
                            <p>{username.length}/15</p>
                        </div>
                        <input
                            type="text"
                            placeholder="daffarafi"
                            value={username}
                            onChange={(e) => {
                                const target = e.target as HTMLButtonElement
                                inputUsername(target.value)
                            }}
                            className="bg-transparent border w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                        <p
                            className={`text-danger ${
                                isUsernameAlreadyRegistered ? '' : 'hidden'
                            }`}
                        >
                            Username sudah digunakan!
                        </p>
                    </label>
                    <p className="text-sm text-secondary">
                        Username merupakan nama unik yang berguna sebagai
                        identitas dari akun anda. Setiap akun hanya boleh
                        memiliki satu username dan harus unik (Tidak boleh
                        sama).
                    </p>
                </div>
            </div>
            <div className="px-20 py-5 flex flex-col gap-2">
                <Button
                    fullWidth
                    variant="secondary"
                    onClick={() => {
                        setStep(1)
                    }}
                >
                    <span className="py-2 block font-semibold">Kembali</span>
                </Button>
                {loadingState ? (
                    <div className="w-full py-2 flex justify-center">
                        <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                    </div>
                ) : (
                    <Button fullWidth onClick={nextButtonHandler}>
                        <span className="py-2 block font-semibold">
                            Berikutnya
                        </span>
                    </Button>
                )}
            </div>
        </>
    )
}
