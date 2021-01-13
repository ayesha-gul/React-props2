import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
    
    <h2>props in React:)</h2>
    <Student name={"sanam"} email={"fxolbird@gmail.com"} other={{addr:'multan',mobile:'000'}}/>
    <Student name={"Ali"} email={"angrybird@gmail.com"} other={{addr:'lahOre',mobile:'111'}}/>
    </div>
  );
}

export default App;
