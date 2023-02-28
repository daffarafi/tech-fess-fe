import { useModalContext } from '@contexts'
import { Button } from '@elements'
import React from 'react'

export const Modal: React.FC = () => {
    const {
        showModal,
        loadingState,
        title,
        message,
        firstBtnHandler,
        secondBtnHandler,
        firstBtnText,
        secondBtnText,
    } = useModalContext()

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-secondary/50 z-50 flex justify-center items-center ${
                showModal ? '' : 'hidden'
            }`}
        >
            <div className="bg-primary relative rounded-2xl p-4 flex flex-col gap-3">
                <div
                    className={`absolute w-full h-full top-0 left-0 rounded-2xl bg-primary/50 flex justify-center items-center ${
                        loadingState ? '' : 'hidden'
                    }`}
                >
                    <div className="w-8 h-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent" />
                </div>
                <div className="border-b border-gray-600 text-lg font-bold">
                    {title}
                </div>
                <div className="font-medium">{message}</div>
                <div className="flex w-full gap-4">
                    <Button fullWidth onClick={firstBtnHandler}>
                        {firstBtnText}
                    </Button>
                    <Button fullWidth onClick={secondBtnHandler}>
                        {secondBtnText}
                    </Button>
                </div>
            </div>
        </div>
    )
}
