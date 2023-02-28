import { Button } from '@elements'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Dropdown } from '../../modules/HomeModule/Dropdown'
import { EditPostProps } from './interface'

export const EditPost: React.FC<EditPostProps> = ({
    postId,
    content,
    photo,
    isPrivate,
    displayName,
    closeEditForm,
}) => {
    const router = useRouter()
    const [editedIsPrivate, setEditedIsPrivate] = useState(isPrivate)
    const [editedContent, setEditedContent] = useState(content)
    const [loadingState, setLoadingState] = useState(false)

    const editPostHandler = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}postings/${postId}`,
                {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                    body: JSON.stringify({
                        content: editedContent,
                        isPrivate: editedIsPrivate,
                    }),
                }
            )

            const responseJson = await response.json()
            console.log(responseJson)
            closeEditForm()
            router.reload()
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingState(false)
        }
    }

    const textareaResize = (e: HTMLElement) => {
        e.style.height = '0'
        e.style.height = e.scrollHeight + 'px'
    }

    return (
        <div className="fixed z-30 w-full h-screen top-0 left-0  bg-secondary/50 flex justify-center items-center">
            <div className="w-full max-w-xl rounded-2xl bg-primary relative overflow-hidden">
                <div
                    className={`absolute flex justify-center items-center z-10 top-0 left-0 w-full h-full bg-secondary/50 ${
                        loadingState ? '' : 'hidden'
                    }`}
                >
                    <div className="w-16 aspect-square rounded-full animate-spin border-[3px] border-primary border-x-transparent"></div>
                </div>
                <div className="flex items-center py-3 px-4 gap-8">
                    <button className="w-4 h-4 " onClick={closeEditForm}>
                        <div className="w-full h-0.5 bg-white rotate-45" />
                        <div className="w-full h-0.5 bg-white -rotate-45 -translate-y-0.5" />
                    </button>
                    <h1 className="font-semibold text-xl">Edit Postingan</h1>
                </div>
                <div
                    className={`flex w-full gap-2 border-y-[1px] border-gray-700 px-3 py-2`}
                >
                    <div className="relative block w-12 h-12 overflow-hidden bg-gray-500 rounded-full ">
                        <Image
                            src={photo}
                            alt="user-photo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex flex-col w-full gap-1">
                            <p className="font-medium w-min max-w-[14rem] truncate">
                                {displayName}
                            </p>
                            <textarea
                                name="upload-post"
                                id="uploadPost"
                                placeholder="Hari ini hujan! Saya akan kembali tidur"
                                maxLength={280}
                                value={editedContent}
                                onInput={(e) => {
                                    const target = e.target as HTMLButtonElement
                                    setEditedContent(target.value)
                                    textareaResize(target as HTMLElement)
                                }}
                                className="bg-transparent w-full text-sm resize-none focus:outline-none min-h-[2rem]"
                            />
                        </div>
                        <p
                            className={`text-end ${
                                editedContent.length > 230
                                    ? 'text-danger'
                                    : 'text-secondary'
                            }`}
                        >{`${editedContent.length}/280`}</p>
                        <div className="flex gap-3 flex-row-reverse">
                            <Button
                                variant="primary"
                                onClick={editPostHandler}
                                disabled={
                                    (editedContent.length ? false : true) ||
                                    editedContent === content
                                }
                            >
                                Edit
                            </Button>
                            <Dropdown
                                showOnTop
                                isPrivate={editedIsPrivate}
                                setIsPrivate={setEditedIsPrivate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
