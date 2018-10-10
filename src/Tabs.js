import React, {Component} from "react"; 
 
class Tab extends Component{

  

constructor (props){
         super()
         this.state={
             selectedNav : "HOME"
         }
     }

     updateNav=(nav)=>{
         this.setState(function(){
             return{
                 selectednavBar: nav
             }
         })
     }
     render(){
         var navBar = ["Home","Product","About Us","Contact Us"];
         return( 

             <div>
                 <ul className="nav1">
                 {navBar.map((nav)=>{
                     return <li 
                     style = {nav ===this.state.selectednavBar ? {color:'red'}:null}
                     key={nav}
                     onClick = {()=>this.updateNav(nav)}>{nav}</li>
                 })}
                 </ul>
             </div>

         )
     }

 }




export default Tab;