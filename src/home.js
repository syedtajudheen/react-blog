import React from 'react';
import axios from 'axios';
import './home.css';



class Home extends React.Component{
    render(){
        return (<div className="bg">
                        <div className="container">
                            <FetchPost />
                        </div>
                </div>
                );
    }
}


class FetchPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonprovider.herokuapp.com/posts/?limit=10')
            .then( (response) => {
                console.log(response.data);
                const post = response.data.map((item,i) => {
                    return(<div className="postbg">
                                <h3> 
                                    <i className="fa fa-user-circle" aria-hidden="true"></i> &ensp;
                                    {item.title}
                                </h3> <hr />
                                <p>
                                    {item.body}
                                </p> <br />
                            </div>);
                });
                this.setState({ posts: post});
                console.log({post});
            })   
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.posts}
            </div>
        );
    }
}

export default Home;