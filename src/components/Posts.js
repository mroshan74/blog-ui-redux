import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetPosts } from '../redux/actions/postsAction'

class Posts extends React.Component {
  componentDidMount() {
    if(this.props.posts.length===0)
      this.props.dispatch(startGetPosts())
  }

  render() {
    return (
      <div>
        <h2>Posts written by users - {this.props.posts.length}</h2>
        <ul>
          {this.props.posts.map((post, i) => {
            return (
              <li key={i}>
                <Link to={`posts/${post.id}`}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Posts)