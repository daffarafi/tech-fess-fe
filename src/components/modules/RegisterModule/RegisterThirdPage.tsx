import { useRegisterContext } from '@contexts'
import { Button } from '@elements'
import { Check } from '@icons'
import React from 'react'
import { SetStepProps } from './interface'

export const RegisterThirdPage: React.FC<SetStepProps> = ({ setStep }) => {
    const { displayName, email, username, birthdate } = useRegisterContext()

    return (
        <>
            <div className="px-10 md:px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Periksa kembali!</h1>
                <div className="flex flex-col gap-6">
                    <label>
                        <p>Nama</p>
                        <div className="bg-transparent flex justify-between items-center border w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50">
                            <p>{displayName}</p>
                            <Check size="w-5 h-5" fill="fill-success" />
                        </div>
                    </label>
                    <label>
                        <p>Email</p>
                        <div className="bg-transparent flex justify-between items-center border  w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50">
                            <p>{email}</p>
                            <Check size="w-5 h-5" fill="fill-success" />
                        </div>
                    </label>
                    <label>
                        <p>Username</p>
                        <div className="bg-transparent flex justify-between items-center border  w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50">
                            <p>{username}</p>
                            <Check size="w-5 h-5" fill="fill-success" />
                        </div>
                    </label>
                    <label>
                        <p>Tanggal lahir</p>
                        <div className="bg-transparent flex justify-between items-center border  w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50">
                            <p>{birthdate.split('-').reverse().join('-')}</p>
                            <Check size="w-5 h-5" fill="fill-success" />
                        </div>
                    </label>
                </div>
            </div>
            <div className="px-20 py-5 flex flex-col gap-2">
                <Button
                    fullWidth
                    variant="secondary"
                    onClick={() => {
                        setStep(2)
                    }}
                >
                    <span className="py-2 block font-semibold">Kembali</span>
                </Button>
                <Button
                    fullWidth
                    disabled={email && displayName ? false : true}
                    onClick={() => {
                        setStep(4)
                    }}
                >
                    <span className="py-2 block font-semibold">Berikutnya</span>
                </Button>
            </div>
        </>
    )
}
