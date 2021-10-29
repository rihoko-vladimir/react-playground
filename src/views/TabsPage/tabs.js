import {Link, useLocation} from "react-router-dom";
import {AppBar, Tab, Tabs} from "@mui/material";
import {routes} from "../RouterTabs/routerTabs"


const MyTabs = () => {
    let locationHook = useLocation();
    let currentRoute = locationHook.pathname;
    console.log(currentRoute);
    return <AppBar position={"static"} color={"transparent"}>
        <Tabs value={currentRoute} textColor={"secondary"} indicatorColor={"secondary"}>
            <Tab label={"About us"} value={routes[1]} to={routes[1]} component={Link}/>
            <Tab label={"Counters"} value={routes[2]} to={routes[2]} component={Link}/>
        </Tabs>
    </AppBar>
}
export default MyTabs;