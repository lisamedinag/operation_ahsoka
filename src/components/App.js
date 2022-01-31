import { Route, Switch } from "react-router-dom";
import './App.css';
import {Dashboard, Game, Navbar, Pieces, Rules} from "./exportedComponents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/pieces" component={Pieces} />
            <Route exact path="/game" component={Game} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
