import React, { Component } from "react";

class Country extends Component {

    componentDidMount() {

         
        this.props.getCountry(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                <div>Chemical Name: {this.props.country.continent}</div>
                <div>Chemical Formula: {this.props.country.capital}</div>
                <div>CAS Number: {this.props.country.leader}</div>
                <div>Product ID: {this.props.country.population}</div>
                <div>Price:{this.props.country.currency}</div>
            </div>
        );
    }
}

export default Country;