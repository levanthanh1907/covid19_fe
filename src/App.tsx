import axios from "axios";
import { SnackbarProvider } from "notistack";
import React, { Suspense, useLayoutEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components";
import Header from "./components/header/header";
import Login from "./features/login/login";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
function App() {
  
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={1500}>
      <div className="App">
        <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <Switch>
              <Redirect exact from="/" to="/account/login" />
              <PrivateRoute path="/app" exact={false} component={HomePage} />
              <PublicRoute
                path="/account/login"
                exact={false}
                component={Login}
              />
              <Route path="*" component={Header} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    </SnackbarProvider>
  );
}

export default App;
