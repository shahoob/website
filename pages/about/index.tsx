import React from 'react'

const data = {
    programming: {
        languages: [
            'Python',
            'JavaScript',
            'TypeScript (most common)',
            'CoffeeScript',
            'The Arduino Language'
        ],
        runtimes: [
            'Node.js',
            'Browser'
        ]
    }
}

export default function About() {
    return (
        <>
            <h1>About me</h1>
            My name is Shehab Tweel,
            I'm a programmer for mostly TypeScript and React stuff. (Including NextJS)
            <br />
            I was born in Libya, and I'm 12 years old.
            <br />
            I currently know:
            <ul>
                {data.programming.languages.map(l => (
                    <li>{l}</li>
                ))}
            </ul>
            And I currently know how to write code for these things (Runtimes):
            <ul>
                {data.programming.runtimes.map(l => (
                    <li>{l}</li>
                ))}
            </ul>
            And I always, I mean <b>always</b> open-source my code
            on my <a href="http://github.com/shahoob">GitHub</a>.
            <br/>
            Even this new website I made is also open-soruce!
        </>
    )
}
