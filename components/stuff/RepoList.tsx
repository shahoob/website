import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Alert, CardColumns, Spinner } from 'react-bootstrap';
import RepoCard from './RepoCard';

export interface IRepoNode {
    name: string;
    description: string;
    languages?: {
        nodes: [
            {
                name: string;
            }
        ];
    };
    isArchived: boolean;
}

interface IRepos {
    user: {
        repositories: {
            nodes: IRepoNode[];
        };
    };
};

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

export default function RepoList({ length }: { length: number }) {
    const { loading, error, data } = useQuery<IRepos>(REPOS, {
        variables: { first: length }
    });

    if (loading) return <Spinner animation="border" />
    if (error) return <Alert variant="danger">{error.message}</Alert>

    return (
        <CardColumns>
            {data.user.repositories.nodes.map(n => <RepoCard node={n} />)}
        </CardColumns>
    )
}
