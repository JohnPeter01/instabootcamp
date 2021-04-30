import { gql } from 'graphql-request';
import { CMSGraphQLClient } from '../../../infra/CMS/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
      query{
        pageSobre{
          pageTitle
          pageDescripition
        }
      }
      `;

  const client = CMSGraphQLClient();
  const response = await client.query({ query });

  return response.data.messages;
}
