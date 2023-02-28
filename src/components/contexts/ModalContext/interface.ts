import { ReactNode } from 'react'

export interface ModalContextProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  loadingState: boolean
  setLoadingState: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  firstBtnText: string
  setFirstBtnText: React.Dispatch<React.SetStateAction<string>>
  secondBtnText: string
  setSecondBtnText: React.Dispatch<React.SetStateAction<string>>
  firstBtnHandler: () => any
  setFirstBtnHandler: React.Dispatch<React.SetStateAction<() => any>>
  secondBtnHandler: () => any
  setSecondBtnHandler: React.Dispatch<React.SetStateAction<() => any>>
}
export interface ModalContextProviderProps {
  children: ReactNode
}
