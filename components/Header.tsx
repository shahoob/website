import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <img
                    src="https://www.gravatar.com/avatar/2be5fbb81f646401a29e4579547d1223"
                    width="30"
                    height="30"
                />{' '}
                Shehab Tweel</Navbar.Brand>
        </Navbar>
    )
}
