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
      this.props.dispatch(startGetPosts())
    }
    if (this.props.comments.length === 0) {
      this.props.dispatch(startGetComments())
    }
  }

  render() {
    console.log('render',this.props)
    return (
      <div>
        {
          this.props.posts ? (
          <div>
            <h2>username: {this.props.users.find(user => user.id == this.props.posts.userId).name}</h2>
            <h3>title: {this.props.posts.title} </h3>
            <h3>Body: </h3>
            <p>{this.props.posts.body}</p>
            <h3>Comments</h3>
            <ul>
              {this.props.comments.map((comment, i) => {
                return <li key={i}>{comment.body}</li>
              })}
            </ul>
            </div>)
            :
            <h3>loading....</h3>
        }
          <Link to={`/users/${this.props.posts.userId}`}>Back to user posts</Link>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  console.log('mapState-userShow', state,props)
  const id = props.match.params.id
  return {
    users: state.users,
    posts: state.posts.find((post) => post.id == id),
    comments: state.comments.filter((comment) => comment.postId ==id)
  }
}
export default connect(mapStateToProps)(PostShow)
