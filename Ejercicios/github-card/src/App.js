import React from "react";
import "./App.css"
import axios from 'axios';
//// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn nombres a probar
class Card extends React.Component{
  render(){
    const profile = this.props
    return(
      <div className="github-profile">
        <img src={profile.avatar_url} alt="profile avatar"/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
)

class Form extends React.Component {
  state =  {userName: ''}
  handleSubmit = async (event) =>{
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data)
    this.setState({userName: ''})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" placeholder="Github username" 
          value = {this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          required
        />
        <button>Add card</button>
      </form>
    )
  }
}
class App extends React.Component{
  state =  {
    profiles:  [],
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({//aqui voy concatenando
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render(){
    return (
      <div>
        <div className = "header">
          <h1>{this.props.title}</h1>
        </div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App;
