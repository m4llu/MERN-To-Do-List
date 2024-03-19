import './App.css';
import './components/nav'
import TopNav from './components/nav';
import DayPicker from './components/DatePicker/index';
import TaskCreator from './components/TaskCreator';
import List from './components/TaskList';
import Task from './components/TaskList/task';


function App() {
  return (
    <div className="App">
      <TopNav />
      <DayPicker />
      <TaskCreator />
      <List />
      <Task />
    </div>
  );
}

export default App;
