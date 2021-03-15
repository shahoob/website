import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Image } from '../components/stuff/Gallery';

const query = gql`
query AllMediaItems {
  mediaItems {
    nodes {
      altText
      date
      link: sourceUrl
      databaseId
      mediaDetails {
        width
        height
      }
    }
  }
}
`

export default async function getAllMediaItems(excludeIds?: number[]): Promise<Image[]> {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://cms.shehabtweel.ly/api' // TODO: Move to env later
  });

  const result = await client.query({
    query
  });

  const final = (result.data.mediaItems.nodes as Array<any>).filter(
    item => excludeIds.findIndex(id => id === item.databaseId) === -1
  ).map(item => {
    return {
      url: item.link,
      description: item.description ?? null,
      size: {
        width: item.mediaDetails.width,
        height: item.mediaDetails.height
      },
      date: item.date
    }
  });

  return final;
}