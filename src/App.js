import logo from './logo.svg';
import './App.css';
import './style.css'
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import JokesData from './components/JokesData';
import products from './vschoolProducts';
import Product from './components/Product';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';
import React, { useState } from 'react';
import Conditional from './components/Conditional';
// function App() {  
//     console.log(todoData)
//     const todoComponents=todoData.map((item)=> 
//     <TodoItem work={item}/>

//     )



//     return(
//       <div>
//         {todoComponents}
//       </div>
//     )
//   }

  class App extends React.Component{

    constructor()
    {
        super()
        this.state={
          todos:todoData,
          inputText:"",
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleChanges=this.handleChanges.bind(this)
        this.handleSave = this.handleSave.bind(this);
        
        
    }
    handleChange(id) {
        // console.log("changed",id)
        this.setState((prevState)=>{
          const updatedTodos = prevState.todos.map(todo=>{
            if(todo.id===id){
              todo.completed=!(todo.completed)
            }
            return todo
          })
          localStorage.setItem("todoComponents",JSON.stringify(updatedTodos))
          return ({
            todos:updatedTodos,
          })
      })

      // console.log("ended")
      // alert("I am Workingg!!")
      // this.setState((prev)=>{
      //   return{
      //    count:prev.count+1
      //   }
      //   })
    }

    handleChanges(event)
    {
      this.setState({
        [event.target.name]:event.target.value
      })
    }
    
    handleSave(event)
    {
      event.preventDefault()
      let todo={
        id : this.state.todos.length + 1,
        text : this.state.inputText,
        completed: false
      }


      this.setState((prevState)=>{

        let tempTodos = this.state.todos
        tempTodos.push(todo);
        console.log(tempTodos)
        localStorage.setItem("todoComponents",JSON.stringify(tempTodos))

        return{
          ...prevState,
          todos : tempTodos,
          inputText : ""
        }
      })
    }

   
    

    render()
    {
      
      const todoComponents=this.state.todos.map((item)=> 
      <TodoItem key ={item.id} work={item} handleChange={this.handleChange}/>

    )
    
  
      return(
        <div className='full-box'> 

            <Header/>

            <div className='App-box'>

                  <form>
                  <div className='input-box'>
                  <input className='input-area' type="message" name="inputText" placeholder="Add Activity" value = {this.state.inputText}
                  onChange = {this.handleChanges}
                  />
                  <span></span>
                  </div>

                  <div>
                  <button className='save' onClick={this.handleSave}>Save</button>
                  </div>
                  {/* <button onClick={addActivity}>Add</button> */}
                  </form>

                  <div className='content'>
                  {todoComponents}
                  </div>
            
              
            </div>

            <div>

            </div>

        </div>
      )
    }
    
  }

  // componentDiMount(){
  //   //Get the data i need coorectly to display
  // }
  // componentWillReceiveProps(nextProps)
  // {
  //   //if(nextProps.whatever!==this.props.whatever)
  // }

  // shouldComponentUpdate(nextprops, nextState){
  //   //return true if want it to update;
  //   //return false if not
  // }

  // componenetWillUnmount(){
    
  //   //teardown or clean your code before code component dissapears
  //   //remove the eventListener
  // }








  // let wordDisplay
  // if(this.state.isLoggedIn===true)
  //   wordDisplay="in"
  // else
  //   wordDisplay="out"





    // <Joke
    //   image="https://i.pinimg.com/474x/38/c7/2c/38c72c2ee61ad47f2cd009c122a6b5ca.jpg"
    //   name="img1"
    // />


    // const JokeComponents=JokesData.map((joke)=>{
  //   return (
  //     <Joke key={joke.id} image={joke.image} name={joke.name}/>
  //   )
  // }
  // )











  //   const nums=[1,2,3,4,5,6,7,8];
  // const doubled=nums.map(function(num)
  // {
  //   return num*2;
  // }

  // )

  
  // console.log(doubled)



  //   <div>
  //     <Joke
  //       data={{imgUrl:"https://i.pinimg.com/736x/4a/12/d9/4a12d9ee2229d4ea2be154c41d2a8ec5--anime-life-memes.jpg",name:"anime#memes"}}
  //     />
      
  //     <Joke
  //       data={{imgUrl:"https://i.pinimg.com/736x/4a/12/d9/4a12d9ee2229d4ea2be154c41d2a8ec5--anime-life-memes.jpg",name:"anime#memes"}}
  //     />

  //     <Joke
  //       data={{imgUrl:"https://i.pinimg.com/736x/4a/12/d9/4a12d9ee2229d4ea2be154c41d2a8ec5--anime-life-memes.jpg",name:"anime#memes"}}
  //     />

  //     <Joke
  //       data={{imgUrl:"https://i.pinimg.com/736x/4a/12/d9/4a12d9ee2229d4ea2be154c41d2a8ec5--anime-life-memes.jpg",name:"anime#memes"}}
  //     />
  //     <ContactCard
  //       contact={{name:"Sky",imgUrl:"https://i0.wp.com/www.invajy.com/wp-content/uploads/2019/11/short-quotes-1.jpg?resize=573%2C323&ssl=1" ,phone:"965784123",
  //       email:"sky@gmail.com"}}
  //     />


      
  //   </div>
    




export default App;
