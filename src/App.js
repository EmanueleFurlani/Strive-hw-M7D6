import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './Components/MyNavbar'
import MyHome from './Components/MyHome'
import CompanyDetail from './Components/CompanyDetail'
import { Container } from  "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { configureStore, persistor } from './store'
import Favourites from './Components/Favourites';
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react";

// just for try but the provider and the persistgate better put them into the index.js
function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
      <Router>
      <Container>
        <MyNavbar />
          <Switch>
            <Route exact path="/" component={MyHome} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/:companyName" component={CompanyDetail} />
          </Switch>
      </Container>
      </Router>
     </PersistGate>
    </Provider>
  );
}

export default App;