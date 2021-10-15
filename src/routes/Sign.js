import React from 'react';
import Reflux from 'reflux';
import CommentBox from '../components/CommentBox';
import CommentStore from '../stores/CommentStores';
import CommentActions from '../actions/CommentActions';

export default class Sign extends Reflux.Component{ 
    constructor(){
        super()
        this.stores = [CommentStore]
    }

    componentDidMount(){
        CommentActions.fetchComments();
    }

    render() {
        return(
            <div className="sign">
                <h1>React Facilito, Pasa y firma</h1>
                <CommentBox/>
            </div>
        )
    }
}