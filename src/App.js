
import Student from "./Student";
import ErrorBoundaries from './ErrorBoundaries';
function App() {
  return (
    <div className="App">
       
         <Student name={"Nikita Sharma"} />
         <Student name={"Chetan Sharma"} />
         <Student name={"Meenu Sharma"} />
         <Student name={"Teena Sharma"} />
         <ErrorBoundaries>
         <Student name={"nitesh"} />
         </ErrorBoundaries>
    </div>
  );
}

export default App;
