import './App.css';
import Header from './components/ui/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './components/ui/Main';
import Catalog from './components/ui/Catalog';
import Contacts from './components/ui/Contacts';
import NotF404 from './components/ui/NotF404';
import Footer from './components/ui/Footer';

function App() {
  return (
<div className='BACKGROUND'>
         
<Header />
<Routes>
    <Route path='/' element={<Main />}></Route>
    <Route path='/catalog' element={<Catalog />}></Route>
    <Route path='/contacts' element={<Contacts />}></Route>
    <Route path='*' element={<NotF404 />}></Route>
</Routes>


<Footer />

</div>


  );
}

export default App;
