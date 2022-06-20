import React from "react";
import CardWrapper from "../../common/Card";
import Subtitle from "../../common/typografy/subtitle";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleLogin = () => {
        return localStorage.getItem("user");
    };
    const handLogOut = () => {
        return localStorage.getItem("user", "");
    };

    return (
        <CardWrapper>
            <Subtitle>Simple Component</Subtitle>
            <Component
                onLogin={handleLogin}
                onLogOut={handLogOut}
                isAuth={isAuth}
                {...props}
            />
        </CardWrapper>
    );
};
export default withFunctions;
