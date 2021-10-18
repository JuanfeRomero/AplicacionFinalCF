import React from 'react';
import Reflux from 'reflux';
import $ from 'jquery';
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

    onSubmitSendComment(ev){
        ev.preventDefault();
        let data = $(ev.target).serializeArray();
        document.getElementById("commentForm").reset();
        let comment = {
            author: data[0].value,
            text: data[1].value,
            id: data[2].value
        }
        CommentActions.sendSign(comment);
    }

    render() {
        //console.log(JSON.stringify(this.state, null, 5))
        if(!this.state.comments){
            return(<h1>Loading</h1>)
        }else{
            return(
                <div className="sign">
                    <CommentBox onSubmit={this.onSubmitSendComment.bind(this)} data= {this.state.comments}/>
                    <Link to="/">Volver a Home</Link>
                </div>
            )
        }
    }
}
