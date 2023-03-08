import { Component } from "react";
import React from "react";
import axios from "axios";

class Update extends Component{
    constructor(props){
        super(props);
        this.state={
            sno:'',
            name:'',
            ratings:'',
            verdict:'',
            creator:'',
            year:''
        };
    }
    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value});
    }
    handleNameChange =(event)=>{
        this.setState({name:event.target.value});
    };
    handleRatingChange=(event)=>{
        this.setState({ratings:event.target.value});
    };
    handleVerdictChange=(event)=>{
        this.setState({verdict:event.target.value});
    };
    handleCreatorChange=(event)=>{
        this.setState({creator:event.target.value});
    };
    handleYearChange=(event)=>{
        this.setState({year:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
            sno:this.state.sno,
       name:this.state.name,
       ratings:this.state.ratings,
       verdict:this.state.verdict,
       creator:this.state.creator,
       year:this.state.year
        };
        axios.Update(`http://localhost:8080/updateRev/${sno}`,data)
        
        
    };
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} id="inputdata">
                <label>sno</label>
                <input
                type="number"
                value={this.state.sno}
                onChange={this.handleSnoChange}
                />
                <label>name</label>
                <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
                />
                <label>ratings</label>
                <input
                type="number"
                value={this.state.ratings}
                onChange={this.handleRatingChange}
                />
                <label>verdict</label>
                <input
                type="text"
                value={this.state.verdict}
                onChange={this.handleVerdictChange}
                />
                <label>creator</label>
                <input
                type="text"
                value={this.state.creator}
                onChange={this.handleCreatorChange}
                />
                <label>year</label>
                <input
                type="number"
                value={this.state.year}
                onChange={this.handleYearChange}
                />
                <button type="btn btn-primary col-md-12">UPDATE</button>
                </form>
        )
    }
}
export default Update;
