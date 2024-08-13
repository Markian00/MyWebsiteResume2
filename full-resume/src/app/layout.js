import {Inter} from 'next/font/google'

const roboto = Inter({
    subsets: ['latin'],
    variable: "--font-inter",
    display: 'swap'
})

export const metadata = {
    title: 'Markian V Resume',
    description: 'Website Resume for Markian Voronovych, Software Engineer and Cyber Security Specialist. ' +
        'I write code in 5+ languages, hold strong academic standing with a 3.85 GPA and have several projects ' +
        'demonstrating my vast array of skills. I will prove to you that a jack of all trades can be a master of some!' +
        'In my short Software Engineering Career I\'ve had the opportunity to work with Javascript and Flutter professionally. I\'ve also studied Python Java, C and C++ in University. My relentless personality and detail oriented mind define my work in software engineering. I\'m a fast learner and an adaptable developer because I have an undeniably strong grasp of the fundamentals.',
    icons: {
        icon: "./icon.svg"
    }
}

export default function RootLayout({ children }) {
    return (
    <html lang="en" className={roboto.className}>
        <body>
            <div id="root">{children}</div>
        </body>
    </html>
    )
}