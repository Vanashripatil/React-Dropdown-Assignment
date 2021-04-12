import React, { Component } from 'react'
import './Dropdown.css'

class Dropdown extends Component {
    state = {
        value : 'Pune',
        options : ['Pune', 'Mumbai', 'Goa']
    }

    onChange = e =>{
        this.setState({value : e.target.value})
    }

    onSubmit = e =>{
        e.preventDefault();
        console.log(this.state.value);
    }


    render() {

        const {value, options} = this.state;

        return (
            <div>
               <form onSubmit={this.onSubmit}>
                   <h1>Current choice : {value}</h1>
                   <label><span>Pick An City : </span></label>
                        <select id='options' value={value} onChange={this.onChange} className='dropdown-container'>
                           {options.map((val, index) => {
                              return (<option key={index} value={val}>{val}</option>)
                           })}
                        </select>
                        <button type='submit' className="btn">Submit</button>
               </form>
            </div>
        )
    }
}

export default Dropdown;
