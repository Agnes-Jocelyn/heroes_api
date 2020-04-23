import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'

const List = () => {
    const [data, setData] = useState ([ ])
    useEffect(() => {
        const URL = 'https://heroes1api.herokuapp.com/heroes/get'
        axios
            .get(URL)
            .then(response => {
                const data = response.data.data;
                setData(data);

            })
    })

    const showData = data.map((item, index) => 
    <div key={index} className="col-4">
        <div className="card mt-4">
            <div className="card-body">
                
                <p className="card-text">Name : {item.name}</p>
                    <p className="card-text">Born : {item.born}</p>
                    <p className="card-text">Died : {item.died}</p>
                    <p className="card-text">Description : {item.description}</p>
                    <p className="card-text">Establishment : {item.establishment}</p>
               
                    
        </div>
        </div>
    </div>)

    return(
        <div className="container">
            <h1>List Heroes</h1>
            <div className="row">
                {showData}
            </div>
        </div>
    )
}



export default List;