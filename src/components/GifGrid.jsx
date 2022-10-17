import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categor }) => {

  const { imagenes, isLoading } = useFetchGifs ( categor );

  return (
    <>
      <h3>{ categor }</h3>

      {
        isLoading && ( <h2>Cargando ...</h2>)  
      }

      <div className="card-grid">
        {
          imagenes.map( ( image ) => (
              //<li key={ id }>{ title }</li>
              <GifItem 
                key={ image.id } 
                //esta forma esparce todos las proes de (image) como propiedades
                { ...image }
              />
            ))
        }
      </div>
    </>
  );
};
