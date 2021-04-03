import React from "react"
import { Link } from 'gatsby'

export default function Layout({ children }) {

    return (
        <div style={{ margin: '3rem auto', maxWidth: '768px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <h1 style={{ fontSize: '1.5rem', display: 'inline-block' }}>My new Gatsby site!</h1>
                </Link>
                <nav style={{ display: 'inline-block' }}>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>

            {children}
        </div>);
}