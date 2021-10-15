import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className="comment">
                <h2>Nombre Autor</h2>
                <p>Comment</p>
            </div>
        )
    }
}