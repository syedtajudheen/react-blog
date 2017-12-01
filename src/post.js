import React from'react';
import './home.css';
import axios from 'axios';


class Post extends React.Component {
    constructor() {
        super();
        this.state = { userId: 1, title: '', body: '' };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handletitle = this.handletitle.bind(this);
        this.handlebody = this.handlebody.bind(this);
    }

    handletitle(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
   
    handlebody(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        console.log(' Title is: ' + this.state.title);
        console.log(' Body is: ' + this.state.body);
        console.log('userid is' + this.state.userId);

        let data = {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
        }
        console.log(data);
        axios.post('https://jsonprovider.herokuapp.com/posts', data)
            .then(function (response) {
                console.log(response);
                alert("Sucessfully Posted!")
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (<div>
                
                    <h1 className="postpage_head">POST BLOG</h1>
                    <div className="container">
                        <form onSubmit={this.onFormSubmit}>
                            <label>TITLE:</label>
                            <input value={this.state.title} onChange={this.handletitle} name="title" type="text" className="form-control"  placeholder="Title of the Blog"  /><br />
                            <label>POST:</label>
                            <textarea value={this.state.body} onChange={this.handlebody} name="body" className="form-control" rows="5" onChange={this.handlebody} placeholder="Contents of the post here..."></textarea><br />
                            <button type="submit" className="b1" className="btn btn-dark">SUBMIT</button>
                        </form>
                    </div>
                </div> 
                );
    }
}





export default Post;