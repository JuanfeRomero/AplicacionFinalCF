import React from 'react';

export default class CommentForm extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <form onSubmit={this.props.onSubmit} className="commentForm" id="commentForm">
                <input type="text" className="form-control" name="author" placeholder="Su nombre"/>
                <input type="text" className="form-control" name="text" placeholder="Firma"/>
                <input type="hidden" name="id" value={Date.now()}/>
                <input type="submit" className="form-control btn btn-secondary" value="Enviar"/>
            </form>
        );
    }
}