import React from 'react'
import { connect } from 'react-redux'
import { setVisibility } from 'actions/todoList'
import './index.less'

@connect(state => ({
  setVisibility: state.setVisibility
}))
export default class FilterLink extends React.Component {
  onClick = () => {
    this.props.dispatch(setVisibility({ filter: this.props.filter }))
  }

  render() {
    const { name, filter, setVisibility } = this.props
    return (
      <div className="todo-tab_item">
        <a
          style={{ color: setVisibility.filter === filter ? '#f01414' : '#4d555d' }}
          onClick={this.onClick}
        >
          {name}
        </a>
      </div>
    )
  }
}
