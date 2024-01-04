import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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

            <Route path="/blogs/:id"> {/*for the blog details page */}
              <BlogDetails></BlogDetails>
            </Route>

            <Route path="*"> {/*for the 404 PAGE and catches any route that does not exist */}
              <NotFound></NotFound>
            </Route>

          </Switch>        
        </div>
      </div>
    </Router>
  );
}

export default App;
