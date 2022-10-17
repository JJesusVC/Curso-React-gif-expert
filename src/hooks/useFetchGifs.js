import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categor ) => {

  //cambia el state useState para obtener el snippet
  const [imagenes, setImagenes] = useState([]);

  const [isLoading, setisLoading] = useState(true);

  const getImagenes = async() => {
    const newImagenes = await getGifs( categor );
    setImagenes ( newImagenes );
    setisLoading(false);
  };
  
  // el siguiente comando evita que se meta en un loop y solo se conecte una sola vez, cada cambio de categoria
  useEffect( () => {
    getImagenes();
  }, []);

  return {
    imagenes,
    isLoading
  };
};
