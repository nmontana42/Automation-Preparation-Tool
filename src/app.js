import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";
import { createJobRisk } from "./graphql/mutations";
import { listJobRisks } from "./graphql/queries";
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
import './js/user.js';
import './js/industry.js';
import './scss/index.scss';
Amplify.configure(awsmobile);


//Industry user selection
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#Ind-Button').forEach(button => {
        button.onclick = function() {
            
        }
    })
})