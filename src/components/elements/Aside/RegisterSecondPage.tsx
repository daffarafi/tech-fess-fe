import { Button } from '@elements'
import React from 'react'
import { RegisterSecondPageProps } from './interface'

export const RegisterSecondPage: React.FC<RegisterSecondPageProps> = ({
    step,
    setStep,
    username,
    setUsername,
}) => {
    return (
        <>
            <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Buat username</h1>
                <div className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            const target = e.target as HTMLButtonElement
                            setUsername(target.value)
                        }}
                        className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                    />
                    <p className="text-sm text-secondary">
                        Username merupakan nama unik yang berguna sebagai
                        identitas dari akun anda. Setiap akun hanya boleh
                        memiliki satu username dan harus unik (Tidak boleh
                        sama).
                    </p>
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
