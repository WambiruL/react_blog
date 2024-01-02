import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch> {/*All routes go here */}
            <Route exact path="/"> {/*for the home page. Also, use the exact keyword to route directly to the path and not what matches the path*/}
              <Home></Home>
            </Route>

            <Route path="/create"> {/*for the create page */}
              <Create></Create>
            </Route>
          </Switch>        
        </div>
      </div>
    </Router>
  );
}

export default App;
