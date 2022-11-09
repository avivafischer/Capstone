function Spa() {
  const [data, setData] = React.useState([]);

  async function getData() {
    try{
    const response = await fetch('http://localhost:3000/account/all');
    let data = await response.json();
    console.log(data);
    setData({data:data,currentUser:''})}
    catch(error){
      console.log(error);
    }
  }
  React.useEffect(() => {
      getData();
  },[]);

  return (
    <HashRouter>
      <UserContext.Provider value={data}>
        <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" render={(props) => <Login {...props} setData={setData}/>} />
          <Route path="/logout/" render={(props) => <Logout {...props} setData={setData}/>} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Spa/>);

// {users:[{name:'aviva',email:'aviva@badbank.org',password:'qwertyqwerty',balance:200}],currentUser: {name:'aviva',email:'aviva@badbank.org',password:'qwertyqwerty',balance:200}}
