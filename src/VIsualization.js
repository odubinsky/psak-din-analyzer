import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Chart} from 'primereact/chart';


class Visualization extends Component {
  isEmpty(chosenJudge, chosenLawyer, tab) {
    if(chosenJudge && chosenJudge.label !== 'כלום' ) {
      return false;
    }
    if(chosenLawyer && chosenLawyer.label !== 'כלום' ) {
      return false;
    }
    if(tab === 'שופטים מומלצים' || tab === 'עו״ד מומלצים'){
      return false;
    }
    return true;
  }
  

  render() {
    const {judges, lawyers, chosenJudge, chosenLawyer, judgesArr, lawyersArr, tab} = this.props
    if(this.isEmpty(chosenJudge, chosenLawyer, tab)) {
      return null;
    }
    if(tab === 'עמודות') {
      const chosenJudgeRatios = judges[`${chosenJudge}`]
      const chosenLawyerRatios = lawyers[`${chosenLawyer}`]
      const chartObj = {
        labels: [],
        datasets: [{
          label: 'אחוזי הצלחה', 
          backgroundColor: '#42A5F5',
          data: []
        },{
          label: 'אחוזי דחייה',
          backgroundColor: '#9CCC65',
          data: []
        }]
      }
      if(chosenJudgeRatios) {
        chartObj.labels.push(`${chosenJudge}`)
        chartObj.datasets[0].data.push(chosenJudgeRatios['accepted_ratio: '] * 100);
        chartObj.datasets[1].data.push(chosenJudgeRatios['rejected_ratio: '] * 100);
      }
      if (chosenLawyerRatios) {
        chartObj.labels.push(`${chosenLawyer}`)
        chartObj.datasets[0].data.push(chosenLawyerRatios['accepted_ratio: '] * 100);
        chartObj.datasets[1].data.push(chosenLawyerRatios['rejected_ratio: '] * 100);
      }
      return <Chart type="bar" data={chartObj} style={{width: '600px', left: 'calc(50% - 300px)', top: '20px'}} />
    }
    if(tab === 'עיגול'){
      const chosenJudgeRatios = judges[`${chosenJudge}`]
      const chosenLawyerRatios = lawyers[`${chosenLawyer}`]
      let chartObjJudge, chartObjAuth;
      chartObjJudge = {
        labels: ['אחוזי קבלה','אחוזי דחייה','אחר'],
        datasets: [{
          backgroundColor: ['#42A5F5','#9CCC65','red'],
          data: []
        }]
      }
      chartObjAuth  = {
        labels: ['אחוזי קבלה','אחוזי דחייה','אחר'],
        datasets: [{
          backgroundColor: ['#42A5F5','#9CCC65','red'],
          data: []
        }]
      }
      if(chosenJudgeRatios) {
        let ratio = [chosenJudgeRatios['accepted_ratio: '] * 100, chosenJudgeRatios['rejected_ratio: '] * 100]
        chartObjJudge.datasets[0].data.push(ratio[0]);
        chartObjJudge.datasets[0].data.push(ratio[1]);
        chartObjJudge.datasets[0].data.push(100 - ratio[0] - ratio[1]);
      }
      if (chosenLawyerRatios) {
        let ratio = [chosenLawyerRatios['accepted_ratio: '] * 100, chosenLawyerRatios['rejected_ratio: '] * 100]
        chartObjAuth.datasets[0].data.push(ratio[0]);
        chartObjAuth.datasets[0].data.push(ratio[1]);
        chartObjAuth.datasets[0].data.push(100 - ratio[0] - ratio[1]);
      }
      return (
      <div style={{top: '40px', position: 'relative'}}>
        <Chart type="doughnut" data={chartObjJudge} style={{width: '50%', position: 'absolute'}} />
        <Chart type="doughnut" data={chartObjAuth} style={{width: '50%', left: '50%', position: 'absolute'}} />
      </div>)
    }
    if(tab ===  'עו״ד מומלצים') {
      return (<DataTable value={lawyersArr}>
        <Column field="rejected_ratio" header="אחוז דחייה" />
        <Column field="accepted_ratio" header="אחוז קבלה" />
        <Column field="name" header="שם" />
      </DataTable>)
    }
    if(tab ===  'שופטים מומלצים') {
      return (<DataTable value={judgesArr}>
        <Column field="rejected_ratio" header="אחוז דחייה" />
        <Column field="accepted_ratio" header="אחוז קבלה" />
        <Column field="name" header="שם" />
      </DataTable>)
    }
    return null;
  }
}
export default Visualization