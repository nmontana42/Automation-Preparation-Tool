/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCapstoneData = /* GraphQL */ `
  mutation CreateCapstoneData($input: CreateCapstoneDataInput!) {
    createCapstoneData(input: $input) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const createCapstoneRisk = /* GraphQL */ `
  mutation CreateCapstoneRisk($input: CreateCapstoneRiskInput!) {
    createCapstoneRisk(input: $input) {
      Occupation
      Probability
    }
  }
`;
export const createRisk = /* GraphQL */ `
  mutation CreateRisk(
    $condition: ModelRiskConditionInput
    $input: CreateRiskInput!
  ) {
    createRisk(condition: $condition, input: $input) {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteCapstoneData = /* GraphQL */ `
  mutation DeleteCapstoneData($input: DeleteCapstoneDataInput!) {
    deleteCapstoneData(input: $input) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const deleteCapstoneRisk = /* GraphQL */ `
  mutation DeleteCapstoneRisk($input: DeleteCapstoneRiskInput!) {
    deleteCapstoneRisk(input: $input) {
      Occupation
      Probability
    }
  }
`;
export const deleteRisk = /* GraphQL */ `
  mutation DeleteRisk(
    $condition: ModelRiskConditionInput
    $input: DeleteRiskInput!
  ) {
    deleteRisk(condition: $condition, input: $input) {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateCapstoneData = /* GraphQL */ `
  mutation UpdateCapstoneData($input: UpdateCapstoneDataInput!) {
    updateCapstoneData(input: $input) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const updateCapstoneRisk = /* GraphQL */ `
  mutation UpdateCapstoneRisk($input: UpdateCapstoneRiskInput!) {
    updateCapstoneRisk(input: $input) {
      Occupation
      Probability
    }
  }
`;
export const updateRisk = /* GraphQL */ `
  mutation UpdateRisk(
    $condition: ModelRiskConditionInput
    $input: UpdateRiskInput!
  ) {
    updateRisk(condition: $condition, input: $input) {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const createCapstone = /* GraphQL */ `
  mutation CreateCapstone($input: CreateCapstoneInput!) {
    createCapstone(input: $input) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const updateCapstone = /* GraphQL */ `
  mutation UpdateCapstone($input: UpdateCapstoneInput!) {
    updateCapstone(input: $input) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const deleteCapstone = /* GraphQL */ `
  mutation DeleteCapstone($input: DeleteCapstoneInput!) {
    deleteCapstone(input: $input) {
      SOC
      Occupation
      Probability
    }
  }
`;
