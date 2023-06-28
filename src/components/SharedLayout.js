import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./SharedLayout.styled";
import { selectorLoggedIn } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import { AppBar } from "./AppBar/AppBar";
const SharedLayout = () => {
    const isLogin = useSelector(selectorLoggedIn);
    console.log(isLogin);
    return (
        <Container>
            <AppBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;