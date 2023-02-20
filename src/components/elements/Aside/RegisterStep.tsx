import { Button } from '@elements'
import React, { useState } from 'react'

export const RegisterStep: React.FC = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    // const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)

    const firstStep = () => {
        return (
            <>
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
            </>
        )
    }

    const secondStep = () => {
        return (
            <>
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
            </>
        )
    }
    const thirdStep = () => {
        return (
            <>
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
            </>
        )
    }

    const renderForm = () => {
        switch (step) {
            case 1:
                return firstStep()
            case 2:
                return secondStep()
            case 3:
                return thirdStep()
        }
    }

    return (
        <div className="fixed flex justify-center items-center z-20 top-0 left-0 w-full h-screen p-2 bg-secondary/30">
            <div className="w-full flex flex-col max-w-xl h-full max-h-[40rem] rounded-2xl bg-primary">
                <div className="flex items-center py-3 px-4 gap-8">
                    <button className="w-4 h-4 ">
                        <div className="w-full h-0.5 bg-white rotate-45" />
                        <div className="w-full h-0.5 bg-white -rotate-45 -translate-y-0.5" />
                    </button>
                    <p className="font-semibold text-xl">
                        Langkah {step} dari 3
                    </p>
                </div>
                <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1">
                    {renderForm()}
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
            </div>
        </div>
    )
}
