import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render() {
            return(
                <div className="text-center">
                    <button className="btn btn-outline-primary btn-lg"><Link to='sign'>Firma Ahora!</Link></button>
                </div>
            );
    }
}
