import './App.css';
import TopNav from './components/nav';
import DayPicker from './components/DatePicker/index';
import TaskCreator from './components/TaskCreator';
import List from './components/TaskList';

function App() {
  return (
      <div className="App">
        <TopNav />
        <DayPicker />
        <TaskCreator />
        <List />
      </div>
  );
}

export default App;