import reduce from "./reducers/"
import { createStore } from "redux"

const store = createStore(reduce)

export default store