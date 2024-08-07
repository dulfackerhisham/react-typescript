import './App.css'
import Greet from './components/Greet';
import { Person } from './components/Person';


function App() {
  const userName = {
    fname: 'di',
    lname: 'caprio',
  }

  return (
    <div className='App'>
      <Greet name="Hisham" messageCount={2024} isLoggedIn={true}/>
      <Person name={userName}/>
    </div>
  )
}

export default App;
