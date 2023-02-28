import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Aside, Footer, Modal, Navbar } from '@elements'
import { AuthContextProvider, ModalContextProvider } from '@contexts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ModalContextProvider>
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
                <div className="flex container max-w-6xl">
                    <Navbar />
                    <main className="w-full max-w-[650px] border-x border-gray-700 min-h-screen">
                        <Component {...pageProps} />
                    </main>
                    <Aside />
                </div>
                <Footer />
                <Modal />
            </AuthContextProvider>
        </ModalContextProvider>
    )
}
