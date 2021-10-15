import React from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class CommentBox extends React.Component {

    constructor(){
        super()
    }

    render(){
        return(
            <div className="commentbox">
                <CommentForm/>
                <CommentList/>
            </div>
        )
    }
}