'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../App.jsx'), { ssr: false })

export function ClientOnly() {
    return <App />
}

export default ClientOnly