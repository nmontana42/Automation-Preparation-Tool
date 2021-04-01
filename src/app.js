import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";
import { createJobRisk } from "./graphql/mutations";
import { listJobRisks } from "./graphql/queries";
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
import './js/user.js';
import './scss/index.scss';
Amplify.configure(awsmobile);



async function createNewTodo() {
    const item = {
      SOC: "13-1151",
      Occupation: `Training and Development Specialists`,
      Probability: .014
    };
  
    return await API.graphql(graphqlOperation(createJobRisk, { input: item }));
}


async function test() {
    const input = document.querySelector('#user').value;

    const TableJobRiskFilterInput = {
        Occupation: {
            contains: input
        }
    };
    return await API.graphql(graphqlOperation(listJobRisks, {filter: TableJobRiskFilterInput}));
};


  
const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");

const TestButton = document.getElementById("TestButton");
const TestResult = document.getElementById("SubscriptionResult");


const UserResult = document.getElementById("UserResult");

  
MutationButton.addEventListener("click", (evt) => {
    createNewTodo().then((evt) => {
      MutationResult.innerHTML += `<p>${evt.data.createJobRisk.Occupation} - ${evt.data.createJobRisk.Probability}</p>`;
    });
});

TestButton.addEventListener("click", (evt) => {
    test().then((evt) => {
        evt.data.listJobRisks.items.map((item, i) => {
            TestResult.innerHTML += `<p>${item.Occupation} - ${item.Probability}</p>`;
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = (evt) => {
        test().then((evt) => {
            evt.data.listJobRisks.items.map((item => {
                UserResult.innerHTML += `<p>${item.Occupation} - ${item.Probability}</p>`;
            }))
        })
        return false;
    };
})

