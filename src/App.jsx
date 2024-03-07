import { Navbar } from './components'
import { API, Automations, Plans, Reports, Start, Support, WeOffer, WhatsAppConnections } from './containers'
import Contact from './containers/Contact/Contact'

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
      <Contact />
    </div>
  )
}

export default App
