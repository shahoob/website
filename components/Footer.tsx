import React from 'react';

import { Button, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { InfoCircle, Share } from 'react-bootstrap-icons';

import SocialBar from './SocialBar';

import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter();

    console.log(router.pathname);

    const popover = (
        <Popover id="popover-social">
            <Popover.Title as="h3">Social links</Popover.Title>
            <Popover.Content>
                <SocialBar />
            </Popover.Content>
        </Popover>
    );

    const popoverBadges = (
        <Popover id="popover-badges">
            <Popover.Content>
                <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/shahoob/website/main?label=deployment&logo=vercel&style=flat-square" />
            </Popover.Content>
        </Popover>
    )

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Text>&copy; Shehab Tweel 2021 | Hosted on <a href="http://vercel.com">Vercel</a></Navbar.Text>
            <Navbar.Collapse>
                <div className="ml-auto">
                    <OverlayTrigger overlay={popover} placement="top" trigger="click">
                        <Button>
                            <Share />
                        </Button>
                    </OverlayTrigger>
                </div>
                <div className="ml-1">
                    <OverlayTrigger overlay={popoverBadges} placement="top-start" trigger="click">
                        <Button variant="secondary"><InfoCircle /></Button>
                    </OverlayTrigger>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}