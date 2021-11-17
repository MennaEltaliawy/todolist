import React from "react";
import { Component } from "react";
import Additem from "../additems/additem";
import "./todolist.css" ;
import Listitems from "../additems/listitems";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)


export default class Todolist extends Component {
    constructor(props){
        super(props);

    }
    state = {
       Items :[] ,
       currrentItem : {
           item :'' ,
           key :''
       }
    }
        
    handleinput = (e) => {
             this.setState
         (
            {currrentItem : {
            item : e.target.value ,
            key : Date.now() }
            }) ;
     
    };


    handlesubmit = (e) => {
        e.preventDefault(); //to prevent refresh of Page 
        const newitem = this.state.currrentItem ;
        console.log (newitem);
        if (newitem !== ""){
            const newItems = [...this.state.Items , newitem];
            this.setState( {Items : newItems})
        }
        
    };
       

    deleteItem =(key) => {
        const filteredItems = this.state.Items.filter (item =>
            item.key!== key );
            this.setState({ Items  : filteredItems})
        
    }



        render () {
            return (
        
        <div className = "form" >
        <form onSubmit ={this.handlesubmit}>
    <input       id="text"    
                type= "text"
                 value ={this.state.currrentItem.item}
                onChange={this.handleinput}
                placeholder= "ToDo....."/>
        <button type="submit" >Add</button>
        </form>
      
            
            <Listitems Items={this.state.Items} deleteItem={this.deleteItem} />   
        </div>
   
    
            )  }
}