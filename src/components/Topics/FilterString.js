import React from  'react';

class FilterString extends React.Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            unfilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            filteredArray: []
        }
        this.filterText = this.filterText.bind(this);
    }
    filterText(e){
        this.setState(
            {
                userInput: e.target.value
            }
        );
    }
    filterStrings = () => {
        let filtered = [];
        let filterQuery = this.state.userInput;
        let unFiltered = this.state.unfilteredArray;

        for(let i = 0; i < unFiltered.length; i++){
            if(filterQuery == unFiltered[i]){
                filtered.push(unFiltered[i]);
            }
        }

        this.setState({
            filteredArray: filtered
        });
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <input onChange={this.filterText} className='inputLine' type='text' />
                <button onClick={this.filterStrings} className='confirmationButton'>Filter</button>
                <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray)}</span>
                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;