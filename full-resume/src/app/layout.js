import {Comfortaa} from 'next/font/google'

const comfortaa = Comfortaa({
    subsets: ['latin'],
    variable: "--font-comfortaa",
    display: 'swap',
})

export const metadata = {
    title: 'Markian V Resume',
    description: 'My App is a...',
}

export default function RootLayout({ children }) {
    return (
    <html lang="en" className={comfortaa.className}>
        <body>
            <div id="root">{children}</div>
        </body>
    </html>
)
}