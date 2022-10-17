import { useState } from "react";
import { AddCategorias, GifGrid} from './components'

//qkyqG7YBrz75iP9oqByUv6ZZHMXQONj3

export const GifExpertApp = () => {
  // el siguiente comando surge de teclear (useStateNippet)
  const [categorias, setCategorias] = useState(["One Punch"]);

  const onAddCategory = ( newCategoria ) => {
    //console.log({newCategoria});

    // aqui se valida que no este duplicado el nombre, cuidado es case sensitive
    if ( categorias.includes(newCategoria) ) return;

    // react no permite mutar un componente, se debe usar "..." (operador spred) que indica que adicionalmente
    // agrega otro item al arreglo
    setCategorias([newCategoria, ...categorias]);
  };

  //console.log(categorias);

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategorias 
      //setCategProp={setCategorias}
        onNuevoValor={ onAddCategory }
      />

      {/* Listado de gif */}
      {/* Item Gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {
          categorias.map( ( categorias ) => (
            //return <li key={category}>{category}</li>;
              <GifGrid 
                key={ categorias } 
                categor= { categorias } 
              />
            )
          )
        }
      </ol>
    </>
  );
};
