import React from "react";

import Layout from "../../components/Layout";

import {
    MainSection,
    OfferSection,
    SafeSection,
    StudySection,
} from "../../sections/CellPage";

const Cell = ({ path }) => (
    <Layout path={path}>
        <MainSection />
        <StudySection />
        <OfferSection />
        <SafeSection />
        {/* <Contact /> */}
    </Layout>
);

export default Cell;
