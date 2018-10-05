import React, { Component } from 'react'
import { withRouter } from 'react-router' // v2.4 新增的 HoC

class Redirect extends Component {
  componentWillMount() {
    this.props.router.replace( // 可以直接通过 props 获取 router
      this.props.location.query.dest
    )
  }

  render () {
    // 非实体组件需显式返回 null
    return null
  }
}

export default withRouter(Redirect)
