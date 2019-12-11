import React from 'react';
import PostCard from './PostCard';


class PostContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => this.setState( { posts: result.slice(0,10) } ));
    }

    render() {
        return (
            <div>
                <h1>This is Post Container</h1>
                {this.state.posts.length === 0 ? <p>didnt work</p> : 
                this.state.posts.map(card => <PostCard key={card.id} info = {card}/>)}
            </div>
        )
    }
}

export default PostContainer;