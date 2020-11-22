import React , {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';



const GifExpertApp = () =>
{
    //const categories = [ 'One Punch' , 'Samurai X' , 'Dragon Ball' ];

    const [categories, setcategories] = useState([ 'Programador' ]);
    

    return ( <>
                

            <div class="alert alert-success" role="alert">
                <h2 class="alert-heading">GifExpertApp!</h2>
                <p>Curso de React (Hooks y MERN).</p>
                <hr/>
            </div>

                <Container className="row text-center">

                   <div className="col-sp-2 text-center">
                     <AddCategory setcategories={setcategories}></AddCategory>
                   </div> 
                </Container>

                <ol>
                        {
                            categories.map( category =>{
                                return <GifGrid key={category} category={category}/>;
                            })
                        }
                </ol>
                
             </>
            );
}

export default GifExpertApp;