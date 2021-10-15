import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
    constructor(){
        super();
    }

    render() {
        console.log(typeof this.props.data)
        let comments = this.props.data.map((comment) => {
            return (<Comment key={comment.id} author={comment.author} text={comment.text}/>)
        });
        return(
            <div className="comment">
                { comments }
            </div>
        );
    }
}