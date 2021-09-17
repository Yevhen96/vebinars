import './app.scss';
import ContentItem from '../content-item';
import AppHeader from '../app-header';
import data from '../mocks/data';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <div className="container">
        <ContentItem data={data}/>
      </div>  
    </div>
  );
}

export default App;