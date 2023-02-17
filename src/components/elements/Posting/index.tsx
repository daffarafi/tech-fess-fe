import { Comment, Ellipsis, Like, Share } from '@icons'
import React from 'react'

export const Posting: React.FC = () => {
    // TODO: Write element's logic

    return (
        <div className="flex w-full gap-2 border-y-[1px] border-gray-700 px-3 py-2">
            <div className="w-12 h-12 bg-gray-500 rounded-full "></div>
            <div className="w-full flex-1 ">
                <div className="flex w-full justify-between">
                    <div className="flex gap-2 ">
                        <h1 className="font-medium">Daffa Rafi Prasetyo</h1>
                        <p className="text-secondary">@DaffaTGI - 6h</p>
                    </div>
                    <div>
                        <Ellipsis />
                    </div>
                </div>
                <div className="text-sm">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis incidunt nihil omnis sed aspernatur at? Tempore
                        ea aspernatur distinctio aliquam?
                    </p>
                </div>
                <div className="flex w-full justify-around text-xs text-secondary py-3">
                    <div className="flex items-center gap-1">
                        <div>
                            <Like />
                        </div>
                        <p>999</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            <Comment />
                        </div>
                        <p>999</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            <Share />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
