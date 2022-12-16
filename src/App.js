import './App.css';
import { TaskList } from './TaskList';
import image from './time.png';

function App() {
  return (
    <div className='app'>
     <h1>To Do List</h1>
     <img src={image} alt="time" width="250px"/>
     <TaskList/>
     <p className='link'><a  className='link' href="https://ru.freepik.com/free-vector/student-with-laptop-studying-on-online-course_7732666.htm#&position=9&from_view=author">Изображение от pch.vector</a> на Freepik</p>
    </div>
  );
}

export default App;
