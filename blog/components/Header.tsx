import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">
                <img
                    src={`https://www.gravatar.com/avatar/${process.env.GRAVATAR_HASH}`}
                    width="30"
                    height="30"
                />{' '}
                Shehab Tweel's Blog</Navbar.Brand>
                <Navbar.Collapse id="header-nav">
                    <Nav className="mr-auto">
                        <Link href="shehabtweel.ly">
                        <Nav.Link as="a" href="https://shehabtweel.ly">Back to main site</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
