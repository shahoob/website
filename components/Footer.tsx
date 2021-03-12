import React from 'react';

import { Button, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { Share } from 'react-bootstrap-icons';

import SocialBar from './SocialBar';

export default function Footer() {
    const popover = (
        <Popover id="popover-social">
            <Popover.Title as="h3">Social links</Popover.Title>
            <Popover.Content>
                <SocialBar/>
            </Popover.Content>
        </Popover>
    );

    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Text>&copy; Shehab Tweel 2021 | Hosted on <a href="http://vercel.com">Vercel</a></Navbar.Text>
            <Navbar.Collapse>
                <div className="ml-auto">
                    <OverlayTrigger overlay={popover} placement="top" trigger="click">
                        <Button>
                            <Share />
                        </Button>
                    </OverlayTrigger>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
