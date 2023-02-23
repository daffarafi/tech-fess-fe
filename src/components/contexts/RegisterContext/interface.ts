import React, { ReactNode } from 'react'

export interface RegisterContextProps {
  displayName: string
  setDisplayName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  birthdate: string
  setBirthdate: React.Dispatch<React.SetStateAction<string>>
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  getUserByEmail: (email: string) => Promise<string>
  getUserByUsername: (email: string) => Promise<number>
  loadingState: boolean
}

export interface RegisterContextProviderProps {
  children: ReactNode
}
