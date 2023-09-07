import { gql } from '@apollo/client';

export const GetPortfolios = gql(/* GraphQL */ `
  query GetPortfolios($where: PortfolioWhereInput) {
    portfolios(where: $where) {
      id
      title
      category
      title
      tools
      skills
      cardImage {
        url
      }
      client
      kind
      link
      external
      modal
      buttonText
    }
    portfoliosConnection {
      pageInfo {
        pageSize
      }
    }
  }
`);
