import Header from "components/Header";
import Footer from "components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "components/Home";
import { routes } from "routes/routes";

function App() {

  const { user } = useSelector(state => state.auth)

  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={() => {
              if (route.auth && !user) {
                return <Redirect to="/" />
              } else {
                return <route.component />
              }
            }} />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
