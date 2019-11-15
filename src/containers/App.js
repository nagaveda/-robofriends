 import React ,{Component} from 'react'
 import CardList from '../components/CardList'
 import Scroll from '../components/Scroll'
//  import {robots} from './robots'
import Particles from 'react-particles-js';

 import SearchBox from '../components/SearchBox'
 import './App.css'
 import ErrorBoundry from '../components/ErrorBoundry'

export default class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:'',

        }
    }
    componentDidMount(){
        console.log("mounted..");
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
    }
    

     onSearchChange=(event)=>{
         
        this.setState({searchfield:event.target.value});
        
        
        
        
    }
    render(){
        const {robots, searchfield}=this.state;
        const updatedRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
         if(!robots.length){
             return <h1>Loading...</h1>
         }
         else{
            return(
                <div className='tc' >
                <Particles className='particles'/>
                <h1 className='f1'>My Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  
                   <CardList robots={updatedRobots}/>  
                   
                </Scroll>
                
                </div>
            );
        }
        
    }
    
} 
