import { Dispatch, SetStateAction } from 'react'

export interface DropdownProps {
  isPublic: Boolean
  setIsPublic: Dispatch<SetStateAction<boolean>>
}
