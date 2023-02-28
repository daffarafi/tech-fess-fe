import { Button } from '@elements'
import { Dropdown } from './Dropdown'
import React, { useState } from 'react'
import Image from 'next/image'

export const SendPost: React.FC<{
    getPosts: () => Promise<void>
    photo: string
}> = ({ getPosts, photo }) => {
    const [isPostFocused, setIsPostFocused] = useState(false)
    const [isPrivate, setIsPrivate] = useState(false)
    const [postContent, setPostContent] = useState('')
    const [loadingState, setLoadingState] = useState(false)

    const sendPostHandler = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}postings`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                    body: JSON.stringify({
                        content: postContent,
                        isPrivate,
                    }),
                }
            )

            const responseJson = await response.json()

            getPosts()
            setPostContent('')
            setIsPrivate(false)
            console.log(responseJson)
        } catch (err) {
        } finally {
            setLoadingState(false)
        }
    }

    const textareaResize = (e: HTMLElement) => {
        e.style.height = '0'
        e.style.height = e.scrollHeight + 'px'
    }

    return (
        <div className="flex relative w-full gap-2 border-y-[1px] border-gray-700 px-3 py-2">
            {loadingState ? (
                <div className="absolute z-10 top-0 left-0 w-full h-full bg-secondary/25 flex justify-center items-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-white border-x-transparent"></div>
                </div>
            ) : (
                ''
            )}
            <div className="w-12 h-12 bg-gray-500 rounded-full relative overflow-hidden">
                <Image
                    fill
                    src={photo || '/default-profile.jpeg'}
                    className="object-cover"
                    alt="user-photo"
                />
            </div>
            <div className="w-full flex-1">
                <Dropdown
                    isPrivate={isPrivate}
                    setIsPrivate={setIsPrivate}
                ></Dropdown>
                <textarea
                    name="upload-post"
                    id="uploadPost"
                    placeholder="Apa yang sedang terjadi?"
                    maxLength={280}
                    value={postContent}
                    onInput={(e) => {
                        const target = e.target as HTMLButtonElement
                        setPostContent(target.value)
                        textareaResize(target as HTMLElement)
                    }}
                    onFocus={() => {
                        setIsPostFocused(true)
                    }}
                    onBlur={() => {
                        setIsPostFocused(false)
                    }}
                    className="bg-transparent w-full resize-none focus:outline-none min-h-[2rem] my-3"
                />
                <div className="flex flex-row-reverse items-center gap-2">
                    <Button
                        variant="primary"
                        onClick={sendPostHandler}
                        disabled={postContent.length ? false : true}
                    >
                        Kirim
                    </Button>
                    {isPostFocused ? (
                        <p
                            className={` ${
                                postContent.length > 230
                                    ? 'text-danger'
                                    : 'text-secondary'
                            }`}
                        >{`${postContent.length}/280`}</p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}
