function Balance(){  
  const ctx = React.useContext(UserContext); 
  const [status, setStatus]     = React.useState(true);
  const [data, setData]     = React.useState('');

function findAccount() {
  if (ctx.currentUser!=='') { 
    fetch(`/account/balance/${ctx.currentUser.email}`)
    .then(response => response.json())
    .then(data => {
            console.log(data);
            setData('$' + data[0].balance);
    });
    } else {
        setStatus('Login to see account balance');
        setTimeout(() => setStatus(''),3000);
    }
}



return (
  <Card
    bgcolor="primary"
    header="Balance"
    text={data}
    status={status}
    body={
      <>
      <button type="submit" className="btn btn-light" onClick={findAccount}>See Account Balance</button>
      </>
      }
  />
)
    }
