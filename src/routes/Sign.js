import React from 'react';
import Reflux from 'reflux';
import CommentBox from '../components/CommentBox';
import CommentStore from '../stores/CommentStores';
import CommentActions from '../actions/CommentActions';
import { Link } from 'react-router-dom';


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
                <CommentBox/>
                <Link to="/">Volver a Home</Link>
            </div>
        )
    }
}
