import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import RepoList, { IRepos } from '../../components/stuff/RepoList';

const REPOS = gql`
query Repos($first: Int!) {
  user(login: "shahoob") {
    repositories(isFork: false, privacy: PUBLIC, first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        name
        description
        languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
          nodes {
            name
          }
        }
        isArchived
      }
    }
  }
}
`

export const getStaticProps: GetStaticProps = async (context) => {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        cache: new InMemoryCache(),
        headers: {
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`
        }
    });

    const { data } = await client.query<IRepos>({
        query: REPOS,
        variables: {
            first: 10
        }
    });

    return {
        props: {
            data
        }
    }
}

export default function MyStuff({ data }) {
    return (
        <>
            <Head>
                <title>My stuff</title>
            </Head>
            <h1>My stuff</h1>

            <h2>Repos</h2>
            
            <RepoList data={data} />

            <h2>Gallery</h2>
            <i>coming soon</i>
        </>
    )
}
