/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const riskByOccupation = /* GraphQL */ `
  query RiskByOccupation(
    $Occupation: String
    $filter: ModelRiskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    RiskByOccupation(
      Occupation: $Occupation
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Occupation
        Probability
        SOC
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCapstoneData = /* GraphQL */ `
  query GetCapstoneData($Occupation: String!, $SOC: String!) {
    getCapstoneData(Occupation: $Occupation, SOC: $SOC) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const getCapstoneRisk = /* GraphQL */ `
  query GetCapstoneRisk($Occupation: String!, $Probability: Int!) {
    getCapstoneRisk(Occupation: $Occupation, Probability: $Probability) {
      Occupation
      Probability
    }
  }
`;
export const getRisk = /* GraphQL */ `
  query GetRisk($id: ID!) {
    getRisk(id: $id) {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const listCapstoneData = /* GraphQL */ `
  query ListCapstoneData(
    $filter: TableCapstoneDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapstoneData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Occupation
        Probability
        SOC
      }
      nextToken
    }
  }
`;
export const listCapstoneRisks = /* GraphQL */ `
  query ListCapstoneRisks(
    $filter: TableCapstoneRiskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapstoneRisks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Occupation
        Probability
      }
      nextToken
    }
  }
`;
export const listRisks = /* GraphQL */ `
  query ListRisks(
    $filter: ModelRiskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRisks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Occupation
        Probability
        SOC
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCapstone = /* GraphQL */ `
  query GetCapstone($SOC: String!, $Occupation: String!) {
    getCapstone(SOC: $SOC, Occupation: $Occupation) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const listCapstones = /* GraphQL */ `
  query ListCapstones(
    $filter: TableCapstoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapstones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        SOC
        Occupation
        Probability
      }
      nextToken
    }
  }
`;
export const getJobRisk = /* GraphQL */ `
  query GetJobRisk($SOC: String!, $Occupation: String!) {
    getJobRisk(SOC: $SOC, Occupation: $Occupation) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const listJobRisks = /* GraphQL */ `
  query ListJobRisks(
    $filter: TableJobRiskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobRisks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        SOC
        Occupation
        Probability
      }
      nextToken
    }
  }
`;
