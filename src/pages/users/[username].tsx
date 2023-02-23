// import React from 'react'
import { getUserProps } from '@ssr'
// import { UserModule } from '@modules'
import type { NextPage } from 'next'

const Profile: NextPage = (props) => {
    console.log(props)
    // return <UserModule props={props} />
    return <div></div>
}

export { getUserProps }

// export async function getServerSideProps() {
//     const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/users/dapa123456`
//     )
//     const responseJson = await response.json()
//     return {
//         props: responseJson,
//     }
// }

export default Profile
