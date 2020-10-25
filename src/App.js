
import './App.css';
import LeftNav from './compnents/LeftNav';
import RightNav from './compnents/RightNav';
import AllChats from './compnents/AllChats';
import MessageBar from './compnents/MessageBar';
import React,{ useState,useEffect } from 'react';
import {auth,provider,overwriteToFireBase,db,signOutGoogle} from '../src/firebase'
import firebase from "firebase/app";

export const UserContext =React.createContext();
const testUser=   {
  uid:'JVBBbvlceTVpasCdTRG285NmsyF3',
  email:'test@gmail',
  displayName:'test name',
  photoURL:'https://lh3.googleusercontent.com/a-/AOh14GiaXf3DrKKKqY6RI5fx2OIoMDaI9sNZsjttac8uucI=s96-c',
}

function App() {

  // States
const [user,setuser]=useState();
const [activeUsers,setactiveUsers]=useState([]);
const [selectedUser,setselectedUser]=useState();

// End States

// Functions

function signInWithGoogle() {
  auth.signInWithPopup(provider).then((result) => {
    var tempuser={
      uid:result.user.uid,
      email:result.user.email,
      displayName:result.user.displayName,
      photoURL:result.user.photoURL
    }
    
    overwriteToFireBase(tempuser,'activeUsers',tempuser.uid);
    setuser(tempuser)
  }
    );
};


useEffect(
  ()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        var tempuser={
          uid:authUser.uid,
          email:authUser.email,
          displayName:authUser.displayName,
          photoURL:authUser.photoURL
        }
    setuser(tempuser);
    setselectedUser(tempuser);
      }
      else{
        setuser(null);

        setselectedUser(null);
      }
    })
  },[]
)
// console.log(user);




  
  

// End Functions


// Use Effect


useEffect(()=>{
  var temp=[];
  setactiveUsers([]);
  db.collection('activeUsers').onSnapshot(result=>{
  result.docs.map((doc)=>{temp.push(doc.data())}
  )
  setactiveUsers(temp);
  
})},[]);

// End Use Effect
  return (

  <>
  {

user?
// logged in
<UserContext.Provider  value={[user,activeUsers]}>
<div className="container">
 <LeftNav signOutGoogle={signOutGoogle}></LeftNav>
 <RightNav selectedUser={selectedUser}></RightNav>
 <AllChats setselectedUser={setselectedUser}></AllChats>
 <MessageBar selectedUser={selectedUser}></MessageBar>
</div>
</UserContext.Provider>:

// logged out
<button onClick={signInWithGoogle} style={{position:'absolute',top:'50%',left:'50%',backgroundColor:'#ccc',border:'none',padding:'1rem',transform: 'translate(-50%, -50%)'}}>Sign in with google</button>


  }



    </>
  );
}

export default App;
