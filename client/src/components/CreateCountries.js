import React from "react";

class CreateCountries extends React.Component {
    constructor() {
        super();
        this.state = {
            country: {
                continent: "",
                capital: "",
                leader: "",
                population: "",
                currency: "",
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Chemical</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.addCountry) {
                            this.props.addCountry(this.state.country);
                        }
                    }}>
                    <div>
                    Chemical Name: <input onChange={(e) => {
                            const country = {continent: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <div>
                    Chemical Formula: <input onChange={(e) => {
                            const country = {capital: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>   
                    <div>
                    CAS Number: <input onChange={(e) => {
                            const country = {leader: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <div>
                    Product ID: <input onChange={(e) => {
                            const country = {population: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <div>
                    Price: <input onChange={(e) => {
                            const country = {currency: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCountries;