import React from 'react';

export default class Comment extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="comment alert alert-success">
                <h2>{this.props.author}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
}