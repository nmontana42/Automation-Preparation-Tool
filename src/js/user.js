import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listJobRisks } from "../graphql/queries";
import '../scss/user.scss';
Amplify.configure(awsmobile);

async function query(){
    const TableJobRiskFilterInput = {
        Occupation: {
            contains: "Engineer"
        }
    };
    return await API.graphql(graphqlOperation(listJobRisks, {filter: TableJobRiskFilterInput}));
}


const input = document.getElementById("testquery")
const queryResult = document.getElementById("QueryResults")

document.addEventListener('DOMContentloaded', function() {
    input.addEventListener("click", query().then((evt) => {
        evt.data.listJobRisks.items.map((item) => {
            queryResult.innerHTML += `<p>${item.Occupation} - ${item.Probability}</p>`;
        });
    }));
})

