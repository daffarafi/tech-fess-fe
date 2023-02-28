// import { getUserProps } from '@ssr'
import { UserModule } from '@modules'
import type { GetServerSideProps, NextPage } from 'next'

const Profile: NextPage<{
    id: number
    displayName: string
    username: string
    birthdate: string
    biodata: string
    createdAt: string
    closefriends: []
}> = (props) => {
    return <UserModule props={props} />
}

// export { getUserProps }

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { params } = context
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${params?.username}`
        )
        const responseJson = await response.json()

        if (!response.ok) {
            throw new Error('User not found')
        }

        return {
            props: responseJson,
        }
    } catch (err) {
        return {
            notFound: true,
        }
    }
}

export default Profile
