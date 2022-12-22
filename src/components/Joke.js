function Joke(props)
{
    return(
        <div className="jokeclass">
            <img className="images" src={props.joke.image}/>
            <h1>{props.joke.name}</h1>
            <hr className="line"/>
        </div>
    )
}
export default Joke