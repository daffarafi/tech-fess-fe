import React from 'react'
import { ContentTabsProps } from './interface'

export const ContentTabs: React.FC<ContentTabsProps> = ({ tab, setTab }) => {
    return (
        <div className="w-full grid grid-cols-3 text-center">
            <button
                className="hover:bg-gray-700 transition-all"
                onClick={() => setTab('post')}
            >
                <p
                    className={`py-3 ${
                        tab === 'post' ? 'text-white' : 'text-secondary/75'
                    }`}
                >
                    Post
                </p>
                <div
                    className={`w-full h-1 transition-all ${
                        tab === 'post' ? 'bg-secondary' : 'bg-secondary/25'
                    }`}
                />
            </button>
            <button
                className="hover:bg-gray-700 transition-all"
                onClick={() => setTab('disukai')}
            >
                <p
                    className={`py-3 ${
                        tab === 'disukai' ? 'text-white' : 'text-secondary/75'
                    }`}
                >
                    Disukai
                </p>
                <div
                    className={`w-full h-1 transition-all ${
                        tab === 'disukai' ? 'bg-secondary' : 'bg-secondary/25'
                    }`}
                />
            </button>
            <button
                className="hover:bg-gray-700 transition-all"
                onClick={() => setTab('teman')}
            >
                <p
                    className={`py-3 ${
                        tab === 'teman' ? 'text-white' : 'text-secondary/75'
                    }`}
                >
                    Teman
                </p>
                <div
                    className={`w-full h-1 transition-all ${
                        tab === 'teman' ? 'bg-secondary' : 'bg-secondary/25'
                    }`}
                />
            </button>
        </div>
    )
}
