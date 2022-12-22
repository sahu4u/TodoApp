function Header()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    return (
        // <i href></i>
        <div className="navbar">

            <div className="parent"> 
             
                <div className="note">
                    Get your Sticky Notes done here!!
                </div>

                <div>  
                    <div className="yourthings">Your</div>
                    <div className="yourthings">Things</div>
                </div>

            </div>

            {/* <div className="date">{month} {date}, {year}</div> */}
            {/* <hr className="main-line"/> */}
        </div>
    )
}

export default Header;