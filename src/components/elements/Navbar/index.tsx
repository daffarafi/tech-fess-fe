import { Home, Profile } from '@icons'
import React from 'react'

export const Navbar: React.FC = () => {
    // TODO: Write element's logic

    return (
        <nav>
            <div className="flex flex-col pr-4 gap-5 pt-3  sticky top-0">
                <div className="flex text-xl  gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-500 rounded-full"></div>
                    <p className="">TechFess</p>
                </div>
                <ul className="flex flex-col gap-5 text-xl">
                    <li className="flex gap-4 ">
                        <Home />
                        <p>Beranda</p>
                    </li>
                    <li className="flex gap-4 ">
                        <Profile />
                        <p>Profile</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
