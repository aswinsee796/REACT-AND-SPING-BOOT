import axios from "axios";
import React from "react";
import { Component } from "react";
class Table1 extends Component{
    state={
    data:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/getRev')
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error =>{
            console.log(error);
        });
    }
    deleteData(sno,e){
        axios.delete(`http://127.0.0.1:8080/delete/${sno}`)
        .then(response =>{
            console.log(response);
            const data = this.state.data.filter(item=>item.sno !== sno);
            this.setState({data});
        })
    }
    updateData(sno,e){
        axios.Update(`http://localhost:8080/updateRev/${sno}`)
        .then(response=>{
            console.log(response);
            const data = this.state.data.filter(item => item.sno !==sno);
            this.setState({data});
        })
    }
    render(){
        return(
            // <Link to '/add'>Add</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>name</th>
                        <th>ratings</th>
                        <th>verdict</th>
                        <th>creator</th>
                        <th>year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr key={user.sno}>
                            <td>{user.sno}</td>
                            <td>{user.name}</td>
                            <td>{user.ratings}</td>
                            <td>{user.verdict}</td>
                            <td>{user.creator}</td>
                            <td>{user.year}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e)=>this.deleteData(user.sno,e)}>Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-primary col-md-12" onClick={(e)=> this.updateData(user.sno,e)}>update</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
export default Table1;