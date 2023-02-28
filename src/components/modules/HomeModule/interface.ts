import { Dispatch, SetStateAction } from 'react'

export interface PostProps {
  id: number
  createdAt: Date
  updatedAt: Date
  content: string
  isPrivate: boolean
  userId: number
  user: {
    displayName: string
    username: string
  }
}

export interface DropdownProps {
  isPrivate: boolean
  showOnTop?: boolean
  setIsPrivate: Dispatch<SetStateAction<boolean>>
}
