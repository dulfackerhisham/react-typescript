import './App.css'
import Greet from './components/Greet';
import { Status } from './components/Status';
// import { Person } from './components/Person';
// import PersonList from './components/PersonList';


function App() {
  // const userName = {
  //   fname: 'di',
  //   lname: 'caprio',
  // };


  // const userList = [
  //   {
  //     fname: "hisham",
  //     lname: "dulfacker",
  //   },
  //   {
  //     fname: "hg",
  //     lname: "df",
  //   },
  //   {
  //     fname: "wq",
  //     lname: "ew",
  //   },
  //   {
  //     fname: "re",
  //     lname: "tr",
  //   },
  // ]

  return (
    <div className='App'>
      <Greet name="Hisham" messageCount={2024} isLoggedIn={true}/>
      <Status status="error"/>
      {/* <Person name={userName}/>
      <PersonList names={userList}/> */}
    </div>
  )

}

export default App;
