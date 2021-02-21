import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import React from 'react'
import RepoList from '../../components/stuff/RepoList'

export default function MyStuff() {
    return (
        <>
            <Head>
                <title>My stuff</title>
            </Head>
            <h1>My stuff</h1>

            <h2>Repos</h2>
            <ApolloProvider client={new ApolloClient({
                uri: 'https://api.github.com/graphql',
                cache: new InMemoryCache(),
                headers: {
                    Authorization: 'bearer c6acc874b908118417cae56d5bc2b7416fd42456'
                }
            })}>
                <RepoList length={10} />
            </ApolloProvider>

            <h2>Gallery</h2>
            <i>coming soon</i>
        </>
    )
}
