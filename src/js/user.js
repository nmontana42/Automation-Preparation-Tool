import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listJobRisks } from "../graphql/queries";
import '../scss/user.scss';
Amplify.configure(awsmobile);

//Analyze class queries based off form input
class Analyze{
    constructor(job){
        this.job = job;
    }
    risk(){
        const TableJobRiskFilterInput = {
            Occupation: {
                contains: this.job
            }
        };
        return API.graphql(graphqlOperation(listJobRisks, {filter: TableJobRiskFilterInput}));
        
    }
}
const queryResult = document.getElementById('Results');

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = () => {
        const job = document.querySelector('#job').value;
        var Probability = new Analyze(job);
        Probability.risk().then((evt => {
            evt.data.listJobRisks.items.map((item) => {
                queryResult.innerHTML += `<p>${item.Occupation} - ${item.Probability}</p>`;
            });
        }))
        return false;
    }
});




