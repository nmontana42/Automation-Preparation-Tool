import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listJobRisks } from "../graphql/queries";

Amplify.configure(awsmobile);

var industry_data = {
    "medicine" : ["health", "doctor", "phsyician"], 
    "education" : ["teacher"],
    "IT": ["computer", "software"],
}

const Results = document.getElementById("Multiple_Results");
class Industry {
    constructor(selection){
        this.selection = selection;
    }
    query(){
        if(this.selection == 'medicine'){
            var TableJobRiskFilterInput = {
                Occupation: {
                    contains: 'Health'
                }
            };
            return API.graphql(graphqlOperation(listJobRisks, {filter: TableJobRiskFilterInput}));
        }
        if(this.selection == 'education'){
            var TableJobRiskFilterInput = {
                Occupation: {
                    contains: 'Teacher'
                }
            }
            return API.graphql(graphqlOperation(listJobRisks, {filter: TableJobRiskFilterInput}));
        }
        
    }
    query2(){
        for(var industry in industry_data.selection){
            
        }
    }

}



document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('#Ind-Button').forEach(button =>{
        button.onclick = function() {
            document.getElementById("menu").style.display = "none";
            document.getElementById("Multiple_Jobs").style.display = "block";
            const Industry_Results = new Industry('#Ind-Button');
            Industry_Results.query().then((evt => {
                evt.data.listJobRisks.items.map((item) => {
                    Results.innerHTML += `<p>${item.Occupation} - ${(item.Probability * 100).toFixed(1)}%</p>`;
                })
            }))


        }
    })
})

