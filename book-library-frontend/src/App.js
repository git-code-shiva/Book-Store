import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/header/header';
import Form from './components/form/form';
import HomePage from './components/homePage/homePage';
import EditPage from './components/editPage/editPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/editPage/:id' element={<EditPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
