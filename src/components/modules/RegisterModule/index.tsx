import { RegisterContextProvider } from '@contexts'
import React, { useState } from 'react'
import { LoginRegisterFormProps } from '../LoginModule/interface'
import { RegisterFifthPage } from './RegisterFifthPage'
import { RegisterFirstPage } from './RegisterFirstPage'
import { RegisterFourthPage } from './RegisterFourthPage'
import { RegisterSecondPage } from './RegisterSecondPage'
import { RegisterThirdPage } from './RegisterThirdPage'

export const Register: React.FC<LoginRegisterFormProps> = ({
    setShowRegisterForm,
    setShowLoginForm,
}) => {
    const [step, setStep] = useState(1)

    const renderRegisterForm = () => {
        switch (step) {
            case 1:
                return (
                    <RegisterFirstPage
                        setStep={setStep}
                        setShowLoginForm={setShowLoginForm}
                        setShowRegisterForm={setShowRegisterForm}
                    />
                )
            case 2:
                return <RegisterSecondPage setStep={setStep} />
            case 3:
                return <RegisterThirdPage setStep={setStep} />
            case 4:
                return <RegisterFourthPage setStep={setStep} />
            case 5:
                return <RegisterFifthPage />
        }
    }

    return (
        <RegisterContextProvider>
            <div className="fixed z-10 flex justify-center items-center top-0 left-0 w-full h-screen p-2 bg-secondary/30">
                <div className="w-full flex flex-col max-w-xl h-full max-h-[40rem] rounded-2xl bg-primary">
                    <div className="flex items-center py-3 px-4 gap-8">
                        <button
                            className="w-4 h-4 "
                            onClick={() => {
                                setShowRegisterForm(false)
                            }}
                        >
                            <div className="w-full h-0.5 bg-white rotate-45" />
                            <div className="w-full h-0.5 bg-white -rotate-45 -translate-y-0.5" />
                        </button>
                        <p className="font-semibold text-xl">
                            Langkah {step} dari 5
                        </p>
                    </div>
                    {renderRegisterForm()}
                </div>
            </div>
        </RegisterContextProvider>
    )
}
