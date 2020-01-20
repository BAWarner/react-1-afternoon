import React from 'react';

class FilterObject extends React.Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{"char_id":1,"name":"Walter White","birthday":"09-07-1958","occupation":["High School Chemistry Teacher","Meth King Pin"],"status":"Presumed dead","nickname":"Heisenberg","appearance":[1,2,3,4,5],"portrayed":"Bryan Cranston"},{"char_id":2,"name":"Jesse Pinkman","occupation":["Meth Dealer"],"status":"Alive","nickname":"Cap n' Cook","appearance":[1,2,3,4,5],"portrayed":"Aaron Paul"},{"char_id":3,"name":"Skyler White","birthday":"08-11-1970","occupation":["House wife","Book Keeper","Car Wash Manager","Taxi Dispatcher"],"status":"Alive","appearance":[1,2,3,4,5],"portrayed":"Anna Gunn"},{"char_id":4,"name":"Walter White Jr.","birthday":"07-08-1993","status":"Alive","nickname":"Flynn","appearance":[1,2,3,4,5],"portrayed":"RJ Mitte"}],
            userInput: '',
            filteredArray: []
        }
        this.filterChange = this.filterChange.bind(this);

    }
    filterChange(e){
        this.setState({
            userInput: e.target.value
        });
    }
    filterContent = () => {
        let filterQuery = this.state.userInput,
            unFiltered = this.state.unFilteredArray,
            filtered =[];

        for(let i = 0; i < unFiltered.length; i++){
            let obj = unFiltered[i];
            for(let key in obj){
                if(filterQuery == key){
                    filtered.push(obj);
                }
            }
        }
        
        this.setState(
            {
                filteredArray: filtered
            }
        );
    }
    render(){
        return(
            <div className='puzzleBox FilterObjectRB'>
                <h4>Filter Object</h4>
                <input onChange={this.filterChange} className='inputLine' type="text" />
                <button onClick={this.filterContent} className='confirmationButton'>Filter</button>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject;