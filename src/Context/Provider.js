import React, { Children } from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import Reducers from "./Reducers";
import initialState from "./Store";

const UserProvider = ({children}) => {
    const store = createStore(Reducers , initialState)
    return <Provider store={store}>{children}</Provider>
}

//buradaki childeren mantigi provider ile sarmalamak yerine userProvider olarak direkt kullanmak icin userProvider ın child ı 

export default UserProvider;