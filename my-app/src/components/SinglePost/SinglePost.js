import { Component } from "react";

class SinglePost extends Component{
    render(){
        return (
        <div className=" m-3 p-4 border border-gray-400 shadow">
            <div className='text-xl font-bold text-blue-600'>{this.props.title}</div>
            <div>{this.props.description}</div>
        </div>
        );
    }
}

export default SinglePost;