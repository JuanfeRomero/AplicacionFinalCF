import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render() {
            return(
                <div className="home">
                    <Link to='sign'>Firma Ahora!</Link>
                </div>
            );
    }
}
