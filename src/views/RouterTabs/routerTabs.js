import {Redirect, Route, Switch} from "react-router";
import AboutPage from "../AboutPage/aboutPage";
import CounterPage from "../CounterPage/counterPage";
import ErrorPage from "../ErrorPage/errorPage";
import MyTabs from "../TabsPage/tabs";
import {BrowserRouter} from "react-router-dom";


export const routes = ["/about", "/counters", "/", "/404"];

const RouterTabs = () => (
    <BrowserRouter>
        <Route path={routes[3]}>
            <ErrorPage/>
        </Route>
        <Switch>
            <Route path={"/"}>
                <div>
                    <Switch>
                        <Route path={routes[0]}>
                            <MyTabs/>
                            <AboutPage/>
                        </Route>
                        <Route path={routes[1]}>
                            <MyTabs/>
                            <CounterPage/>
                        </Route>
                        <Route exact path={routes[2]}>
                            <MyTabs/>
                        </Route>
                        <Route path={"/"}>
                            <Redirect to={routes[3]}/>
                        </Route>
                    </Switch>
                </div>
            </Route>
        </Switch>
    </BrowserRouter>)


export default RouterTabs;