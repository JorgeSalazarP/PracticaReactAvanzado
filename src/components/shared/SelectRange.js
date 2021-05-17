import React from 'react';
import InputRange from 'react-input-range';
import { rangePrice } from './rangePrice';
import './SelectRange.css';

export class SelectRange extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        value: { min: rangePrice.min, max: rangePrice.max },
      }; 
      
    }
    componentDidUpdate(){
      this.props.filteredPrice(this.state.value);
    }
    

    render() {
      
      return (

        <InputRange
          maxValue={rangePrice.max}
          minValue={rangePrice.min}
          value={this.state.value}
          onChange={value => this.setState({value})}

        />
      );
    }
}