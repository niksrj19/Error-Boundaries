
import Student from "./Student";
import ErrorBoundaries from './ErrorBoundaries';
import Menu from './Menu';
import Rout from './Rout';
import {BrowserRouter as Router}  from 'react-router-dom';
function App() {
  return (
    <div className="App">
       
         <Student name={"Nikita Sharma"} />
         <Student name={"Chetan Sharma"} />
         <Student name={"Meenu Sharma"} />
         <Student name={"Teena Sharma"} />
         <ErrorBoundaries>
         <Student name={"SAchin"} />
         </ErrorBoundaries>
         <Router>
         <Menu/>
         <Rout/>
         </Router>
    </div>
  );
}

export default App;
