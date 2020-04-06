import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startGetUsers } from '../redux/actions/usersAction'
import { startGetPosts } from '../redux/actions/postsAction'
import { startGetComments } from '../redux/actions/commentsAction'

class PostShow extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0 ) {
      this.props.dispatch(startGetUsers())
    }
    if (this.props.posts.length === 0) {
      this.props.dispatch(startGetPosts())
    }
    if (this.props.comments.length === 0) {
      this.props.dispatch(startGetComments())
    }
  }
    
  getPost(){
      const id = this.props.match.params.id
      const post = this.props.posts.find((post) => post.id == id)
      console.log('post',post)
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div>
        <h2>username: {}</h2>
        <h3>title: {} </h3>
        <h3>Body: </h3>
        <p>{}</p>
        <h3>Comments</h3>
        <ul>
          {this.props.comments
            .filter((comment) => comment.postId == this.props.id)
            .map((comment, i) => {
              return <li key={i}>{comment.body}</li>
            })}
        </ul>
        <Link to={`/users/`}>Back to user posts</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapState-userShow', state)
  return {
    users: state.users,
    posts: state.posts,
    comments: state.comments,
  }
}
export default connect(mapStateToProps)(PostShow)
