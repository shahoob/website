import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { faGithub as github, faFacebookF as facebook, faYoutube as youtube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as mail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialBar() {
    return (
        <ButtonGroup>
            <Button variant="dark" href="github.com/shahoob">
                <FontAwesomeIcon icon={github} />
            </Button>
            <Button href="https://facebook.com/Shahoob">
                <FontAwesomeIcon icon={facebook} />
            </Button>
            <Button href="https://www.youtube.com/channel/UCTCmshjCIA2MSfdWX4Uazeg" variant="danger">
                <FontAwesomeIcon icon={youtube} />
            </Button>
            <Button href="mailto:me@shehabtweel.ly" variant="secondary">
                <FontAwesomeIcon icon={mail} />
            </Button>
        </ButtonGroup>
    )
}
