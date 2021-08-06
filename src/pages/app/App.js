import { Route, Switch } from 'react-router-dom';
import Category from '../Category/Category';
import Home from '../Home/Home';
import Mobileapps from '../Mobileapps/Mobileapps';
import './App.css';



function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/:category" component={Category} />
       <Route path="/:mobileapps"  component={Mobileapps} />
      
       
     </Switch>
    </div>
  );
}

export default App;
