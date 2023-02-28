import type { GetServerSideProps } from 'next'

export const getUserProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}users/dapa123456`
  )
  const responseJson = await response.json()
  return {
    props: responseJson,
  }
}
