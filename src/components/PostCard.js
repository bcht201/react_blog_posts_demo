import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class PostCard extends React.Component {

    getFunction = () => {
        this.props.updateState(this.props.info.title, this.props.info.body);
    }
    render() {
        return (
            // <Link to={`/posts/${this.props.info.id}`} onClick={ this.getFunction }>
            <Link to={{
                    pathname: `/posts/${this.props.info.id}`, 
                    state:{
                    title:this.props.info.title,
                    body: this.props.info.body                   
                
                }}} onClick={ this.getFunction }>

            
                <div className="post_card_container">
                    <p className="post_card">{this.props.info.title}</p>
                </div>
            </Link>
        )
    }
}

export default PostCard