import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/cards-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      consultancies :[],
      searchField:''
    }
   // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users =>this.setState({consultancies:users}));
  }

 /*  handleChange(e){
    this.setState({searchField:e.target.value});
  } */
  
  handleChange = e => {
		this.setState({
			searchField: e.target.value
		});
  }; 
  
  render(){
    const {consultancies, searchField}=this.state;
    const filterConsultancies = consultancies.filter(
      consultancy => consultancy.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h2>GKConsultApp</h2>
      <SearchBox
       placeholder='serach consultancies'
       handleChange ={this.handleChange}/>
      <CardList consultancies={filterConsultancies}/>
      </div>
    );
  }
}
export default App;
