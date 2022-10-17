// paso 1 para crear se teclea racf y te crea el componente

// paso 2 se elimina el import
//import React from 'react' ya que se esta importando en main.jsx

import { useState } from 'react';

//setCategProp es la propiedad que se esta enviando al padre
export const AddCategorias = ( {  onNuevoValor } ) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( event ) => {
    //console.log( event.target.value );
    setInputValue( event.target.value );
  };

  const onSubmit = ( event ) => {
    // la siguiente linea previene que se refresque el formulario
    event.preventDefault();
    // valida si la longitud de lo tecleado es menor o igual a 1, regresa
    if ( inputValue.trim().length <= 1) return;
    //console.log( inputValue );

    // la siguiente instruccion rtaliza la comunicacion con su padre
    //setCategProp( categvar => [ inputValue, ...categvar]);

    onNuevoValor( inputValue.trim() );
    // limpia el campo
    setInputValue('');

  };

  return(
    <form onSubmit={ onSubmit}>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
  )
  
};
