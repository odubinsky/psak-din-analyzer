import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Chart} from 'primereact/chart';


class Visualization extends Component {
  constructor(props){
    super(props)
    this.linkTemplate = this.linkTemplate.bind(this);
  }

  isEmpty(chosenJudge, tab) {
    if(chosenJudge && chosenJudge.label !== 'כלום' ) {
      return false;
    }
    return true;
  }

  linkTemplate (rowData, column) {
    const link = rowData.link;
    return <a  rel="noopener noreferrer" href={link} target='_blank'>קישור</a>
  }
  

  render() {
    const {judges, chosenJudge, judgesArr, tab} = this.props
    if(this.isEmpty(chosenJudge, tab)) {
      return null;
    }
    if(tab === 'עמודות') {
      const chosenJudgeRatios = judges[`${chosenJudge}`]
      // const chosenLawyerRatios = lawyers[`${chosenLawyer}`]
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
      return <Chart type="bar" data={chartObj} style={{width: '600px', left: 'calc(50% - 300px)', top: '20px'}} />
    }
    if(tab === 'עיגול'){
      const chosenJudgeRatios = judges[`${chosenJudge}`]
      let chartObjJudge;
      chartObjJudge = {
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
     
      return (
      <div style={{top: '40px', position: 'relative'}}>
        <Chart type="doughnut" data={chartObjJudge} style={{width: '50%', left: 'calc(50% - 250px)', marginBottom: '20px'}} />
      </div>)
    }
    if(tab ===  'שופטים מומלצים') {
      return (<DataTable value={judgesArr} header={'שופטים שמקבלים את התביעה'} style={{marginBottom: '30px'}}>
        <Column field="rejected_ratio" header="אחוז דחייה" sortable={true}/>
        <Column field="accepted_ratio" header="אחוז קבלה" sortable={true}/>
        <Column field="name" header="שם" />
      </DataTable>)
    } 
    if (tab === 'פסקי דין') {
      let linksArr = judges[`${chosenJudge}`].links;
      linksArr = linksArr.map(entry => {
        entry = entry[0].split('\t')
        return {
          link: entry[0],
          result: entry[1] ? 'נדחה' : 'התקבל'
        }
      });
      return (<DataTable value={linksArr} style={{marginBottom: '30px'}}>
        <Column field="link" header="קישור" body={this.linkTemplate}/>
        <Column field="result" header="תוצאה" />
      </DataTable>)

    }
    return null;
  }
}
export default Visualization