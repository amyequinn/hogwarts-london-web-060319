import React from 'react'

class HogCard extends React.Component {

  state = {
    showDetails: false
  }

details = (medal, specialty, weight) => {
return(
  <div>

  <div className="extra content">
      <i className="trophy icon"></i>
      {medal}
  </div>
    <div className="extra content">
        <i className="star icon"></i>
        {specialty}
    </div>
      <div className="extra content">
          <i className="weight icon"></i>
        {weight}kg
      </div>

  </div>
)
}

toggleShowDetails = () => this.setState({ showDetails: !this.state.showDetails})

render(){

  const { name, specialty } = this.props
  const medal = this.props['highest medal achieved']
  const weight = this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  return (


    <div className="ui card">
  <div className="image">
  <img src={require('../hog-imgs/' + name.toLowerCase().split(' ').join('_')+ '.jpg')}/>

  </div>
  <div className="content">
    <a className="header">{name}</a>
    <button className="ui button" onClick={this.toggleShowDetails}>{this.state.showDetails ? 'hide' : 'show'}</button>
  </div>
      {
        this.state.showDetails && this.details(medal, specialty, weight)
      }

</div>


  )
}}


export default HogCard
