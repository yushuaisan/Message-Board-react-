import userService from 'SERVICE/userService'
// ================================
// Action Type
// ================================
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// ================================
// Action Creator
// ================================
const loginDone = (userData) => ({
  type: LOG_IN,
  payload: userData
})

const login = (formData) => {
  return dispatch => {
    userService
      .login(formData)
      .then(
        re => dispatch(loginDone(re))
      )
  }
}

const checkLogin = () => {
  return dispatch => {
    userService
      .checkLogin()
      .then((re) => {
        if (!re) return
        dispatch(loginDone(re))
      })
  }
}

const logout = () => {
  return dispatch => {
    userService
      .logout()
      .then(() => 
        dispatch({
          type: LOG_OUT
        })
      )
  }
}
/* default 导出所有 Actions Creator */
export default {
  login, checkLogin, logout
}

export const ACTION_HANDLERS = {
  [LOG_IN]: (userData, { payload }) => payload, // payload is userData
  [LOG_OUT]: () => null
}
