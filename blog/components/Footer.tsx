import React from 'react';

import { Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Text>&copy; Shehab Tweel 2021 | Hosted on <a href="http://vercel.com">Vercel</a></Navbar.Text>
        </Navbar>
    )
}