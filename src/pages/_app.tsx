import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Aside, Footer, Navbar } from '@elements'
import { AuthContextProvider } from '@contexts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <Head>
                <title>TechFess | By Dapa</title>
                <meta
                    name="description"
                    content="Social Media for Tech Lovers! :D"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="flex container">
                <Navbar />
                <main className="w-full max-w-[650px] border-x-[1px] border-gray-700 min-h-[200vh]">
                    <Component {...pageProps} />
                </main>
                <Aside />
            </div>
            <Footer />
        </AuthContextProvider>
    )
}
