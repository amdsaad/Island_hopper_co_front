import gql from 'graphql-tag'

export const allArticlesQuery = gql`
  query allArticlesQuery {
    articles {
      data {
        id
        attributes {
          title
          slug
          description
          body
          date
        }
      }
    }
  }
`

export const singleArticleQuery = gql`
  query singleArticlesQuery($id: ID!) {
    article(id: $id) {
      data {
        attributes {
          title
          slug
          description
          body
          date
        }
      }
    }
  }
`
