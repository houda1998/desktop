import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import 'antd/dist/antd.css';

export default hot(
  (): JSX.Element => (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  )
);
