import React from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class CommentBox extends React.Component {

    constructor(){
        super()
    }

    render(){
        console.log(JSON.stringify(this.props, null, 4))
        return(
            <div className="commentbox">
                <CommentForm/>
                <CommentList data={this.props.data}/>
            </div>
        );
    }
}