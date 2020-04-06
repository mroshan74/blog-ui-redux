import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Users from './components/Users'
import Posts from './components/Posts'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'

function App(props){
    return (
      <BrowserRouter>
        <div>
          <Link to='/users'>Users</Link> -|-
          <Link to='/posts'>Posts</Link>
          <Route exact path='/users' component={Users} />
          <Route
            exact
            path='/users/:id'
            render={(props) => (
              <UserShow key={props.match.params.id} {...props} />
            )}
          />
          <Route
            exact
            path='/posts/:id'
            component={PostShow}
          />
          <Route exact path='/posts' component={Posts} />
        </div>
      </BrowserRouter>
    )

}

export default App