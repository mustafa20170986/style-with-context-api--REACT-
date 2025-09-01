import './App.css'
import Navbar from './components/navbar'
import Button from './components/button'
import Inputtask from './components/input '
function App(){
  //using state for mananging the shoping cart data 

  return (
   <>
   <Navbar clasName="top-0 sticky rounded-xl"
   txtone="ADD YOUR TASK "
  
   />
<Inputtask/>
   </>
  )
}
export default App