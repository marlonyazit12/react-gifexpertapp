import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setcategories}) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        if ( inputValue.trim().length > 2)
        {
            setcategories( categories => [inputValue , ...categories]);
            setInputValue('');
        }
        
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 text-center">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar GIPHY" 
                aria-label="Buscar GIPHY"
                aria-describedby="basic-addon2"
                value={inputValue}
                onChange={inputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Buscar</button>
                </div>
            </div>
        </form>
    );
}

AddCategory.propTypes = {
    setcategories : PropTypes.func.isRequired
}
