import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Greeting from "./components/Greeting"

function App() {

  return (
    <>
    <NavBar/>
    <div>
    <ItemListContainer greeting= "La tienda numero 1 en instrumentos"/>
    </div>
    </>
  )
}


export default App
