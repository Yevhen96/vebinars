import './app.scss';
import ContentItem from '../content-item';
import AppHeader from '../app-header/app-header';

const data = [
  {
    id: 1,
    title: `02.03.21 Новий функціонал модулю навчання у FZ client`,
    time: "Тривалість: 01:08:15",
    date: "09.03.21"
  },
  {
    id: 2,
    title: `02.03.21 Новий функціонал модулю навчання у FZ client`,
    time: "Тривалість: 01:08:15",
    date: "09.03.21"
  },
  {
    id: 3,
    title: `02.03.21 Новий функціонал модулю навчання у FZ client`,
    time: "Тривалість: 01:08:15",
    date: "09.03.21"
  },
  {
    id: 4,
    title: `02.03.21 Новий функціонал модулю навчання у FZ client`,
    time: "Тривалість: 01:08:15",
    date: "09.03.21"
  }
] 

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
