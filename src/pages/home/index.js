import React from "react";

import Layout from "../../components/Layout";
// import { Contact } from "../../components";

import {
    CarouselSection,
    CellSection,
    HomeSection,
    LabSection,
    PressSection,
    ValueSection,
} from "../../sections/HomePage";

const Home = ({ path }) => {
    return (
        <Layout path={path}>
            <HomeSection />
            <CellSection />
            <ValueSection />
            <PressSection history={path} />
            <LabSection />
            <CarouselSection />
            {/* <Contact /> */}
        </Layout >
    );
};

export default Home;
