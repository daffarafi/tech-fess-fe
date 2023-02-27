import { Dispatch, SetStateAction } from 'react'

export interface PostProps {
  id: number
  createdAt: Date
  updatedAt: Date
  content: string
  isPrivate: Boolean
  userId: number
  user: {
    displayName: string
    username: string
  }
}

export interface DropdownProps {
  isPrivate: Boolean
  setIsPrivate: Dispatch<SetStateAction<boolean>>
}
