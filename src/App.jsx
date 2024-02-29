import './App.css';
import Header from './components/Header/Header';
import MainInputStyled from './components/Input/MainInputStyled';
import './responsive/responsive.css'

function App() {

  return (
    <div className='mainMob'>
      <img className='mountainMob'/>
      <div className='middle'>
         <Header/>
         <MainInputStyled/>
         <input className='checkBox' type="checkbox"></input>
         {/* <h1>hello</h1> aq unda chavpusho valueebi  */}
      </div>
    </div>
  )
}

export default App
