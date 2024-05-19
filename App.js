import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Users';
import CreateUser from './CreateUser';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Users />}></Route>
          <Route path = '/create' element = {<CreateUser />}></Route>
          <Route path='/update/:mobileNumber' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
