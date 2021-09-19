import { Route, Switch } from 'react-router';

import ContentItem from '../ContentItem';
import Header from '../Header';

import data from '../mocks/data';

import './App.scss';

function App() {
  
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <Switch>
          <Route
            path="/"
            render={() => {
                return (
                  <ContentItem data={data}/>
                )
            }}
            exact
          />
        </Switch>
      </div>  
    </div>
  );
}

export default App;