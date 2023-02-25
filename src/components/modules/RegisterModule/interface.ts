import React from 'react'
import { LoginRegisterFormProps } from '../LoginModule/interface'

export interface SetStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export interface RegisterFirstPageProps
  extends SetStepProps,
    LoginRegisterFormProps {}

export interface RegisterFifthPageProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>
}
