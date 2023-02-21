import { Button } from '@elements'
import React from 'react'
import { RegisterFourthPageProps } from './interface'

export const RegisterFourthPage: React.FC<RegisterFourthPageProps> = ({
    step,
    setStep,
    password,
    setPassword,
}) => {
    return (
        <>
            <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Periksa kembali!</h1>
                <div className="flex flex-col gap-6">
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                const target = e.target as HTMLButtonElement
                                setPassword(target.value)
                            }}
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
                        disabled={password ? false : true}
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
