// import { useAuthContext } from '@contexts'
import { Arrowleft } from '@icons'
// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
// import type { GetServerSideProps } from 'next'
// import { Content } from './Content'
import { ContentTabs } from './ContentTabs'
import { tabsProps } from './interface'
import { ProfileHeader } from './ProfileHeader'

// export const UserModule: React.FC = ({ props }) => {
export const UserModule: React.FC = () => {
    // const router = useRouter()
    const [tab, setTab] = useState<tabsProps['tab']>('post')
    // const [content, setContent] = useState([])
    // const [loadingState, setLoadingState] = useState(false)

    // const getPostsByUserId = async () => {
    //     try {
    //         setLoadingState(true)

    //         const { username } = router.query
    //         console.log(username)

    //         const response = await fetch(
    //             `${process.env.NEXT_PUBLIC_API_URL}/users/`
    //         )
    //         const responseJson = await response.json()

    //         setContent(responseJson)
    //     } catch (err) {
    //         console.log(err)
    //     } finally {
    //         setLoadingState(false)
    //     }
    // }

    useEffect(() => {
        // console.log(props)
    }, [])

    return (
        <>
            {/* <div>test {props.hello}</div> */}
            <div className="sticky z-10 top-0 py-3 px-5 flex items-center gap-8 bg-primary/50   before:backdrop-blur-sm before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full">
                <Arrowleft />
                <div>
                    <h1 className="font-medium text-lg">Daffa Rafi</h1>
                    <p className="text-sm text-secondary">32 Post</p>
                </div>
            </div>
            <ProfileHeader />
            <ContentTabs tab={tab} setTab={setTab} />
            {/* <Content posts={content} loadingState={loadingState} /> */}
        </>
    )
}
