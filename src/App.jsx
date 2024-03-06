import { Navbar } from './components'
import { Reports, Start, WeOffer, WhatsAppConnections } from './containers'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Start />
      <WeOffer />
      <Reports />
      <WhatsAppConnections />
    </div>
  )
}

export default App
