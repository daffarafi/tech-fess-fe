import React, { ReactNode } from 'react'

export interface AuthContextProps {
  loadingState: boolean
  errorMessage: string
  isDataValid: boolean
  setIsDataValid: React.Dispatch<React.SetStateAction<boolean>>
  loginSuccess: boolean
  submitLoginForm: ({ email, password }: LoginProps) => Promise<void>
  submitRegisterForm: ({
    email,
    username,
    displayName,
    password,
    birthdate,
  }: RegisterProps) => Promise<void>
  getUserByEmail: (email: string) => Promise<string>
  getUserByUsername: (email: string) => Promise<number>
}

export interface AuthContextProviderProps {
  children: ReactNode
}

export interface LoginProps {
  email: string
  password: string
}

export interface RegisterProps {
  email: string
  username: string
  displayName: string
  password: string
  birthdate: string
}
