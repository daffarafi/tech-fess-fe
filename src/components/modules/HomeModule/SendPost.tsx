import { Button, Dropdown } from '@elements'
import React, { useState } from 'react'

export const SendPost: React.FC = () => {
    const [isPostFocused, setIsPostFocused] = useState(false)
    const [isPublic, setIsPublic] = useState(true)
    const [postContent, setPostContent] = useState('')

    const sendPostHandler = () => {}

    const textareaResize = (e: HTMLElement) => {
        e.style.height = '0'
        e.style.height = e.scrollHeight + 'px'
    }

    return (
        <div className="flex w-full gap-2 border-y-[1px] border-gray-700 px-3 py-2">
            <div className="w-12 h-12 bg-gray-500 rounded-full "></div>
            <div className="w-full flex-1">
                <Dropdown
                    isPublic={isPublic}
                    setIsPublic={setIsPublic}
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
                ></textarea>
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
