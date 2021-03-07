import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div>
         {/* calling user define header and main component */}
         <Header></Header>
         <Main></Main>
    </div>
  );
}

export default App;
