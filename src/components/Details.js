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
    console.log(this.state.index);
    return(
        <div>
            <h3>{this.state.index}</h3>
            <ul>
                {this.state.info.map(comment => <li>{comment.name}</li>)}
            </ul>
            
            {console.log(this.state.info)}
        </div>
    )
}
}
export default Details;