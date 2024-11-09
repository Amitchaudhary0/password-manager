
import './App.css'
import Navbar from './components/Navbar'
import InputData from './components/InputData'
import PassManage from './components/PassManage'


function App() {

  

  return (
    <>
      <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <Navbar/>
      <main>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_100%_100%_at_40%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <InputData/>
          <PassManage/>
      </main>
        </div>
    </>
  )
}

export default App
