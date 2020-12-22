/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createHighScore = /* GraphQL */ `
  mutation CreateHighScore(
    $input: CreateHighScoreInput!
    $condition: ModelHighScoreConditionInput
  ) {
    createHighScore(input: $input, condition: $condition) {
      id
      name
      game
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateHighScore = /* GraphQL */ `
  mutation UpdateHighScore(
    $input: UpdateHighScoreInput!
    $condition: ModelHighScoreConditionInput
  ) {
    updateHighScore(input: $input, condition: $condition) {
      id
      name
      game
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteHighScore = /* GraphQL */ `
  mutation DeleteHighScore(
    $input: DeleteHighScoreInput!
    $condition: ModelHighScoreConditionInput
  ) {
    deleteHighScore(input: $input, condition: $condition) {
      id
      name
      game
      score
      createdAt
      updatedAt
    }
  }
`;
