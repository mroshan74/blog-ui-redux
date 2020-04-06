import React from 'react'
import { Link } from 'react-router-dom'
import { startGetUsers } from '../redux/actions/usersAction'
import { connect } from 'react-redux'
import { startGetPosts } from '../redux/actions/postsAction'

class UserShow extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
    }
  }
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.dispatch(startGetUsers())
    }
    if (this.props.posts.length === 0) {
      this.props.dispatch(startGetPosts())
    }
  }

  render() {
    const { user } = this.state
    const id = this.props.match.params.id
    return (
      <div>
        <h2>username : </h2>
        <h3>Posts made</h3>
        <ul>
          {this.props.posts
            .filter((post) => post.userId == id)
            .map((post, i) => {
              return (
                <li key={i}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log('mapState-userShow',state)
    return {
        users: state.users,
        posts: state.posts
    }
}
export default connect(mapStateToProps)(UserShow)
