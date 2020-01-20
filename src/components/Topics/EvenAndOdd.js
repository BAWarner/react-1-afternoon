import React from 'react';

class EvenAndOdd extends React.Component{
    constructor(){
        super();
        this.state = {
            evensArray: [],
            oddsArray: [],
            userInput: '',
        }
        this.startProblem = this.startProblem.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }
    startProblem(e){
        this.setState({
            userInput: e.target.value
        });
    }
    solveProblem(){
        let problemsArray = this.state.userInput.split(','),
            evens = [],
            odds = [];
        for(let i = 0; i < problemsArray.length; i++){
            if(problemsArray[i] != false){
                if(problemsArray[i] % 2 === 0){
                    evens.push(parseInt(problemsArray[i], 10))
                }else{
                    odds.push(parseInt(problemsArray[i], 10))
                }
            }
        }

        this.setState(
            {
                evensArray: evens,
                oddsArray: odds
            }
        );

    }
    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input onChange={this.startProblem} className='inputLine' type='text' />
                <button onClick={this.solveProblem} className='confirmationButton'>Sort</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evensArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddsArray)}</span>
            </div>
        );
    }
}


export default EvenAndOdd;