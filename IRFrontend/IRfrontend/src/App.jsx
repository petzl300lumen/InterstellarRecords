import './App.css';
import Header from './components/ui/Header';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Main from './components/ui/Main';
import Catalog from './components/ui/Catalog';
import Contacts from './components/ui/Contacts';
import NotF404 from './components/ui/NotF404';
import Footer from './components/ui/Footer';
import ProductDetail from './components/ui/ProductDetail/ProductDetail';
import GenreButton from './components/ui/buttons/GenreButton';
import api from './components/logic/api';

function App() {

  const[numCartItems, setNumberCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code")

  useEffect(function(){
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumberCartItems(res.data.num_of_items)
      })
       .catch(err =>{
        console.log(err.message)
      })
    }
    
  }, [])

  return (
<div className='BACKGROUND'>
         
<Header numCartItems={numCartItems} />
<Routes>
    <Route path='/' element={<Main setNumberCartItems={setNumberCartItems}/>}></Route>
    <Route path='/catalog' element={<Catalog setNumberCartItems={setNumberCartItems}/>}></Route>
    <Route path='/catalog/products/:slug' element={<ProductDetail setNumberCartItems={setNumberCartItems} />}></Route>
    <Route path='/contacts' element={<Contacts />}></Route>
    <Route path='/products/:slug' element={<ProductDetail setNumberCartItems={setNumberCartItems} />}></Route>
    <Route path='*' element={<NotF404 />}></Route>
</Routes>




<Footer />

</div>


  );
}

export default App;
