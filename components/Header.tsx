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
                <div className="ml-auto">
                <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/shahoob/website?label=%20&style=flat-square" />
                </div>
        </Navbar>
    )
}
