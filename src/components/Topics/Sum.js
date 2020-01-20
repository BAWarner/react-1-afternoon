import React from 'react';

class Sum extends React.Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.collectNumber1 = this.collectNumber1.bind(this);
        this.collectNumber2 = this.collectNumber2.bind(this);
    }

    collectNumber1(e){
        this.setState({
            number1: parseInt(e.target.value, 10)
        });
    }
    collectNumber2(e){
        this.setState({
            number2: parseInt(e.target.value, 10)
        });
    }
    sumFunction = () => {
        let num1 = this.state.number1;
        let num2 = this.state.number2;

        this.setState(
            {
                sum: num1 + num2
            }
        );

    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum Component</h4>
                <input onChange={this.collectNumber1} className='inputLine' type='number' />
                <input onChange={this.collectNumber2} className='inputLine' type='number' />
                <button onClick={this.sumFunction} className='confirmationButton'>Sum it up</button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
        );
    }

}

export default Sum;