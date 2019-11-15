import React, { Component } from 'react'
import axios from 'axios'

import SkeletonScreen from './SkeletonScreen'

class randomUsers extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: [],
            loading: false
        }
        this._user = this._user.bind(this)
    }
    
    getUsers(){
      this.setState({loading: true})
      axios('https://api.randomuser.me/?nat=US&results=5')
        .then(res => {this.setState({
            user: res.data.results
        })
        setInterval(() => {
          this.setState(this.setState({loading: false}))
        }, 5000);
        console.log(this.state.user)
      })
        .catch(err => console.log(err))
    }
    
    componentWillMount(){
      this.getUsers()
    }

    _user(){
      return(
        this.state.user.map(user => 
            <div key={user.id.value}>
              <h3>
                {`${user.name.title}. ${user.name.first} ${user.name.last}`}
              </h3>
              <p>{user.email}</p>
              <p>{user.cell}</p>
              <hr/>
            </div>
          )
      )
    }
    
      render()
      {
        let {loading} = this.state
        return (
        <div className="App">
          {!loading ? this.state.user.map(user => 
            <div key={user.id.value}>
              <h3>
                {`${user.name.title}. ${user.name.first} ${user.name.last}`}
              </h3>
              <p>{user.email}</p>
              <p>{user.cell}</p>
              <hr/>
            </div>) : <SkeletonScreen />}
          
        </div>
      )
    }

}

export default randomUsers