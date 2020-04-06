import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startGetUsers } from '../redux/actions/usersAction'
import { startGetPosts } from '../redux/actions/postsAction'

class UserShow extends React.Component {
  componentDidMount() {
    const {posts} = this.props

    if (posts.length === 0) {
      this.props.dispatch(startGetUsers())
      this.props.dispatch(startGetPosts())
    }
  }

  render() {
    const {users,posts} = this.props
    return (
      <div>
        {this.props.users ? (
        <div>
          <h2>username : {users.name} </h2>
          <h3>Posts made</h3>
          <ul>
            {posts.map((post, i) => {
              return (
                <li key={i}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
          </div>) :
           <h3>loading....</h3>
          }
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  //console.log('MSP', props,state)
  const id = props.match.params.id
    return {
      users: state.users.find((user) => user.id == id),
      posts: state.posts.filter((post) => post.userId == id)
    }
}
export default connect(mapStateToProps)(UserShow)
