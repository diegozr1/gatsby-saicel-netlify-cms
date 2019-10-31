import React from "react";

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
        <>
            <HomeSection />
            <CellSection />
            <ValueSection />
            <PressSection history={history} />
            <LabSection />
            <CarouselSection />
            {/* <Contact /> */}
        </>
    );
};

export default Home;