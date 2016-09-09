import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Bar from '../components/stages/bar'

class Stage extends Component {

  render() {
    return(
      <div>
        <h1> Stage Container </h1>
        <Bar/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, {})(Stage)
