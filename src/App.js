import React from 'react'
import Boton from './components/Boton'
import { useState } from 'react';
import Navbar from './Bootstrap/Navbar';


const App = () => {
  const {contador, setContador} = useState(0);
  const handleSuma =(e) => {e.preventDefault();
  setContador(contador + 1)}

  
  const handleResta =(e) => {e.preventDefault();
      if(contador>0)
  setContador(contador - 1)}


  const handleReiniciar =(e) => {e.preventDefault();
  setContador(0)}
  
  return (
    <div>
       <Navbar/>

    <h1>Hola Mundo</h1>  

   

    <Boton contador = {contador} Clic = {handleSuma} nombre ="Suma + 1"/>
    <Boton contador = {contador} Clic = {handleResta} nombre ="Resta - 1"/>
    <Boton contador = {contador} Clic = {handleReiniciar} nombre ="Reiniciar"/>


    </div>
    )
}

export default App