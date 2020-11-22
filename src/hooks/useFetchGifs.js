import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data : [],
        loading : true
    });    

    useEffect( () => {
        //console.log('ejecuto',category);
        setTimeout(() => {
            getGifs(category).then( result => { setstate({
                data : result,
                loading : false
            })});    
        }, 1200);
        
   },[ category]); //Arreglo vacio indica que solo se va ejecutar una sola vez al renderizar el componente

    return state;
}
