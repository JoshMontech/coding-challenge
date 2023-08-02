import { Inter } from "next/font/google"
import { ApolloWrapper } from "@/lib/apollo-provider"
import "./globals.css"
import Providers from "./providers"
import MainHeader from "@/components/MainHeader"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body className="relative h-[v00vh] min-h-[100vh] max-w-[100vw] bg-primary text-[100%] text-primary">
                <Providers>
                    <ApolloWrapper>
                        <MainHeader />
                        {children}
                    </ApolloWrapper>
                </Providers>
            </body>
        </html>
    )
}
