import React from "react";
import './App.css';
import TableSeptember from './Components/Table/TableSeptember';
import TableOktober from './Components/Table/TableOktober';
import TableNovember from './Components/Table/TableNovember';
import TableDesember from './Components/Table/TableDesember';
import TableCoba from './Components/Table/TableCoba';
import TimeLineCovid from './Components/TimelineCovid';
import MainChart from './Components/MainChart';
import MapTraining from './Components/Map/MapTraining.js';
// import Peta from './Components/Map/PetaTraining';
import 
{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return(
   <Router>
     <Switch>
        <Route exact path='/Peta' component={MapTraining}/>
        <Route exact path='/Timeline' component={TimeLineCovid}/>
        <Route exact path='/GrafikCoba' component={MainChart}/>
        <Route exact path='/' component={TableSeptember}/>
        <Route exact path='/TableOktober' component={TableOktober}/>
        <Route exact path='/TableNovember' component={TableNovember}/>
        <Route exact path='/TableDesember' component={TableDesember}/>
        <Route exact path='/TableCoba' component={TableCoba}/>
        {/* <Route exact path='/Peta' component={MapTraining}/> */}


     </Switch>
   </Router>
  );
}

export default App;
