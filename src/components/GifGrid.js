import React from 'react';
import {GifGridItem} from './GifGridItem';

import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {



   const { data:images , loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="row">
                <div className="card-columns">
                    
                        {  
                            images.map( img => {
                                return <GifGridItem 
                                        key={img.id}
                                        {...img}
                                    />;
                            }) 
                        }
                </div>
            </div>
        </>
    );
}
