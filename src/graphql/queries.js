/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHighScore = /* GraphQL */ `
  query GetHighScore($id: ID!) {
    getHighScore(id: $id) {
      id
      name
      game
      score
      createdAt
      updatedAt
    }
  }
`;
export const listHighScores = /* GraphQL */ `
  query ListHighScores(
    $filter: ModelHighScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHighScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        game
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const highScoreByScore = /* GraphQL */ `
  query HighScoreByScore(
    $game: String
    $score: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHighScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    highScoreByScore(
      game: $game
      score: $score
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        game
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
