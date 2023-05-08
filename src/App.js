import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import HeaderMenu from "./views/header-menu/HeaderMenu";
import Home from "./views/home/Home";
import SelectRequestType from "./views/new-request/SelectRequestType";
import NewRequest from "./views/new-request/NewRequest";
import SearchRequests from "./views/search-requests/SearchRequests";
import ViewRequests from "./views/view-requests/ViewRequests";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <HeaderMenu />

        <Switch>
          <Route path="/view-requests">
            <ViewRequests />
          </Route>
          <Route path="/search-requests">
            <SearchRequests />
          </Route>
          <Route path="/select-request-type">
            <SelectRequestType />
          </Route>
          <Route path="/new-request">
            <NewRequest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
