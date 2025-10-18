import React from "react";
import PropTypes from 'prop-types'

class Student extends React.Component{
    static defaultProps = {
        lnm: "No last name",
        result: "No result",
        city: "Toronto"

    }
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <h2>Welcome to Fullstack Development - I</h2>
                <h4>React JS Programming Week09 Lab exercise</h4>
                <h5>Student ID {this.props.sid}</h5>
                <h6>{this.props.fnm} {this.props.lnm}</h6>
                <h6>George Brown College, {this.props.city}</h6>
            </>
        )

        
    }

}

Student.propTypes = {
    sid:PropTypes.number,
    fnm:PropTypes.string.isRequired,
    lnm:PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    city: PropTypes.string
}

export default Student