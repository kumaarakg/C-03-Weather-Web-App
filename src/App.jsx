import './App.css'
import { Navbar, Logo, Input, Chart, Blog } from './assets/componenets'
function App() {
  return (
    <div className="w-full bg-background">
      <Navbar />
      <Logo />  
      <Input />
      <Chart />
      <Blog />
    </div>
  )
}
export default App
