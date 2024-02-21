import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <section className="min-h-screen bg-zinc-500/10 dark:bg-slate-700 transition-colors">

      <Navbar />
      <Home />

    </section>
  )
}

export default App
