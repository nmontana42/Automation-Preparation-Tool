import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listJobRisks } from "../graphql/queries";
import '../scss/user.scss';
Amplify.configure(awsmobile);


const queryResult = document.getElementById('Results');
const OneResult = document.getElementById('One_Result');
const multipleResults = document.getElementById('Multiple_Results');
const CountDiv = document.getElementById('Count');
const Suggestions = document.getElementById('suggestions');

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

//Takes the probabilities from the user's selected job and respods with suggestions
class Resources{
    constructor(percentage){
        this.percentage = ((percentage * 100).toFixed(1) >= 50) ? 'high' : 'low';
    };
    respond(){
        if (this.percentage == 'high'){
            Suggestions.innerHTML += `<p>The automation probability of this job is over 50% </p>`;
        }
        else{
            Suggestions.innerHTML += `<p>The automation probability of this job is below 50% </p>`;
        }
    }
}

//Single page
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = () => {
        const jobstring = document.querySelector('#job').value;
        const job = jobstring.charAt(0).toUpperCase() + jobstring.slice(1);
        var Probability = new Analyze(job);
        Probability.risk().then((evt => {
            var result_count = evt.data.listJobRisks.items.length;
            if(result_count == 1){ //User input results in only one occupation
                evt.data.listJobRisks.items.map((item) => {
                    document.getElementById("menu").style.display = "none";
                    document.getElementById("One_Job").style.display = "block"; //show single job display
                    OneResult.innerHTML += `<p>${item.Occupation} - ${(item.Probability * 100).toFixed(1)}%</p>`;
                    var Response = new Resources(item.Probability);
                    Response.respond();

    
                });
            }
            else if(result_count > 1){ //User input results in more than one occupation
                document.getElementById("menu").style.display = "none";
                document.getElementById("Multiple_Jobs").style.display = "block"; //show multiple job display
                CountDiv.innerHTML += `<p>Number of Results: ${result_count}</p>`;
                evt.data.listJobRisks.items.map((item) => {
                    multipleResults.innerHTML += `<p>${item.Occupation} - ${(item.Probability * 100).toFixed(1)}%</p>`;
                });
            }
            else {
                queryResult.innerHTML += `<p>${item.Occupation} - ${(item.Probability * 100).toFixed(1)}%</p>`;
            }
        }))
        return false;
    }
});
