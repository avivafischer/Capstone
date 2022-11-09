function Login(props){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext); 

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

async function handleCreate(){
  console.log(email,password);
  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password')) return;

  const response = await fetch(`/account/login/${email}/${password}`);
  let data = await response.json();

  props.setData({data:ctx.data,currentUser:data[0]});
  setShow(false);
}    

function clearForm(){
  setEmail('');
  setPassword('');
  setShow(true);
}

React.useEffect(() => {
  if (!email || !password) {
    setDisabled(true);
  } else {
    setDisabled(false);
  }
});

return (
  <center>
  <Card
    bgcolor="dark"
    header="-- Login --"
    status={status}
    body={show ? (  
            <>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled}>Login</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
  />
</center>
)
}