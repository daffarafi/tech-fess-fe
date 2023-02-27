import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@contexts'
import { Ellipsis, Share, Addfriend, Trash, Flag, Pencil } from '@icons'

export const Dropdown: React.FC<{ username: string }> = ({ username }) => {
    const [moreDropdown, setMoreDropdown] = useState(false)
    const { user } = useAuthContext()

    const openShowMore = () => {
        setMoreDropdown(true)
    }

    const closeShowMore = () => {
        setMoreDropdown(false)
    }

    useEffect(() => {
        const handleScroll = () => setMoreDropdown(false)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative flex flex-col">
            <button onClick={openShowMore}>
                <Ellipsis />
            </button>
            <div
                className={`fixed w-full top-0 left-0 h-screen z-20 ${
                    moreDropdown ? '' : 'hidden'
                }`}
                onClick={closeShowMore}
            />
            <div
                className={`absolute z-30 top-0 right-0 bg-primary flex flex-col items-start shadow-[0_0_10px_-4px_#ffffff] rounded-2xl overflow-hidden ${
                    moreDropdown ? '' : 'hidden'
                }`}
            >
                {user?.username === username ? (
                    <button className="flex items-center gap-2 justify-start bg-primary whitespace-nowrap w-full text-start px-5 py-2 hover:bg-secondary/50 ">
                        <Pencil fill="fill-white" size="w-4 h-4" />
                        <p>Edit Postingan</p>
                    </button>
                ) : (
                    <button className="flex items-center gap-2 justify-start bg-primary whitespace-nowrap w-full text-start px-5 py-2 hover:bg-secondary/50 ">
                        <Addfriend fill="fill-white" size="w-4 h-4" />
                        <p>Ikuti @{username}</p>
                    </button>
                )}
                <button className="flex  items-center gap-2 justify-start bg-primary whitespace-nowrap w-full text-start px-5 py-2 hover:bg-secondary/50">
                    <Share fill="fill-white" size="w-4 h-4" />
                    <p>Bagikan post ini</p>
                </button>
                {user?.username === username ? (
                    <button className="flex  items-center gap-2 justify-start bg-primary whitespace-nowrap w-full text-danger text-start px-5 py-2 hover:bg-secondary/50">
                        <Trash fill="fill-danger" size="w-4 h-4" />
                        <p>Hapus Postingan</p>
                    </button>
                ) : (
                    <button className="flex  items-center gap-2 justify-start bg-primary whitespace-nowrap w-full text-danger text-start px-5 py-2 hover:bg-secondary/50">
                        <Flag fill="fill-danger" size="w-4 h-4" />
                        <p>Laporkan Postingan Ini</p>
                    </button>
                )}
            </div>
        </div>
    )
}
