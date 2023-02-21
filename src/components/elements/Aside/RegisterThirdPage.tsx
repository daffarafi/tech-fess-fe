import { Button } from '@elements'
import React from 'react'
import { RegisterThirdPageProps } from './interface'

export const RegisterThirdPage: React.FC<RegisterThirdPageProps> = ({
    displayName,
    email,
    username,
    step,
    setStep,
}) => {
    return (
        <>
            <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Periksa kembali!</h1>
                <div className="flex flex-col gap-6">
                    <label>
                        <p>Nama</p>
                        <input
                            type="text"
                            value={displayName}
                            disabled
                            className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                    <label>
                        <p>Username</p>
                        <input
                            type="text"
                            value={username}
                            disabled
                            className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                    <label>
                        <p>Tanggal lahir</p>
                        <input
                            type="text"
                            // value={birthdate}
                            disabled
                            className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                </div>
            </div>
            <div className="px-20 py-5 flex flex-col gap-2">
                {step === 2 || step === 3 || step === 4 ? (
                    <Button
                        fullWidth
                        variant="secondary"
                        onClick={() => {
                            setStep(step - 1)
                        }}
                    >
                        <span className="py-2 block font-semibold">
                            Kembali
                        </span>
                    </Button>
                ) : (
                    ''
                )}
                {step === 1 || step === 2 || step === 3 ? (
                    <Button
                        fullWidth
                        disabled={email && displayName ? false : true}
                        onClick={() => {
                            setStep(step + 1)
                        }}
                    >
                        <span className="py-2 block font-semibold">
                            Berikutnya
                        </span>
                    </Button>
                ) : (
                    ''
                )}
            </div>
        </>
    )
}
