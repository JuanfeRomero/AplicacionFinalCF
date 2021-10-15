import Reflux from 'reflux';
import { io } from 'socket.io-client';

import CommentActions from '../actions/CommentActions';

let CommentStores = Reflux.createStore({
    listenables: [CommentActions],
    init: function(){
        this.state = { comments: null}
        this.socket = io('http://localhost:3000', {
            withCredentials: false
        });

        this.socket.on('data', (data) =>{
            this.state.comments = data;
            this.trigger(this.state);
        });
    },
    fetchComments: function() {
        this.socket.emit('read');
    }
});

export default CommentStores;
