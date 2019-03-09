import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Dropdown} from 'primereact/dropdown';
import {Chart} from 'primereact/chart';
import {TabMenu} from 'primereact/tabmenu';
import judges from './judges'
import authornies from './authornies'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';



class App extends Component {

  
  constructor() {
    super();
    this.currentTab = this.currentTab.bind(this);
    this.state = {
        judge: {label: 'כלום', value: 'כלום'}, 
        authorny: {label: 'כלום', value: 'כלום'},
        tab: {label: 'כלום'}
    };
    this.judges = judges;
    this.authornies = authornies;
    this.judgesArr = Object.entries(judges).sort((a,b) => a[1]['accepted_ratio: ']  > b[1]['accepted_ratio: '] ? 1 : -1).slice(-10);
    this.judgesArr = this.judgesArr.map(this.mapToTable);
    this.authorniesArr = Object.entries(authornies).sort((a,b) => a[1]['accepted_ratio: ']  > b[1]['accepted_ratio: '] ? 1 : -1).slice(-10);
    this.authorniesArr = this.authorniesArr.map(this.mapToTable)
    this.tabs = [{label : 'כלום'},{label : 'עמודות'},{label : 'עיגול'},{label : 'פסקי דין'},{label : 'שופטים מומלצים'},{label : 'עו״ד מומלצים'}];
    this.judgesKeys = [];
    this.authorniesKeys = [];

    for (var j in this.judges) {
      if(this.judges[j]['accepted_ratio: '] > 0 ){
        this.judgesKeys.push({label: j, value: j});
      }
    };
    for (var a in this.authornies) {
      if(this.authornies[a]['accepted_ratio: '] > 0) {
        this.authorniesKeys.push({label: a, value: a});
      }
    };
    
    this.onJudgeChange = this.onJudgeChange.bind(this);
    this.onAuthChange = this.onAuthChange.bind(this);
  }

  onJudgeChange(e) {
    this.setState({judge: e.value});
  }

  onAuthChange(e) {
    this.setState({authorny: e.value});
  }

  onTabChange(e) {
    this.setState({tab: e.value})
  }

  mapToTable(entry){
    entry[1].name = entry[0];
    return entry[1];
  }

  currentTab() {
    if(this.state.tab.label === 'עמודות'){
      const chosenJudgeRatios = this.judges[`${this.state.judge}`]
      const chosenAuthornyRatios = this.authornies[`${this.state.authorny}`]
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
        chartObj.labels.push(`${this.state.judge}`)
        chartObj.datasets[0].data.push(chosenJudgeRatios['accepted_ratio: ']);
        chartObj.datasets[1].data.push(chosenJudgeRatios['rejected_ratio: ']);
      }
      if (chosenAuthornyRatios) {
        chartObj.labels.push(`${this.state.authorny}`)
        chartObj.datasets[0].data.push(chosenAuthornyRatios['accepted_ratio: ']);
        chartObj.datasets[1].data.push(chosenAuthornyRatios['rejected_ratio: ']);
      }
      return <Chart type="bar" data={chartObj} style={{width: '600px', left: 'calc(50% - 300px)', top: '20px'}} />
    }
    if(this.state.tab.label === 'עיגול'){
      const chosenJudgeRatios = this.judges[`${this.state.judge}`]
      const chosenAuthornyRatios = this.authornies[`${this.state.authorny}`]
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
        let ratio = [chosenJudgeRatios['accepted_ratio: '],chosenJudgeRatios['rejected_ratio: ']]
        chartObjJudge.datasets[0].data.push(ratio[0]);
        chartObjJudge.datasets[0].data.push(ratio[1]);
        chartObjJudge.datasets[0].data.push(1 - ratio[0] - ratio[1]);
      }
      if (chosenAuthornyRatios) {
        let ratio = [chosenAuthornyRatios['accepted_ratio: '],chosenAuthornyRatios['rejected_ratio: ']]
        chartObjAuth.datasets[0].data.push(ratio[0]);
        chartObjAuth.datasets[0].data.push(ratio[1]);
        chartObjAuth.datasets[0].data.push(1 - ratio[0] - ratio[1]);
      }
      return (
      <div style={{top: '40px', position: 'relative'}}>
        <Chart type="doughnut" data={chartObjJudge} style={{width: '50%', position: 'absolute'}} />
        <Chart type="doughnut" data={chartObjAuth} style={{width: '50%', left: '50%', position: 'absolute'}} />
      </div>)
    }
    if(this.state.tab.label ===  'עו״ד מומלצים') {
      return (<DataTable value={this.authorniesArr}>
        <Column field="rejected_ratio: " header="Rejected Ratio" />
        <Column field="accepted_ratio: " header="Accepted Ratio" />
        <Column field="name" header="שם" />
      </DataTable>)
    }
    if(this.state.tab.label ===  'שופטים מומלצים') {
      return (<DataTable value={this.judgesArr}>
        <Column field="rejected_ratio: " header="אחוז דחייה" />
        <Column field="accepted_ratio: " header="אחוז קבלה" />
        <Column field="name" header="שם" />
      </DataTable>)
    }
  }

  isPickEmpty() {
    if(this.state.judge && this.state.judge.label !== 'כלום' ) {
      return false;
    }
    if(this.state.authorny && this.state.authorny.label !== 'כלום' ) {
      return false;
    }
    if(this.state.tab.label === 'שופטים מומלצים' || this.state.tab.label === 'עו״ד מומלצים'){
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          ניתוח פסקי דין
        </header>
        <div className="pick-section">
          <Dropdown value={this.state.judge} options={this.judgesKeys} onChange={this.onJudgeChange}  style={{width:'300px', left: '-40px', direction: 'rtl'}} placeholder={"בחר שופט"} filter={true} showClear={true}/>
          <Dropdown value={this.state.authorny} options={this.authorniesKeys} onChange={this.onAuthChange}  style={{width:'300px', left: '40px'}} placeholder={"בחר עו״ד"} filter={true} showClear={true}/>
        </div>

        <div className="visualization-section" style={{width: '1000px', left: 'calc(50% - 500px)'}}>
          <TabMenu model={this.tabs} activeItem={this.state.tab} onTabChange={(e) => this.setState({tab: e.value})} style={{width: '1000px', float: 'right !important'}}/>
          {this.isPickEmpty() ? '' : this.currentTab()}
        </div>
      </div>
    );
  }
}

export default App;
