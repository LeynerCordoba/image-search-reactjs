import React from 'react';
import './App.css';
import Search from './Components/Search';
import Results from './Components/Results';

class App extends React.Component {

  state ={
    term:'',
    page:1,
    imageDate:[]
  }

  scroll =  _ =>{
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth','start');
  }
  pageNext = _ =>{
    var currentPage = this.state.page;
    this.setState({page:++currentPage},_=>{this.consultarApi(); this.scroll();});    
  }

  pageBefore = _ =>{
    //Read State Page current
    var currentPage = this.state.page;
    if(currentPage > 1)
      this.setState({page:--currentPage},_=>{this.consultarApi(); this.scroll();});
  }

  consultarApi = _=>{
    const url=`https://pixabay.com/api/?key=14314452-32da55c763dac89ea00ffb9d5&q=${this.state.term}&per_page=20&page=${this.state.page}`;
    console.log(url);

    fetch(url)
      .then(response =>response.json())
      .then(result =>this.setState({imageDate: result.hits}));
  }

  filterSearch = term =>this.setState({term:term,page:1},_=>{this.consultarApi();});
  

  render(){  
    return (
      <div className="app container">
       <div className="jumbotron">
         <p className="lead text-center"><strong>Image Search</strong></p>
         <Search message={this.filterSearch} />
       </div>
        <div className="row justify-content-center">
          <Results data={this.state.imageDate} pageNext={this.pageNext} pageBefore={this.pageBefore} />
        </div>
      </div>
    );
  }
}

export default App;
