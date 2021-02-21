import Head from 'next/head';
import Link from 'next/link';

import { Button, Jumbotron } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shehab Tweel</title>
      </Head>
      <Jumbotron>
        <h1>Shehab Tweel</h1>
        An 12 year old programmer, born from Libya.
        <br/>
        <Link href="/about">
          <Button>Learn more about me</Button>
        </Link>
      </Jumbotron>
      <Jumbotron>
        <h2>My stuff</h2>
      </Jumbotron>
    </>
  )
}
