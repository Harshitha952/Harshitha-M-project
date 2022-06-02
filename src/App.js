import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Authpage from './pages/auth.component';
import RecordData from './jobdetails/jobdetails.compon';
 

function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Authpage/>}/>
    <Route path='/jobdetail' element={<RecordData/>}/>
    </Routes>
    </BrowserRouter>
  )
}

 
export default App;