import React from "react";
import CardWrapper from "../common/Card";
import SimpleComponent from "../examples/hoc/simpleComponent";
import withFunctions from "../examples/hoc/withFunctions";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";

const HocExercise = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <CardWrapper>
            <SmallTitle>5. Simple Components</SmallTitle>
            <Divider />
            <ComponentWithHoc />
        </CardWrapper>
    );
};

export default HocExercise;
