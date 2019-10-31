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

const Home = ({ history }) => {
    return (
        <Layout>
            <HomeSection />
            <CellSection />
            <ValueSection />
            <PressSection history={history} />
            <LabSection />
            <CarouselSection />
            {/* <Contact /> */}
        </Layout >
    );
};

export default Home;
