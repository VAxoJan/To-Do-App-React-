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
         <input className='checkBox' type="checkbox"/>
         <div>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, iste.
          </h1>

          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, iste.
          </h1>
         </div>
         {/* <h1>hello</h1> aq unda chavpusho valueebi  */}
      </div>
    </div>
  )
}

export default App
