import React from 'react'
import { Footer} from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar.jsx'

export function Layout() {
  return (
    <div>
        <Navbar />

        <main>
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}
