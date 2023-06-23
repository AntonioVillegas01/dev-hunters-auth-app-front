import { Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/auth/AuthPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Layout from "../components/Layout";
import {getAllAccess} from "../helpers/localStorage/authStorage";
import {RootState} from "../redux/store/store";
import {useSelector} from "react-redux";


function RequireAuth({ children }: { children: JSX.Element }) {
    if (!getAllAccess()) {
        return <Navigate to="/auth" />;
    }

    return children;
}
const  RootRouter = () => {
    const isLoggedIn = useSelector((state: RootState) => state.authReducer.isLoggedIn);

    const authRoutes = isLoggedIn ? (
        <Route path="auth" element={<Navigate to="/" replace />} />
    ) : (
        <Route path="auth" element={<AuthPage />} />
    );



    return (
        <BrowserRouter>
            <Routes>
                {authRoutes}
                <Route path="auth" element={<AuthPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route
                    element={
                        <RequireAuth>
                            <Layout />
                        </RequireAuth>
                    }
                >
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default RootRouter
