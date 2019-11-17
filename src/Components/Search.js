import React, { Component } from 'react'

class Search extends Component {

    searchRef = React.createRef();

//https://pixabay.com/api/?key=14314452-32da55c763dac89ea00ffb9d5&q=


    //Take value from Input and send from AppComponent
    handlerData= e =>{
       e.preventDefault();
       if(this.searchRef.current.value){
        this.props.message(this.searchRef.current.value);
       }else{
           alert("Please, insert to text from search");
       }
       
    }

    render() {
        return (
          <form onSubmit={this.handlerData}>
              <div className="row">
                  <div className="form-group col-md-8">
                      <input ref={this.searchRef} type="text" className="form-control form-control-lg"
                       placeholder="Search your image. Example: Tennis" />                      
                  </div>
                  <div className="form-group col-md-4">
                  <input type="submit" className="btn btn-lg btn-danger btn-block"
                  value="Search..." />
                  </div>
                  
              </div>
          </form>
                
        );
    }
}

export default Search;