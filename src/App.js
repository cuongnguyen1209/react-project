import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/Header';
import {Booking} from './components/Booking';
import {Flight} from './components/Flight';

function App() {
  return (
    <Router>
      <div className="body-container">
        <Route>
          <Header />
        </Route>
        <Route>
          <Booking />
        </Route>
        <Route>
          <Flight />
        </Route>
      </div>
      
    </Router>
  );
}

export default App;
