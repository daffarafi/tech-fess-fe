import React, { createContext, useContext, useState } from 'react'
import { ModalContextProps, ModalContextProviderProps } from './interface'

const ModalContext = createContext({} as ModalContextProps) // TODO: Declare interface of contextValue

export const useModalContext = () => useContext(ModalContext)

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({
    children,
}) => {
    const [showModal, setShowModal] = useState(false)
    const [loadingState, setLoadingState] = useState(false)
    const [title, setTitle] = useState('Kosong')
    const [message, setMessage] = useState('Kosong')
    const [firstBtnText, setFirstBtnText] = useState('Kosong')
    const [secondBtnText, setSecondBtnText] = useState('Kosong')
    const [firstBtnHandler, setFirstBtnHandler] = useState<() => any>(() => {})
    const [secondBtnHandler, setSecondBtnHandler] = useState<() => any>(
        () => {}
    )

    const contextValue = {
        showModal,
        setShowModal,
        title,
        setTitle,
        message,
        setMessage,
        firstBtnText,
        setFirstBtnText,
        secondBtnText,
        setSecondBtnText,
        firstBtnHandler,
        setFirstBtnHandler,
        secondBtnHandler,
        setSecondBtnHandler,
        loadingState,
        setLoadingState,
    }

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )
}
