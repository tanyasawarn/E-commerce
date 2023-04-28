import { createStore } from "redux";

import rootreducer from "./components/redux/reducer/main";

const Store = createStore(rootreducer);

export default Store;