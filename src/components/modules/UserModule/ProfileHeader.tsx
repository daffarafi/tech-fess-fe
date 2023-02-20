import { Button } from '@elements'
import { Cake, Date } from '@icons'

export const ProfileHeader: React.FC = () => {
    return (
        <>
            <div className="w-full h-60 bg-gray-400"></div>
            <div className="relative">
                <div className="absolute top-0 right-0 mx-4 my-3">
                    <Button variant="tertiary">Edit Profile</Button>
                </div>
                <div className="px-4 py-3 flex flex-col gap-3">
                    <div className="rounded-full border-4 border-primary bg-gray-400 w-40 h-40 -mt-24"></div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold -mb-1">
                                Daffa Rafi
                            </h2>
                            <p className="text-secondary/75 text-sm">@Dapa</p>
                        </div>
                        <p>Hallo Dunia!</p>
                        <div className="flex gap-4 text-sm">
                            <div className="flex gap-1 items-center">
                                <Cake />
                                <p className="text-secondary/75">
                                    Lahir 24 Juni 2003
                                </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Date />
                                <p className="text-secondary/75">
                                    Bergabung Juli 2022
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-secondary/75 text-sm">
                                <span className="text-white">26</span> Teman
                                dekat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
