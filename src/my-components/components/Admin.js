

function UserGreating()
{
    return(
        <>
            <h1>User Greating</h1>
        </>
    )
}

function GestGreating()
{
    return(
        <>
            <h1>Gest Greating</h1>
        </>
    )
}

function Admin(props)
{
    const isLoggedIn=props.isLoggedIn;
    // if(isLoggedIn)
    // {
    //     return<UserGreating/>
    // }
    // return<GestGreating/>
    return isLoggedIn?<UserGreating/>:<GestGreating/>

}

export default Admin