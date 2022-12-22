function Conditional(props){
    //condition ? statement if true : statement if false
    
    if(props.isLoggedIn===true){
        return(
            <button>Log Out</button>
        )
    }
    else{
        return(
            <button>Log In</button>
        )
    }
}
 
export default Conditional