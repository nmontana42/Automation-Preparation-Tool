import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";
import { createCapstone } from "./graphql/mutations";
import { listCapstones } from "./graphql/queries";

Amplify.configure(awsmobile);

async function createNewTodo() {
    const item = {
      SOC: "13-1151",
      Occupation: `Training and Development Specialists`,
      Probability: .014
    };
  
    return await API.graphql(graphqlOperation(createCapstone, { input: item }));
}

async function getData() {
    API.graphql(graphqlOperation(listCapstones)).then((evt) => {
        evt.data.listCapstones.items.map((item, i) => {
            QueryResult.innerHTML += `<p>${item.Occupation} - ${item.Probability}</p>`;
        })
    })
}
  
  
const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");
const QueryResult = document.getElementById("QueryResult");
  
MutationButton.addEventListener("click", (evt) => {
    createNewTodo().then((evt) => {
      MutationResult.innerHTML += `<p>${evt.data.createCapstone.Occupation} - ${evt.data.createCapstone.Probability}</p>`;
    });
});
getData();