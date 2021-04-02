import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";
import { createJobRisk } from "./graphql/mutations";
import { listJobRisks } from "./graphql/queries";
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
import './js/user.js';
import './scss/index.scss';
Amplify.configure(awsmobile);



