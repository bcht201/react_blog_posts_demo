import React from 'react';
import '../App.css';


class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:[],
            index: this.props.match.params.index
        }
    }

componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + this.state.index)
    .then((response) => response.json())
    .then((result) => this.setState( { info: result.slice(0,10) } ));
}

    render(){
        return(
            <div className="details">
                <h2 className="title">Title: {this.props.title}</h2>
                <h3 className="body">Body: {this.props.body}</h3>
                <ul>
                    {this.state.info.map((comment, index) => <li className="comments" key={index}>{comment.name}</li>)}
                </ul>
            </div>
        )
    }
}
export default Details;