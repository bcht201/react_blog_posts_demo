import React from 'react';
import { Link } from "react-router-dom";

function PostCard(props) {
    return (
        <Link to={`/posts/${props.info.id}`}>
            <div>
                <p>{props.info.title}</p>
            </div>
        </Link>
    )
}

export default PostCard