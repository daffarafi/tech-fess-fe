import { Button } from '@elements'
import { Arrowdown, Earth, Friend } from '@icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { DropdownProps } from './interface'

export const Dropdown: React.FC<DropdownProps> = ({
    isPublic,
    setIsPublic,
}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible)
    }

    const closeDropdown = () => {
        setIsDropdownVisible(false)
    }

    return (
        <div
            className={`relative z-10 before:fixed before:-z-10 before:top-0 before:left-0 before:w-full before:h-screen ${
                isDropdownVisible ? '' : 'before:hidden'
            }`}
            onClick={(e) => {
                e.stopPropagation()
                closeDropdown()
            }}
        >
            <Button
                variant="tertiary"
                onClick={(e) => {
                    e.stopPropagation()
                    toggleDropdown()
                }}
            >
                <div className="flex items-center gap-1">
                    {isPublic ? (
                        <Earth fill="fill-secondary" size="w-3" />
                    ) : (
                        <Friend fill="fill-secondary" size="w-3" />
                    )}
                    <span className="text-secondary text-sm">
                        {isPublic ? 'Semua orang' : 'Hanya teman dekat'}
                    </span>
                    <div
                        className={`transition ${
                            isDropdownVisible ? 'rotate-180' : ''
                        }`}
                    >
                        <Arrowdown />
                    </div>
                </div>
            </Button>
            <div
                className={`absolute top-12  bg-primary shadow-[0_0_10px_-4px_#ffffff] rounded-3xl w-80 py-3 ${
                    isDropdownVisible ? '' : 'hidden'
                }`}
            >
                <h1 className="text-xl font-semibold px-3 pb-1">
                    Pilih audiens
                </h1>
                <button
                    className="flex gap-3 items-center px-4 py-2 hover:bg-secondary/50 w-full transition-all"
                    onClick={() => {
                        setIsPublic(true)
                    }}
                >
                    <div className="bg-secondary flex w-10 h-10 rounded-full justify-center items-center">
                        <Earth fill="fill-white" size="w-5" />
                    </div>
                    <p className="font-medium">Semua orang</p>
                </button>
                <button
                    className="flex gap-3 items-center px-4 py-2 hover:bg-secondary/50 w-full transition-all"
                    onClick={() => {
                        setIsPublic(false)
                    }}
                >
                    <div className="bg-success flex w-10 h-10 rounded-full justify-center items-center">
                        <Friend fill="fill-white" size="w-5" />
                    </div>
                    <div className="text-start">
                        <p className="font-medium">Teman dekat</p>
                        <div className="flex gap-2 text-sm">
                            <p>
                                20 <span className="text-secondary">Teman</span>
                            </p>
                            <Link href={'/edit'} className="underline">
                                Edit
                            </Link>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}
