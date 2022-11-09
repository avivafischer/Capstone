function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  if (ctx.data != null) {
  return (
    <center>
      <div className="card p-3 mb-2 bg-dark text-white">
        <div className="card-header">-- All Data --</div>
        <div className="card-body">
        <table className="table">
                <thead>
                  <tr>
                    <th>Name</th> 
                    <th>Email</th> 
                    <th>Password</th> 
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {ctx.data.map ((user, index) => {
                    return (
                      <p key={index}>{user.name}</p>
                    ) 
                     })}
                    </td> 

                    <td>
                      {ctx.data.map ((user, index) => {
                    return (
                      <p key={index}>{user.email}</p>
                    ) 
                     })}
                    </td> 

                    <td>
                      {ctx.data.map ((user, index) => {
                    return (
                      <p key={index}>{user.password}</p>
                    ) 
                     })}
                    </td> 

                    <td>
                      {ctx.data.map ((user, index) => {
                    return (
                      <p key={index}>{user.balance}</p>
                    ) 
                     })}
                    </td>
                  </tr>
                </tbody>
              </table> 
        </div>
      </div>         
  </center>
  )}
  else {
    return(
      <div></div>
    )
  }
}
