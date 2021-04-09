import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";
import { listJobRisks } from "./graphql/queries";

Amplify.configure(awsmobile);