import { Component } from "react";
import SinglePost from "../SinglePost/SinglePost";

/*class Posts extends Component {
    render() {
        return (
            <div>
                <h2 className='text-2xl my-3 '>Post Link</h2>
                <hr />
            <div className='flex my-3'>
                <SinglePost title='Post 1' description='Post 1 Description.' />
                <SinglePost title='Post 2' description='Post 2 Description.' />
            </div>
            </div>
        );
    }
}

export default Posts; */
//Use of Variable
class Posts extends Component {
    state = {
        posts: [
            { title: 'Post 1', description: 'post 1 description' },
            { title: 'post 2', description: 'post 2 description' }
        ],
        postTitle: 'Posts Title',
    }
    render() {
        setTimeout(() => {
            console.log('Modifying.');
            // this.state.posts[0].title = 'Modified Post';
            const posts = [...this.state.posts];
            posts[0].title = 'Modified Posts Data.';
            posts[1].title = 'Modified Posts 2 Data.';

            this.setState({
                posts,
            });

            this.setState({
                postTitle: 'Modified Post Title.',
            });

        }, 3000);
        return (
            <div>
                <h2 className='text-2xl my-3 '>{this.state.postTitle}</h2>
                <hr />
                <div className='flex my-3'>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>
            </div>
        );
    }
}
export default Posts;