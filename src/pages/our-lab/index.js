import React from "react";

import Layout from "../../components/Layout";

import {
    DescTecSection,
    DoctorSection,
    MainSection,
    ProductSection,
    SaicelSection,
} from "../../sections/LabPage";

const Lab = ({ path }) => {
    return (
        <Layout path={path}>
            <MainSection />
            <ProductSection />
            <DescTecSection />
            <DoctorSection />
            <SaicelSection />
        </Layout>
    );
};

export default Lab;
