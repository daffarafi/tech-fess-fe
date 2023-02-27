import { useAuthContext } from '@contexts'
import { Compass, Home, Profile } from '@icons'
import Link from 'next/link'
import React from 'react'

export const Navbar: React.FC = () => {
    const { loadingState, user } = useAuthContext()

    const renderNavbar = () => {
        if (loadingState) {
            return (
                <div className="w-full my-20 flex justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            )
        }
        return (
            <>
                <li>
                    <Link
                        href={'/'}
                        className="flex gap-4 hover:bg-secondary/25 transition w-fit xl:w-auto p-3 xl:pr-6 rounded-full"
                    >
                        <Home />
                        <p className="hidden xl:block">Beranda</p>
                    </Link>
                </li>
                {user ? (
                    <li className="">
                        <Link
                            href={`/users/${user.username}`}
                            className="flex gap-4 hover:bg-secondary/25 transition w-fit xl:w-auto p-3 xl:pr-6 rounded-full"
                        >
                            <Profile />
                            <p className="hidden xl:block">Profile</p>
                        </Link>
                    </li>
                ) : (
                    ''
                )}
                <li>
                    <Link
                        href={'/explore'}
                        className="flex gap-4 hover:bg-secondary/25 transition w-fit xl:w-auto p-3 xl:pr-6 rounded-full"
                    >
                        <Compass />
                        <p className="hidden xl:block">Jelajahi</p>
                    </Link>
                </li>
            </>
        )
    }

    return (
        <nav className="fixed bottom-0 w-full sm:w-auto sm:static">
            <div className="flex sm:flex-col pr-4 gap-5  sticky top-0">
                <div className="hidden sm:flex text-xl gap-4">
                    <Link
                        href={'/'}
                        className="flex gap-4 hover:bg-secondary/25 transition w-fit xl:w-auto p-3 xl:pr-6 rounded-full"
                    >
                        <div className="w-[25px] h-[25px] bg-gray-500 rounded-full"></div>
                        <p className="xl:block hidden">TechFess</p>
                    </Link>
                </div>
                <ul className="flex justify-between w-full sm:w-auto sm:justify-start sm:flex-col gap-3 text-xl">
                    {renderNavbar()}
                </ul>
            </div>
        </nav>
    )
}
