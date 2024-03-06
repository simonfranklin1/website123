import { Navbar } from './components'
import { Automations, Reports, Start, WeOffer, WhatsAppConnections } from './containers'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Start />
      <WeOffer />
      <Reports />
      <WhatsAppConnections />
      <Automations />
    </div>
  )
}

export default App
