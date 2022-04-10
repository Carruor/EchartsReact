
import './App.css';
import Article from './Components/Article';
import { ChartOne } from './Components/ChartOne';
import { ChartTwo } from './Components/ChartTwo';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
    
     <Header/>
     <Article/>
     <div className='chartContainer'>
     <ChartOne/>
     <ChartTwo/>
     </div>
     <Footer/>
     
    </div>
  );
}

export default App;
