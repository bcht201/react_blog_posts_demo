import React from 'react';


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
        <div>
            <h1>title: {this.props.title}</h1>
            <h2>body: {this.props.body}</h2>
            <ul>
                {this.state.info.map((comment, index) => <li key={index}>{comment.name}</li>)}
            </ul>
        </div>
    )
}
}
export default Details;