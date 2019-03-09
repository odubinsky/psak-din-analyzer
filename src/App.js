import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Dropdown} from 'primereact/dropdown';
import {TabMenu} from 'primereact/tabmenu';
import judges from './judges'
import lawyers from './lawyers'
import Visualization from './VIsualization.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
        judge: {label: 'כלום', value: 'כלום'}, 
        lawyer: {label: 'כלום', value: 'כלום'},
        tab: {label: 'כלום'}
    };
    this.judges = judges;
    this.lawyers = lawyers;
    this.judgesArr = Object.entries(judges).sort((a,b) => a[1]['accepted_ratio: ']  > b[1]['accepted_ratio: '] ? 1 : -1).slice(-10).map(this.mapToTable);
    this.lawyersArr = Object.entries(lawyers).sort((a,b) => a[1]['accepted_ratio: ']  > b[1]['accepted_ratio: '] ? 1 : -1).slice(-10).map(this.mapToTable);
    this.tabs = [{label : 'כלום'},{label : 'עמודות'},{label : 'עיגול'},{label : 'פסקי דין'},{label : 'שופטים מומלצים'},{label : 'עו״ד מומלצים'}];
    this.judgesKeys = [];
    this.lawyersKeys = [];
    this.createDropdownLists();
    this.onJudgeChange = this.onJudgeChange.bind(this);
    this.onAuthChange = this.onAuthChange.bind(this);
  }

  createDropdownLists() {
    for (var j in this.judges) {
      if(this.judges[j]['accepted_ratio: '] > 0 ){
        this.judgesKeys.push({label: j, value: j});
      }
    };
    for (var a in this.lawyers) {
      if(this.lawyers[a]['accepted_ratio: '] > 0) {
        this.lawyersKeys.push({label: a, value: a});
      }
    };
  }

  onJudgeChange(e) {
    this.setState({judge: e.value});
  }

  onAuthChange(e) {
    this.setState({lawyer: e.value});
  }

  onTabChange(e) {
    this.setState({tab: e.value})
  }

  mapToTable(entry){
    return {
      name: entry[0],
      accepted_ratio: entry[1]['accepted_ratio: '] * 100,
      rejected_ratio: entry[1]['rejected_ratio: '] * 100
    }
  }


  render() {
    const visProps = {
      tab: this.state.tab.label,
      chosenJudge: this.state.judge,
      chosenLawyer: this.state.lawyer,
      judges: this.judges,
      judgesArr: this.judgesArr,
      lawyers: this.lawyers,
      lawyersArr: this.lawyersArr
    };
    return (
      <div className="App">
        <header className="App-header">
          ניתוח פסקי דין
        </header>
        <div className="avg-section">

        </div>
        <div className="pick-section">
          <Dropdown value={this.state.judge} options={this.judgesKeys} onChange={this.onJudgeChange}  style={{width:'300px', left: '-40px', direction: 'rtl'}} placeholder={"בחר שופט"} filter={true} showClear={true}/>
          <Dropdown value={this.state.lawyer} options={this.lawyersKeys} onChange={this.onAuthChange}  style={{width:'300px', left: '40px'}} placeholder={"בחר עו״ד"} filter={true} showClear={true}/>
        </div>

        <div className="visualization-section" style={{width: '1000px', left: 'calc(50% - 500px)'}}>
          <TabMenu model={this.tabs} activeItem={this.state.tab} onTabChange={(e) => this.setState({tab: e.value})} style={{width: '1000px', float: 'right !important'}}/>
          <Visualization {...visProps}/>
        </div>
      </div>
    );
  }
}

export default App;
