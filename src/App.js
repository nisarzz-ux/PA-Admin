import React from "react";
import './App.css';


// Infografis dan Chart
import TimeLineCovid from './Components/TimelineCovid';
import MainChart from './Components/MainChart';

// Tampilan Website 
import TableDemografi from './Components/Table/Tabel/TableDemografi';
import Side from './Components/Form/SideNavbar.js'
import SideOktober from './Components/Form/SideOktober';
import SideNovember from './Components/Form/SideNovember';
import SideDesember from './Components/Form/SideDesember';
import SideJanuari from './Components/Form/SideJanuari';
import SideFaskes from './Components/Form/SideFaskes';


// Tampilan Menu Peta
import MenuPeta from './Components/Map/SideMapMenu.js';

// Edit Data 
import EditTable from './Components/Table/Edit/EditDemografi.js';
import Editseptember from './Components/Table/Edit/EditSeptember';
import Editoktober from './Components/Table/Edit/EditOktober';
import Editnovember from './Components/Table/Edit/EditNovember';
import Editdesember from './Components/Table/Edit/EditDesember';
import Editjanuari from './Components/Table/Edit/EditJanuari';
import Editfaskes from './Components/Table/Edit/EditFaskes';


// Tampilan Peta 
import Utara from './Components/Map/MapSurabayaUtara.js';
import Selatan from './Components/Map/MapSurabayaSelatan.js';
import Barat from './Components/Map/MapSurabayaBarat.js';
import Timur from './Components/Map/MapSurabayaTimur.js';
import Pusat from './Components/Map/MapSurabayaPusat.js';

// Isi Data
import FormDemografi from './Components/Form/FormDemografi.js';
import FormSeptember from './Components/Form/FormCovid/FormSeptember.js';
import FormOktober from './Components/Form/FormCovid/FormOktober.js';
import FormNovember from './Components/Form/FormCovid/FormNovember.js'
import FormDesember from './Components/Form/FormCovid/FormDesember.js'
import FormJanuari from './Components/Form/FormCovid/FormJanuari.js'
import FormFaskes from './Components/Form/FormCovid/FormFaskes.js'



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
       {/* Menu Utama  */}
        <Route exact path='/' component={MenuPeta}/>
       
       {/* Timeline dan GrafikCoba */}
        <Route exact path='/Timeline' component={TimeLineCovid}/>
        <Route exact path='/GrafikCoba' component={MainChart}/>
        
        {/* List Tampilan  MenuTabel */}
        <Route exact path='/TableSeptember' component={Side}/>
        <Route exact path='/TableOktober' component={SideOktober}/>
        <Route exact path='/TableNovember' component={SideNovember}/>
        <Route exact path='/TableDesember' component={SideDesember}/>
        <Route exact path='/TableJanuari' component={SideJanuari}/>
        <Route exact path='/TableDemografi' component={TableDemografi}/>
        <Route exact path='/TableFaskes' component={SideFaskes}/>


        {/*Input Form  */}
        <Route exact path='/FormDemografi' component={FormDemografi}/>
        <Route exact path='/FormSeptember' component ={FormSeptember}/>
        <Route exact path='/FormOktober' component ={FormOktober}/>
        <Route exact path='/FormNovember' component ={FormNovember}/>
        <Route exact path='/FormDesember' component ={FormDesember}/>
        <Route exact path='/FormJanuari' component ={FormJanuari}/>
        <Route exact path='/FormFaskes' component ={FormFaskes}/>



        {/* Menu Peta */}
        <Route exact path='/Utara' component={Utara}/>
        <Route exact path='/Selatan' component={Selatan}/>
        <Route exact path='/Barat' component={Barat}/>
        <Route exact path='/Timur' component={Timur}/>
        <Route exact path='/Pusat' component={Pusat}/>

        {/* Edit Data */}
        <Route exact path='/EditDemografi/:id' component={EditTable} />
        <Route exact path='/EditSeptember/:id' component={Editseptember} />
        <Route exact path='/EditOktober/:id' component={Editoktober} />
        <Route exact path='/EditNovember/:id' component={Editnovember} />
        <Route exact path='/EditDesember/:id' component={Editdesember} />
        <Route exact path='/EditJanuari/:id' component={Editjanuari} />
        <Route exact path='/EditFaskes/:id' component={Editfaskes} />



        {/* <Route exact path='/Side' component={Sidebar}/> */}

     </Switch>
   </Router>
  );
}

export default App;
