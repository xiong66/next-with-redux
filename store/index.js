import { createStore } from 'redux'
import reducer from './reducer'

const initStore = () => createStore(reducer)

export default initStore;