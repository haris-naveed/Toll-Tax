import './App.css';
import EntryToll from './components/EntryScreen/EntryToll';
import ExitToll from './components/ExitScreen/ExitToll';
import Header from './components/Header/Header';
import {Stack} from '@mui/material'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <EntryToll />
          </Route>
          
          <Route exact path="/ExitToll">
            <ExitToll />
          </Route>
          
        </Switch>
        {/* <Stack spacing={2} direction='row' justifyContent="space-between" >
        <EntryToll/>
        <ExitToll/>
      </Stack> */}
    </div>
  );
}

export default App;
