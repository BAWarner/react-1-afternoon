import React from 'react';

class Palindrome extends React.Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.potentialPalindrome = this.potentialPalindrome.bind(this);
    }

    potentialPalindrome(e){
        this.setState({
            userInput: e.target.value
        })
    }

    checkPalinedrome = () => {
        let forward = this.state.userInput;
        let backwards = this.state.userInput;
        let isPalindrome = 'false';

        backwards = backwards.split('')
        backwards = backwards.reverse();
        backwards = backwards.join('');
        
        // for(let i = forward.length; i >= 0; i--){
        //     if(forward[i] != undefined){
        //         backwards.push(forward[i]);
        //     }
        // }

        // backwards = JSON.stringify(backwards);
        // forward = JSON.stringify(forward);



        if(backwards === forward){
            isPalindrome = 'true';
        }

        this.setState({
            palindrome: isPalindrome
        })
    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome Component</h4>
                <input onChange={this.potentialPalindrome} className='inputLine' type='text' />
                <button onClick={this.checkPalinedrome} className='confirmationButton'>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        );
    }
}

export default Palindrome;