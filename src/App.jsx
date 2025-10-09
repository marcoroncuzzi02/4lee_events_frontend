import DefaultLayout from "./layouts/DefaultLayout"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventPage from './pages/EventPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <DefaultLayout/> }>
            {/* qui vanno le pagine */}
            <Route path='/' element={<HomePage/>}/>
            <Route path='/event/:id' element={<EventPage/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
    
    
  )
}

export default App
