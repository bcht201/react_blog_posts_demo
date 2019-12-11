import React from 'react';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:[],
            index: props.match.params.index
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
            <h3>{this.state.index}</h3>
            <ul>
                {this.state.info.map((comment, index) => <li key={index}>{comment.name}</li>)}
            </ul>
        </div>
    )
}
}
export default Details;