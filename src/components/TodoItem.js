import { CiCircleRemove } from 'react-icons/ci';

function TodoItem(props)
{
    const completedStyle={
        fontStyle:"italic",
        color: "#cdcdcd",
        textDecoration: "line-through"

    }
    console.log(JSON.stringify(props))
    return(
        <>
        <div className="to-dodiv">
            <div className="todo-item">
                <div className='item-container'>
                    <input
                        className='item-container-checkbox' 
                        type="checkbox" 
                        checked={props.work.completed}
                        onChange={()=>props.handleChange(props.work.id)}
                    />

                    <p className='item-container-text' style={props.work.completed?completedStyle:null}>{props.work.text}</p>
                    {/* <h2>#</h2> */}
                </div>
            </div>
            <i className="remove-btn"> <CiCircleRemove className='remove-icon' size={"25px"}/> </i>
        </div>
        </>
    )

}

export default TodoItem