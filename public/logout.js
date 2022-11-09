function Logout(props) {
    const ctx = React.useContext(UserContext); 
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');

function logoutAndClearForm() {
    props.setData({data:ctx.data, currentUser:''})
}

return (
    <center>
    <Card
        bgcolor="dark"
        header="-- Logout --"
        status={status}
        body={ctx.currentUser === "" ? (  
            <>
            <p>Create an account or login</p>
            </>
          ):(
            <>
            <button type="submit" className="btn btn-light" onClick={logoutAndClearForm}>Logout of {ctx.currentUser ? ctx.currentUser.email : null}</button>
            </>
          )}
    />
    </center>
    )

}