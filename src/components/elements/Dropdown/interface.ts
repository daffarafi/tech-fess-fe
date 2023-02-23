import { Dispatch, SetStateAction } from 'react'

export interface DropdownProps {
  isPrivate: Boolean
  setIsPrivate: Dispatch<SetStateAction<boolean>>
}
