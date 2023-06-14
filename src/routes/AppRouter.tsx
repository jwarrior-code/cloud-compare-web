import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from "../components/views/auth/Login";
import Register from "../components/views/auth/Register";
import Recovery from "../components/views/auth/Recovery";
import Dashboard from "../components/views/portal/Dashboard";
import DashboardAdmin from "../components/views/portal/DashboardAdmin";
import Comparator from "../components/views/portal/Comparator";
import Results from "../components/views/portal/Results";
import Profile from "../components/views/portal/Profile";

function AppRouter() {

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/auth'>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='recovery' element={<Recovery/>}/>
                </Route>
                <Route path='/portal'>
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='dashboard-admin' element={<DashboardAdmin/>}/>
                    <Route path='comparator' element={<Comparator/>}/>
                    <Route path='results' element={<Results/>}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default AppRouter;
