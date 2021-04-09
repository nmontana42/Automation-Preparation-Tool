import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import { listJobRisks } from "../graphql/queries";

Amplify.configure(awsmobile);

const education = document.getElementById('education');
const medicine = document.getElementById('medicine');


class Industry {
    constructor(selection){
        this.selection = selection;
    }
    query(){
        if(this.selection == 'medicine'){
            const TableJobRiskFilterInput = {
                Occupation: {
                    contains: 'Medical'
                }
            };
        }
        else if(this.selection == 'education'){
            const TableJobRiskFilterInput = {
                Occupation: {
                    contains: 'Teacher'
                }
            };
        }

        return API.graphql(graphqlOperation(listJobRisks, {filter: TableJobRiskFilterInput}));
    }

}