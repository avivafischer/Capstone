function Withdraw() {
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const [balance, setBalance]   = React.useState('');
  const [disabled, setDisabled]   = React.useState(true);
  
  const validate = (amount) => {
    if (!amount) {
      setStatus('Error: Please enter a value');
      return false;
    }
    if (amount <= 0) {
      setStatus('Error: Please enter a positive value');
      return false;
    }
    if (isNaN(amount)) {
      setStatus('Error: Please enter a numerical value');
      return false;
    }
    if (balance - amount < 0) {
      setStatus('Error: non-sufficient funds');
      return false;
    }
    return true;
}

const withdrawAmount = async (amount) => {
  if (!validate(amount)) return;
  await setBalance(Number(balance) - Number(amount));
  setShow(false);
  setStatus('');
  if (ctx.currentUser !== "" && ctx.currentUser !== undefined) {
  ctx.currentUser.balance = Number(balance) - Number(amount)
  ctx.data.forEach((user) => {
    if (ctx.currentUser.email === user.email) {
      user.balance = Number(balance) - Number(amount)
    }
  })
}
}

React.useEffect(() => {
  if (ctx.currentUser !== "" && ctx.currentUser !== undefined) {
    setBalance(ctx.currentUser.balance);
  }

},[])


const clearForm = () => {
  setWithdraw('');
  setShow(true);
}

React.useEffect(() => {
  if (!withdraw) {
    setDisabled(true);
  } else {
    setDisabled(false);
  }
}, [withdraw]);


return (
  <center>
  <Card
    bgcolor="dark"
    header="-- Withdraw --"
    status={status}
    body={show ? (  
            <>
            <h4>Balance: ${balance}</h4>
            <br/>
            <input type="input" className="form-control" id="withdraw" placeholder="Withdraw $" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} />
            <br/>
            <button type="submit" className="btn btn-light" onClick={() => withdrawAmount(withdraw)} disabled={disabled}>Submit Withdrawal</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Create Another Withdrawal?</button>
            </>
          )}
  />
</center>
)
}