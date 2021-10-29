import {Redirect, Route, Switch} from "react-router";
import AboutPage from "../AboutPage/aboutPage";
import CounterPage from "../CounterPage/counterPage";
import ErrorPage from "../ErrorPage/errorPage";
import MyTabs from "../TabsPage/tabs";
import {BrowserRouter} from "react-router-dom";


export const routes = ["/react-playground", "/react-playground/about", "/react-playground/counters", "/react-playground/404", "/"];

const RouterTabs = () => (
    <BrowserRouter>
        <Switch>
            <Route path={routes[3]}>
                <ErrorPage/>
            </Route>
            <Route path={routes[1]}>
                <MyTabs/>
                <AboutPage/>
            </Route>
            <Route path={routes[2]}>
                <MyTabs/>
                <CounterPage/>
            </Route>
            <Route exact path={routes[0]}>
                <MyTabs/>
            </Route>
            <Route path={routes[0]}>
                <Redirect to={routes[3]}/>
            </Route>
            <Route path={routes[4]}>
                <Redirect to={routes[0]}/>
            </Route>
        </Switch>
    </BrowserRouter>)


export default RouterTabs;