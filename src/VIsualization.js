// import React, { Component } from 'react';


// class Visualization extends Component {
//   constructor(props) {
//     super(props);

    

    
//   }

//   render(){
//     if(this.state.tab.label === 'עמודות'){
//     const chosenJudgeRatios = this.judges[`${this.state.judge}`]
//     const chosenAuthornyRatios = this.authornies[`${this.state.authorny}`]
//     const chartObj = {
//       labels: [],
//       datasets: [{
//         label: 'אחוזי הצלחה', 
//         backgroundColor: '#42A5F5',
//         data: []
//       },{
//         label: 'אחוזי דחייה',
//         backgroundColor: '#9CCC65',
//         data: []
//       }]
//     }
//     if(chosenJudgeRatios) {
//       chartObj.labels.push(`${this.state.judge}`)
//       chartObj.datasets[0].data.push(chosenJudgeRatios['accepted_ratio: ']);
//       chartObj.datasets[1].data.push(chosenJudgeRatios['rejected_ratio: ']);
//     }
//     if (chosenAuthornyRatios) {
//       chartObj.labels.push(`${this.state.authorny}`)
//       chartObj.datasets[0].data.push(chosenAuthornyRatios['accepted_ratio: ']);
//       chartObj.datasets[1].data.push(chosenAuthornyRatios['rejected_ratio: ']);
//     }
//     return <Chart type="bar" data={chartObj} style={{width: '600px', left: 'calc(50% - 300px)', top: '20px'}} />
//   }
//   if(this.state.tab.label === 'עיגול'){
//     const chosenJudgeRatios = this.judges[`${this.state.judge}`]
//     const chosenAuthornyRatios = this.authornies[`${this.state.authorny}`]
//     let chartObjJudge, chartObjAuth;
//     chartObjJudge = {
//       labels: ['אחוזי הצלחה','אחוזי דחייה','אחר'],
//       datasets: [{
//         backgroundColor: ['#42A5F5','#9CCC65','red'],
//         data: []
//       }]
//     }
//     chartObjAuth  = {
//       labels: ['אחוזי הצלחה','אחוזי דחייה','אחר'],
//       datasets: [{
//         backgroundColor: ['#42A5F5','#9CCC65','red'],
//         data: []
//       }]
//     }
//     if(chosenJudgeRatios) {
//       let ratio = [chosenJudgeRatios['accepted_ratio: '],chosenJudgeRatios['rejected_ratio: ']]
//       chartObjJudge.datasets[0].data.push(ratio[0]);
//       chartObjJudge.datasets[0].data.push(ratio[1]);
//       chartObjJudge.datasets[0].data.push(1 - ratio[0] - ratio[1]);
//     }
//     if (chosenAuthornyRatios) {
//       let ratio = [chosenAuthornyRatios['accepted_ratio: '],chosenAuthornyRatios['rejected_ratio: ']]
//       chartObjAuth.datasets[0].data.push(ratio[0]);
//       chartObjAuth.datasets[0].data.push(ratio[1]);
//       chartObjAuth.datasets[0].data.push(1 - ratio[0] - ratio[1]);
//     }
//     return (
//     <div style={{top: '40px', position: 'relative'}}>
//       <Chart type="doughnut" data={chartObjJudge} style={{width: '50%', position: 'absolute'}} />
//       <Chart type="doughnut" data={chartObjAuth} style={{width: '50%', left: '50%', position: 'absolute'}} />
//     </div>)
//   }
//     return <div></div>
//   }

// }

// export default Visualization