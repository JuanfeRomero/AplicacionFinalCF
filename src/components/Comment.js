import React from 'react';

export default class Comment extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="comment">
                <h2>Nombre Autor</h2>
                <p>Comment</p>
            </div>
        );
    }
}