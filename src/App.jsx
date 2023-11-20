import {BrowserRounter,routes,route} from "react-router-dom";

import {NavBar} from "./components/navbar";
import {ItemListContainer} from "./components/ItemListContainer";
import {Error404} from "./components/Error404";

function App() {
  return (
    <BrowserRounter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="productos"/>}/>
        <Route path="/category/:id" element={<ItemListContainer greeting="productos"/>}/>
        <Route path="/items/:id" element={ItemListContainer}/>
        <Route path="*"element={<Error404/>}/>
    </Routes>
  </BrowserRounter>
  )
}

export default App
