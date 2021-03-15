import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { IRepoNode } from './RepoList';

interface RepoCardParams {
    node: IRepoNode
}

export default function RepoCard({ node: { name, description, isArchived, languages: { nodes: [language] } } }: RepoCardParams) {
    return (
        <Card body>
            <Card.Title>
                { name } <Badge variant="secondary">{language.name}</Badge> {isArchived ? (
                    <Badge variant="warning">archived</Badge>
                ) : null}
            </Card.Title>
            {description ? <p>{description}</p> : null}
            <Button href={`https://github.com/shahoob/${name}`}>Go to repo</Button>
        </Card>
    )
}
