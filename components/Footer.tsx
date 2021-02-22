import React from 'react';
import { Navbar } from 'react-bootstrap';
import SocialBar from './SocialBar';

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Text>&copy; Copyright Shehab Tweel 2021</Navbar.Text>
            <div className="m-1">
                <Navbar.Text>| Hosted on <a href="http://vercel.com">Vercel</a>
                </Navbar.Text>
            </div>
            <div className="ml-auto">
                <SocialBar/>
            </div>
        </Navbar>
    )
}
