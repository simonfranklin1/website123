import { Navbar } from './components'
import { API, Automations, Plans, Reports, Start, Support, WeOffer, WhatsAppConnections } from './containers'

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
      <Support />
      <Plans />
    </div>
  )
}

export default App
