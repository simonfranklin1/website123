import { Navbar } from './components'
import { API, Automations, Reports, Start, WeOffer, WhatsAppConnections } from './containers'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Start />
      <WeOffer />
      <Reports />
      <WhatsAppConnections />
      <Automations />
      <API />
    </div>
  )
}

export default App
