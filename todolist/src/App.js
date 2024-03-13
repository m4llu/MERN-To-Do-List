import './App.css';
import './components/nav'
import TopNav from './components/nav';
import TaskCreator from './components/TaskCreator';
import List from './components/TaskList';


function App() {
  return (
    <div className="App">
      <TopNav />
      <TaskCreator />
      <List />
    </div>
  );
}

export default App;
