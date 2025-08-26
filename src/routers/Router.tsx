import {Route, Routes} from "react-router";
import DashboardAgent from "../pages/B-body/DashboardAgent"
import LayoutWithBarAgent from "../layout/LayoutWithBarAgent"
import {Navigate} from "react-router";
import Players from "../pages/B-body/Players";
import Agenda from "../pages/B-body/Agenda";
import Statistic from "../pages/B-body/Statistic";
import Setting from "../pages/B-body/Setting";
import Pay from "../pages/B-body/Pay";
import LayoutWithBarPlayer from "../layout/LayoutWithBarPlayer";
import DashboardPlayer from "../pages/B-body/DashboardPlayer";
import LayoutWithoutBar from "../layout/LayoutWithoutBar";
import LoginAgent from "../pages/B-body/LoginAgent";
import LoginPlayer from "../pages/B-body/LoginPlayer";


const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<LayoutWithBarAgent/>}>
                <Router path="/" element={<DashboardAgent />} />
                <Router path="/players" element={<Players/>}/>
                <Router path="/agenda" element={<Agenda/>}/>
                <Router path="/statistic" element={<Statistic/>}/>
                <Router path="/setting" element={<Setting/>}/>
                <Router path="/pay" element={<Pay/>}/>
            </Route>
            <Router path="/" element={<LayoutWithBarPlayer/>}>
                <Router path="/" element={<DashboardPlayer/>}/>
                <Router path="/agenda" element={<Agenda/>}/>
                <Router path="/statistic" element={<Statistic/>}/>
            </Router>
            <Router path="/" element={<LayoutWithoutBar/>}>
                <Route path="/" element={<Navigate to={"/loginAgent"}/>}/>
                <Router path="/loginAgent" element={<LoginAgent/>}/>
                <Router path="/loginPlayer" element={<LoginPlayer/>}/>
            </Router>
        </Routes>

    );
};

export default Router;
