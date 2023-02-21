import React from 'react'

export interface StepProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export interface LoginRegisterFormProps {
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>
}
export interface RegisterFirstPageProps
  extends StepProps,
    LoginRegisterFormProps {
  displayName: string
  setDisplayName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  birthdate: string
  setBirthdate: React.Dispatch<React.SetStateAction<string>>
}

export interface RegisterSecondPageProps extends StepProps {
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export interface RegisterThirdPageProps extends StepProps {
  displayName: string
  email: string
  username: string
  birthdate: string
}

export interface RegisterFourthPageProps extends StepProps {
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  submitButtonHandler: () => Promise<void>
}

export interface RegisterFifthPageProps {
  loadingState: Boolean
}
