import React, { Component } from 'react';

class Student extends Component {
    state = {  }
    render() { 
        return (  
            <div><img src={this.props.student && this.props.student.img} alt={this.props.student && this.props.student.name} /></div>
        );
    }
}
 
export default Student ;