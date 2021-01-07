
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"

//The app components
import Header from './components/header/header';
import Home from './components/home/home';
import ProductionStatusBoard from './components/productionstatusboard/productionstatusboard';
import QCStatusboard from './components/qcstatusboard/qcstatusboard';
import SalesStatusboard from './components/salesstatusboard/salesstatusboard';

function App() {


  let path = window.location.pathname;
  //if(path === "/index.js"){
  path = "/home"    //orig: login
  //}


  // {(path !== "/login") && <Header></Header>}
  return (
    <div className="App">
      <header className="App-header">      
          <Header />
          <div className="container-fluid">
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/productionstatusboard" component={ProductionStatusBoard} />
                <Route path="/qcstatusboard" component={QCStatusboard} />
                <Route path="/salesstatusboard" component={SalesStatusboard} />

                <Redirect from="*" to="/" />
              </Switch>
            </div>
          </div>
      

        {/* <AmplifySignOut /> */}
      </header>
    </div>
  );
}

//export default App;
export default withAuthenticator(App)
