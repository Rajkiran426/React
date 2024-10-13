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
    };

    updateTitleHandller(title, e){
        e.preventDefault();
        console.log('updatein title');
        console.log(this);
        this.setState({
            postTitle: title,
        });
    };

    titleHandller = (title, e) =>{
        e.preventDefault();
        console.log('updatein title via property function');
        console.log(this);
        this.setState({
            postTitle: title,
        });
    };

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
                
                <div>
                <a 
                    href='http://google.com' 
                    onClick={this.titleHandller.bind(this, 'Raj Web Dev')} 
                    className='px-5 py-2 bg-red-500 rounded-3xl text-white' >
                    Update with property. </a>
                    <a 
                    href='http://google.com' 
                    onClick={this.updateTitleHandller.bind(this, 'Modified')} 
                    className='px-5 py-2 bg-red-500 rounded-3xl text-white' >
                    Update via Mehtod </a>
                     </div>
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