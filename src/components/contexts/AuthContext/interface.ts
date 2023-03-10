import React, { ReactNode } from 'react'

export interface AuthContextProps {
  user: UserProps | null
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
  submitEditForm: ({}: EditProps) => Promise<[any, any, any]>
}

export interface UserProps {
  id: number
  createdAt: string
  updatedAt: string
  displayName: string
  username: string
  birthdate: string
  biodata: string
  email: string
  closefriends: { id: number }[]
  photo: string
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

export interface EditProps {
  displayName: string
  biodata: string
  photo: File | null
  banner: File | null
}
