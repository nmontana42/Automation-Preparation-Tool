import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listJobRisks } from "../graphql/queries";
import '../scss/user.scss';
Amplify.configure(awsmobile);


const queryResult = document.getElementById('Results');
const OneResult = document.getElementById('One_Result');
const multipleResults = document.getElementById('Multiple_Results');


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

//Single page
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = () => {
        const job = document.querySelector('#job').value;
        var Probability = new Analyze(job);
        Probability.risk().then((evt => {
            
            var result_count = evt.data.listJobRisks.items.length;

            if(result_count == 1){
                evt.data.listJobRisks.items.map((item) => {
                    document.getElementById("One_Job").style.display = "block";
                    document.getElementById("menu").style.display = "none";
                    OneResult.innerHTML += `<p>${item.Occupation} - ${(item.Probability * 100).toFixed(1)}%</p>`;
                    OneResult.innerHTML += `<p>${evt.data.listJobRisks.item.length}</p>`
    
                });
            }
            else if(result_count > 1){
                document.getElementById("Multiple_Jobs").style.display = "block";
                document.getElementById("menu").style.display = "none";
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
