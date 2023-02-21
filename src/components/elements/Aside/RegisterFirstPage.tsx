import { Button } from '@elements'
import React from 'react'
import { RegisterFirstPageProps } from './interface'

export const RegisterFirstPage: React.FC<RegisterFirstPageProps> = ({
    step,
    setStep,
    displayName,
    setDisplayName,
    email,
    setEmail,
}) => {
    return (
        <>
            <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                <h1 className="font-semibold text-3xl">Buat akun</h1>
                <div className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Nama"
                        value={displayName}
                        onChange={(e) => {
                            const target = e.target as HTMLButtonElement
                            setDisplayName(target.value)
                        }}
                        className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            const target = e.target as HTMLButtonElement
                            setEmail(target.value)
                        }}
                        className="bg-transparent border border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                    />
                </div>
                <div>
                    <p className="font-semibold">Tanggal lahir</p>
                    <div className="text-black"></div>
                    <p className="text-sm text-secondary">
                        Aplikasi masih dalam tahap pengembangan! Mohon untuk
                        tidak mengisi data diri anda yang sebenarnya. Jangan
                        gunakan email dan password yang biasa anda gunakan!
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
