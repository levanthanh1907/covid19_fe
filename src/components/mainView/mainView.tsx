import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../../routes/privateRoute";
import Header from "../header/header";
import axios from "axios";
import { sortBy } from "lodash";
import Users from "../../features/user/user";
import Roles from "../../features/role/role";
import Tasks from "../../features/task/task";
import Projects from "../../features/project/project";
import Lookup from "../../features/lookup/lookup";
import Chart from "../../features/chart/chart";
import Home from "../../features/home/home";
// import Tracker from "../../tracker/Tracker";

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-left: 350px;
`;

const Content = styled.div`
  width: 95%;
  height: 95%;
  background: #fff;
  border: 30px solid #e9e9e9;
`;

interface data {
  Country: string;
}

const MainView: React.FC = () => {
  // const [countries, setCountries] = React.useState<data[]>([]);
  const { path } = useRouteMatch();
  // useEffect(() => {
  //   axios
  //     .get("https://api.covid19api.com/countries")
  //     .then((response) => {
  //       // handle success
  //       console.log(response);
  //       const { data } = response;
  //           console.log(data);

  //           const countries:any[] = sortBy(data, "Country");
  //           setCountries(countries);
  //           // setSelectedCountryId("vn")
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     });
  // },[]);
  return (
    <MainContent>
      <Content>
        <Switch>
          <Route exact path={path} component={Header}></Route>
          <PrivateRoute
            exact={false}
            path={`${path}/main/task`}
            component={Tasks}
          />
          <PrivateRoute exact={false} path={`${path}/home`} component={Home} />
          <PrivateRoute
            exact={false}
            path={`${path}/main/user`}
            component={Users}
          />
          <PrivateRoute
            exact={false}
            path={`${path}/main/role`}
            component={Roles}
          />
          <PrivateRoute
            exact={false}
            path={`${path}/main/project`}
            component={Projects}
          />
          <PrivateRoute
            exact={false}
            path={`${path}/main/search`}
            component={Lookup}
          />
          <PrivateRoute
            exact={false}
            path={`${path}/main/chart`}
            component={Chart}
          />
        </Switch>
      </Content>
    </MainContent>
  );
};

export default MainView;
