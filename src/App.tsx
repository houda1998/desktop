import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import Routes from "./pages/Routes";
import 'antd/dist/antd.css';
import{Provider} from "react-redux"
import store from "./redux"
export default hot(
  (): JSX.Element => (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
);
