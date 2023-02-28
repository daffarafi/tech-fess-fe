import { useAuthContext } from '@contexts'
import { Button } from '@elements'
import { Compass, Home, Profile } from '@icons'
import { Login, Register } from '@modules'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar: React.FC = () => {
    const { loadingState, user } = useAuthContext()
    const [showAuth, setShowAuth] = useState<boolean>(false)
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [logoutLoading, setLogoutLoading] = useState(false)

    const logoutButtonHandler = async () => {
        try {
            setLogoutLoading(true)
            localStorage.removeItem('AT')
            window.location.reload()
        } catch (err) {
        } finally {
            setLogoutLoading(false)
        }
    }

    const renderProfileBtn = () => {
        return (
            <div
                className={`absolute bg-primary  text-sm rounded-lg overflow-hidden shadow-[0_0_10px_-4px_#ffffff] flex flex-col gap-2 bottom-full right-0 ${
                    showAuth ? '' : 'hidden'
                }`}
            >
                <Link
                    href={'/users'}
                    className="block hover:bg-white/25 w-full text-start py-3 px-2 transition-all whitespace-nowrap"
                >
                    Buka profile
                </Link>
                <button
                    className="block hover:bg-white/25 w-full text-start py-3 px-2 transition-all text-danger whitespace-nowrap"
                    onClick={logoutButtonHandler}
                    disabled={logoutLoading}
                >
                    {logoutLoading ? (
                        <div className="w-full my-20 flex justify-center">
                            <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                        </div>
                    ) : (
                        `Keluar dari @${user?.username}`
                    )}
                </button>
            </div>
        )
    }

    const renderAuthBtn = () => {
        return (
            <div
                className={`absolute bg-primary py-2 px-4 rounded-2xl shadow-[0_0_10px_-4px_#ffffff] flex flex-col gap-2 bottom-full right-0 ${
                    showAuth ? '' : 'hidden'
                }`}
            >
                <Button fullWidth onClick={() => setShowLoginForm(true)}>
                    <span className="block px-4">Masuk</span>
                </Button>
                <Button fullWidth onClick={() => setShowRegisterForm(true)}>
                    <span className="block px-4">Register</span>
                </Button>
            </div>
        )
    }

    const renderAuth = () => {
        return (
            <>
                <div className={`${showRegisterForm ? '' : 'hidden'}`}>
                    <Register
                        setShowRegisterForm={setShowRegisterForm}
                        setShowLoginForm={setShowLoginForm}
                    />
                </div>
                <div className={`${showLoginForm ? '' : 'hidden'}`}>
                    <Login
                        setShowLoginForm={setShowLoginForm}
                        setShowRegisterForm={setShowRegisterForm}
                    />
                </div>
            </>
        )
    }

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
                <li className="relative md:hidden flex items-center">
                    {user ? renderProfileBtn() : renderAuthBtn()}
                    <button
                        className="flex  hover:bg-secondary/25 transition w-fit  xl:w-auto p-3 rounded-full relative overflow-hidden justify-center items-center"
                        onClick={() => {
                            setShowAuth(!showAuth)
                        }}
                    >
                        {user ? (
                            <Image
                                fill
                                src={user.photo || '/default-profile.jpeg'}
                                alt="user-photo"
                                className="object-cover"
                            />
                        ) : (
                            <Profile />
                        )}

                        <p className="hidden xl:block">Profile</p>
                    </button>
                    <div className={user ? 'hidden' : ''}>{renderAuth()}</div>
                </li>
            </>
        )
    }

    return (
        <>
            <nav className="fixed z-20 md:z-10 bg-primary bottom-0 left-0 w-full md:w-auto md:static">
                <div className="flex md:flex-col pl-4 md:pl-0 pr-4 gap-5  sticky top-0">
                    <div className="hidden md:flex text-xl gap-4">
                        <Link
                            href={'/'}
                            className="flex gap-4 hover:bg-secondary/25 transition w-fit xl:w-auto p-3 xl:pr-6 rounded-full"
                        >
                            <div className="w-[25px] h-[25px] bg-gray-500 rounded-full"></div>
                            <p className="xl:block hidden">TechFess</p>
                        </Link>
                    </div>
                    <ul className="flex justify-between w-full md:w-auto md:justify-start md:flex-col gap-3 text-xl">
                        {renderNavbar()}
                    </ul>
                </div>
            </nav>
        </>
    )
}
