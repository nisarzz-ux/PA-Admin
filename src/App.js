import React from "react";
import './App.css';
import HalamanTabel from './Components/Table/TableSeptember.js';
import TimeLineCovid from './Components/TimelineCovid.js';
import MainChart from './Components/MainChart.js';
import TableOktober from './Components/Table/TableOktober.js';
import TableNovember from './Components/Table/TableNovember.js';
import TableDesember from './Components/Table/TableDesember.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return(
   <Router>
     <Switch>
        <Route exact path='/' component={HalamanTabel}/>
        <Route exact path='/Timeline' component={TimeLineCovid}/>
        <Route exact path='/GrafikCoba' component={MainChart}/>
        <Route exact path='/TableOktober' component={TableOktober}/>
        <Route exact path='/TableNovember' component={TableNovember}/>
        <Route exact path='/TableDesember' component={TableDesember}/>
     </Switch>
   </Router>
  );
}

export default App;
