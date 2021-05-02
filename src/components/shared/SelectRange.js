import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


export class SelectRange extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        value: { min: 0, max: 25000 },
      }; 
      
    }
    componentDidUpdate(){
      this.props.filteredPrice(this.state.value);
    }

    render() {
      
      return (
        <InputRange
          
          maxValue={25000}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({value})}

        />
      );
    }
}