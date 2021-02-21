import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand href="/">
                <img
                    src="https://www.gravatar.com/avatar/2be5fbb81f646401a29e4579547d1223"
                    width="30"
                    height="30"
                />{' '}
                Shehab Tweel</Navbar.Brand>
                <Navbar.Collapse id="header-nav">
                    <Nav className="mr-auto">
                        <Link href="/about">
                            <Nav.Link as="a" href="/about">About</Nav.Link>
                        </Link>
                        <Link href="/stuff">
                            <Nav.Link as="a" href="/stuff">My stuff</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
