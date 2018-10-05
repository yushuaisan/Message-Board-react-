// ================================
// Action Type
// ================================
const ADD_TODO = 'ADD_TODO'
const DEL_TODO = 'DEL_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

// ================================
// Action Creator
// ================================
const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    content,
    completed: false,
    createdAt: Date.now()
  }
})

const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId
})

const delTodo = (todoId) => ({
  type: DEL_TODO,
  payload: todoId
})

/* default 导出所有 Action Creators */
export default {
  addTodo, toggleTodo, delTodo
}

export const ACTION_HANDLERS = {
  [ADD_TODO]: (todos, { payload }) => [ ...todos, payload ],
  [TOGGLE_TODO]: (todos, { payload: todoId }) => todos.map(
    todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  ),
  [DEL_TODO]: (todos, { payload: todoId }) => todos.filter(
    todo => todo.id !== todoId
  )
}
