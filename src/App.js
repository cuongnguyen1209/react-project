import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Popup} from './components/Popup';
import { useSelector } from 'react-redux';
import {FlightSearchResult} from './components/FlightSearchResult';
import {Home} from './components/Home';
import {FlightSummary} from './components/FlightSummary';

function App() {
  const isOpenPopup = useSelector((state)=>state.open.openValue)

  return (
    <Router>
      <div className="body-container">

        <Header />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path ="/flight-search">
            <FlightSearchResult />
          </Route>

          <Route exact path ="/flight-summary">
            <FlightSummary />
          </Route>

          <Route path='*'>
            <Home />
          </Route>

        </Switch>
        
        <Footer />

        <Route>
          {isOpenPopup === true && <Popup/>}
        </Route>
       
      </div>
      
    </Router>
  );
}

export default App;
