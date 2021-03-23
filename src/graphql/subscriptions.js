/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCapstoneData = /* GraphQL */ `
  subscription OnCreateCapstoneData($Occupation: String, $SOC: String) {
    onCreateCapstoneData(Occupation: $Occupation, SOC: $SOC) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const onCreateCapstoneRisk = /* GraphQL */ `
  subscription OnCreateCapstoneRisk($Occupation: String, $Probability: Int) {
    onCreateCapstoneRisk(Occupation: $Occupation, Probability: $Probability) {
      Occupation
      Probability
    }
  }
`;
export const onCreateRisk = /* GraphQL */ `
  subscription OnCreateRisk {
    onCreateRisk {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const onDeleteCapstoneData = /* GraphQL */ `
  subscription OnDeleteCapstoneData($Occupation: String, $SOC: String) {
    onDeleteCapstoneData(Occupation: $Occupation, SOC: $SOC) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const onDeleteCapstoneRisk = /* GraphQL */ `
  subscription OnDeleteCapstoneRisk($Occupation: String, $Probability: Int) {
    onDeleteCapstoneRisk(Occupation: $Occupation, Probability: $Probability) {
      Occupation
      Probability
    }
  }
`;
export const onDeleteRisk = /* GraphQL */ `
  subscription OnDeleteRisk {
    onDeleteRisk {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const onUpdateCapstoneData = /* GraphQL */ `
  subscription OnUpdateCapstoneData($Occupation: String, $SOC: String) {
    onUpdateCapstoneData(Occupation: $Occupation, SOC: $SOC) {
      Occupation
      Probability
      SOC
    }
  }
`;
export const onUpdateCapstoneRisk = /* GraphQL */ `
  subscription OnUpdateCapstoneRisk($Occupation: String, $Probability: Int) {
    onUpdateCapstoneRisk(Occupation: $Occupation, Probability: $Probability) {
      Occupation
      Probability
    }
  }
`;
export const onUpdateRisk = /* GraphQL */ `
  subscription OnUpdateRisk {
    onUpdateRisk {
      Occupation
      Probability
      SOC
      createdAt
      id
      updatedAt
    }
  }
`;
export const onCreateCapstone = /* GraphQL */ `
  subscription OnCreateCapstone(
    $SOC: String
    $Occupation: String
    $Probability: Float
  ) {
    onCreateCapstone(
      SOC: $SOC
      Occupation: $Occupation
      Probability: $Probability
    ) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const onUpdateCapstone = /* GraphQL */ `
  subscription OnUpdateCapstone(
    $SOC: String
    $Occupation: String
    $Probability: Float
  ) {
    onUpdateCapstone(
      SOC: $SOC
      Occupation: $Occupation
      Probability: $Probability
    ) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const onDeleteCapstone = /* GraphQL */ `
  subscription OnDeleteCapstone(
    $SOC: String
    $Occupation: String
    $Probability: Float
  ) {
    onDeleteCapstone(
      SOC: $SOC
      Occupation: $Occupation
      Probability: $Probability
    ) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const onCreateJobRisk = /* GraphQL */ `
  subscription OnCreateJobRisk(
    $SOC: String
    $Occupation: String
    $Probability: Float
  ) {
    onCreateJobRisk(
      SOC: $SOC
      Occupation: $Occupation
      Probability: $Probability
    ) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const onUpdateJobRisk = /* GraphQL */ `
  subscription OnUpdateJobRisk(
    $SOC: String
    $Occupation: String
    $Probability: Float
  ) {
    onUpdateJobRisk(
      SOC: $SOC
      Occupation: $Occupation
      Probability: $Probability
    ) {
      SOC
      Occupation
      Probability
    }
  }
`;
export const onDeleteJobRisk = /* GraphQL */ `
  subscription OnDeleteJobRisk(
    $SOC: String
    $Occupation: String
    $Probability: Float
  ) {
    onDeleteJobRisk(
      SOC: $SOC
      Occupation: $Occupation
      Probability: $Probability
    ) {
      SOC
      Occupation
      Probability
    }
  }
`;
