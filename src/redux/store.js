import { createStore } from "redux";
import todoApp from "./reducers/todosReducers";

export default createStore(todoApp);