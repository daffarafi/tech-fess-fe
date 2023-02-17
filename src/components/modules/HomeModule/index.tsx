import { Button, Dropdown, Posting } from '@elements'
import React from 'react'

export const HomeModule: React.FC = () => {
    const sendPostHandler = () => {}

    const textareaResize = (e: HTMLElement) => {
        e.style.height = '0'
        e.style.height = e.scrollHeight + 'px'
    }

    return (
        <>
            <div className="sticky top-0 py-3 px-3 border-b-[1px] border-gray-700 before:backdrop-blur-sm before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full">
                <h1 className="font-medium text-lg">Beranda</h1>
            </div>
            <div>
                <div className="flex w-full gap-2 border-y-[1px] border-gray-700 px-3 py-2">
                    <div className="w-12 h-12 bg-gray-500 rounded-full "></div>
                    <div className="w-full flex-1">
                        <Dropdown></Dropdown>
                        <textarea
                            name="upload-post"
                            id="uploadPost"
                            placeholder="Apa yang sedang terjadi?"
                            maxLength={280}
                            onInput={(e) =>
                                textareaResize(e.target as HTMLElement)
                            }
                            className="bg-transparent w-full resize-none focus:outline-none min-h-[2rem] my-3"
                        ></textarea>
                        <div className="flex flex-row-reverse">
                            <Button
                                variant="primary"
                                fullWidth={false}
                                disabled={false}
                                onClick={sendPostHandler}
                            >
                                Kirim
                            </Button>
                        </div>
                    </div>
                </div>
                <Posting />
            </div>
        </>
    )
}
