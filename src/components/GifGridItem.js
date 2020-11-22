import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (
        <div className="card border-secondary mb-3 sm animate__animated animate__backInLeft">
           
            <img className="card-img-top" src={url} alt={title}  height="300" />
            <div className="card-body">
                <h5 className="card-title text-center"><b>{title}</b></h5>
            </div>
        </div>
        
    )
}
