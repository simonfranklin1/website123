import './App.css'
import { Navbar } from './components'
import { Reports, Start, WeOffer } from './containers'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Start />
      <WeOffer />
      <Reports />
    </div>
  )
}

export default App
