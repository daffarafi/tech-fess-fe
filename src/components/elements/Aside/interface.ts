import React from 'react'

export interface RegisterStepProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export interface RegisterFirstPageProps extends RegisterStepProps {
  displayName: string
  setDisplayName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

export interface RegisterSecondPageProps extends RegisterStepProps {
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export interface RegisterThirdPageProps extends RegisterStepProps {
  displayName: string
  email: string
  username: string
}

export interface RegisterFourthPageProps extends RegisterStepProps {
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
}
