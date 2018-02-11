import React from "react";
import CountriesContainer from "../containers/CountriesContainer";
import CreateCountriesContainer from "../containers/CreateCountriesContainer";

function Main() {
    return (
        <div>
            <h1>Chemicals</h1>
            <CountriesContainer />
            <CreateCountriesContainer />
        </div>
    );
}

export default Main;