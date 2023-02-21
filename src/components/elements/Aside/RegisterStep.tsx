import { Button } from '@elements'
import React, { useState } from 'react'
import { RegisterFifthPage } from './RegisterFifthPage'
import { RegisterFirstPage } from './RegisterFirstPage'
import { RegisterFourthPage } from './RegisterFourthPage'
import { RegisterSecondPage } from './RegisterSecondPage'
import { RegisterThirdPage } from './RegisterThirdPage'

export const RegisterStep: React.FC = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    // const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)

    const renderRegisterForm = () => {
        switch (step) {
            case 1:
                return (
                    <RegisterFirstPage
                        step={step}
                        setStep={setStep}
                        displayName={displayName}
                        setDisplayName={setDisplayName}
                        email={email}
                        setEmail={setEmail}
                    />
                )
            case 2:
                return (
                    <RegisterSecondPage
                        step={step}
                        setStep={setStep}
                        username={username}
                        setUsername={setUsername}
                    />
                )
            case 3:
                return (
                    <RegisterThirdPage
                        step={step}
                        setStep={setStep}
                        displayName={displayName}
                        email={email}
                        username={username}
                    />
                )
            case 4:
                return (
                    <RegisterFourthPage
                        step={step}
                        setStep={setStep}
                        password={password}
                        setPassword={setPassword}
                    />
                )
            case 5:
                return <RegisterFifthPage />
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
                {renderRegisterForm()}
            </div>
        </div>
    )
}
