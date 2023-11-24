import './App.css';
import DynamicForm from './Component/DynamicForm';

function App() {
  
    
  return (
    <div className="App">
      <div className='header'>
        <span>Dynamic Form</span>
      </div>
      <div style={{display:"flex",justifyContent:"center" ,marginTop:"5%"}}>
        <DynamicForm/>
      </div>
      </div>
  );
}

export default App;
