import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./SharedLayout.styled";
import { AppBar } from "./AppBar/AppBar";
import  Loader from "./Loaders/Loader"
const SharedLayout = () => {

    
    return (
        <Container>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;