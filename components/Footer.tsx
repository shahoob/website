import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Text>&copy; Copyright Shehab Tweel 2021,</Navbar.Text>
            <div className="m-1">
                <Navbar.Text>Hosted on <a href="http://vercel.com">Vercel</a>
                </Navbar.Text>
            </div>
        </Navbar>
    )
}
