import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Dropdown} from 'primereact/dropdown';
import {TabMenu} from 'primereact/tabmenu';
import Visualization from './VIsualization.js'
// import txt from './judges.txt'
import $ from 'jquery'
// const text = require('fs').readFileSync(__dirname + '/judges.txt', 'utf8')

class App extends Component {
  constructor() {
    super();
    this.state = {
        judge: {label: 'כלום', value: 'כלום'}, 
        lawyer: {label: 'כלום', value: 'כלום'},
        tab: {label: 'כלום'},
        dataLoaded: false,
        globalRatios: {}
    };
    this.parseText = this.parseText.bind(this);
    this.parseGlobal = this.parseGlobal.bind(this);
    this.returnAvg = this.returnAvg.bind(this);
    this.createDropdownLists = this.createDropdownLists.bind(this);
    const judgesPath = window.document.documentURI + '/judges.txt'
    const globalPath = window.document.documentURI + '/global.txt'
    $.get( judgesPath, this.parseText )
    $.get( globalPath, this.parseGlobal )
    
    this.judges = {}
    this.tabs = [{label : 'עמודות'},{label : 'עיגול'},{label : 'פסקי דין'},{label : 'שופטים מומלצים'}];
    this.judgesKeys = [];
    this.lawyersKeys = [];
    this.onJudgeChange = this.onJudgeChange.bind(this);
    this.onAuthChange = this.onAuthChange.bind(this);

  }

  createDropdownLists() {
    for (var j in this.judges) {
      if(!(j.match(/^.\s+/g)) && this.judges[j]['accepted_ratio: '] > 0 ){
        this.judgesKeys.push({label: j, value: j});
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

  parseGlobal(data) {
    let globalRatios = data.split('\n')
    globalRatios = {
      accpeted: globalRatios[0].split(' ')[1],
      rejected: globalRatios[1].split(' ')[1],
    }
    this.setState({globalRatios})
  }

  parseText(data) {
    let text = data.split('\n');

    let lastJudge = ''
    let isAcceptedRatio = true;
    let lastAccepted;
    let line;
    for(let x = 0; x < text.length ; x++) {
      line = text[x];
      if(line.match(/(https?:\/\/[^\s]+)/g)) {
        const link = line.split(' ');
        this.judges[lastJudge].links.push(link);
      } else if(line.match(/^[01]/)) {
        if(!isAcceptedRatio) {
          this.judges[lastJudge] = {
            'accepted_ratio: ': lastAccepted,
            'rejected_ratio: ': line,
            'links': []
          }
        } else{
          lastAccepted = line;
        }
        isAcceptedRatio = !isAcceptedRatio;
      } else {
        lastJudge = line;
      }      
    };
    this.judgesArr = Object.entries(this.judges).filter(a => a[1]['links'].length > 10).sort((a,b) => Number(a[1]['accepted_ratio: '])  > Number(b[1]['accepted_ratio: ']) ? 1 : -1).slice(-10).map(this.mapToTable);
    this.createDropdownLists()
    this.setState({dataLoaded: true})
  }

  returnAvg() {
    const total = Number(this.state.globalRatios.accpeted) + Number(this.state.globalRatios.rejected)
    const accepted_ratio = Number(this.state.globalRatios.accpeted)/total;
    const rejected_ratio = Number(this.state.globalRatios.rejected)/total;
    return (<div>
      <div style={{direction: 'rtl'}}>{'ממוצע קבלה ודחייה אצל שופטים:'}</div>
      <div>{`אחוז קבלה: ${accepted_ratio * 100}`}</div>
      <div>{`אחוז דחייה: ${rejected_ratio * 100}`}</div>
    </div>)
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

        <div className="pick-section">
          <Dropdown value={this.state.judge} options={this.judgesKeys} onChange={this.onJudgeChange}  style={{width:'300px', direction: 'rtl'}} placeholder={"בחר שופט"} filter={true} showClear={true}/>
        </div>

        <div className="avg-section">
          {this.state.globalRatios ? this.returnAvg() : ''}
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
