import React,{useContext,useEffect,useState} from 'react'
import AllChatsCard from './AllChatsCard'
import { UserContext } from '../App'
import {db,pushToFireBase} from '../firebase'
import firebase from "firebase/app";



export default function MessageBar(props) {
    var user=useContext(UserContext)[0];
    var selectedUserid=props.selectedUser?props.selectedUser.uid:'';


    const [currentChat,setCurrentChat]=useState([]);
    const [messageInput,setmessageInput]=useState([]);
  


    // useEffect(()=>{
    //     var temp=[];
    //     db.collection('chats')
    //     .orderBy('timestamp','asc').onSnapshot(result=>{
    //     result.docs.map((doc)=>{
    //         // console.log(doc.id);
    //        if((doc.data()['sender']===user.uid && doc.data()['reciver']===selectedUserid ) || (doc.data()['sender']===selectedUserid && doc.data()['reciver']===user.uid)){
    //         var data=doc.data();
    //         data['id']=doc.id;
    //         temp.push(data);
    //        }
            
    //         }
    //     )
            
    //     setCurrentChat(temp);
        
    //   })},[selectedUserid,user]);

    //   console.log(currentChat)
      

    useEffect(()=>{
        var temp=[];
        
        db.collection('chats')
        .orderBy('timestamp','asc')
        .onSnapshot(result=>{
      
        setCurrentChat(
          result.docs.map((doc)=>(
            {data:doc.data(),
            id:doc.id}
          
            ))
        
        
        
        )
    })},[]);
        

    function removeDuplicates(books) { 
      

          
        var jsonObject = books.map(JSON.stringify); 
  
  
  
        var uniqueSet = new Set(jsonObject); 
        var uniqueArray = Array.from(uniqueSet).map(JSON.parse); 
  
       return (uniqueArray); 
    } 
      function addMessage(props){
         
        if(messageInput!==''){
        pushToFireBase({
            msg:messageInput,
            sender:user.uid,
            reciver:selectedUserid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        },'chats')
    }
        setmessageInput('');
        



    }

// var chats=removeDuplicates(currentChat);
var tempCha=currentChat.map(chat=>{
    if((chat.data['sender']===user.uid && chat.data['reciver']===selectedUserid ) || (chat.data['sender']===selectedUserid && chat.data['reciver']===user.uid))
    {
  
    return (
        
        <div key={chat.id} className={chat.data.sender===user.uid?'sendMessage':'reciveMessage'} >
        <span>{chat.data.msg}</span>
        </div>  
    )
  }
  else{
      return(
          <div key={chat.id}></div>
      )
  }
    
});

    return (
        <div className="messageBar">

            <div className="chatMessages">
                {

                    tempCha
                }

              
                {/* <!-- recive message --> */}
                {/* <div className="reciveMessage">
                    <span>I'm Great!</span>

                </div> */}
            </div>
            
                {/* <!-- reciver message --> */}
            <div className="messageInput">
                <i className="fas fa-grin-alt" style={{fontSize: '1.5rem',padding: '0.5rem',paddingLeft: '1rem',}}></i>
                <i className="fas fa-paperclip" style={{fontSize: '1.5rem',padding: '0.5rem',}}></i>
                <input type="text" placeholder="Type a message"  value={messageInput} onChange={(e)=>setmessageInput(e.target.value)}/>
                <i className="far fa-paper-plane" style={{cursor:'pointer',fontSize: '1.5rem',padding: '0.5rem',paddingRight:'1rem',}} onClick={()=>{addMessage(props)}}></i>
            </div>


            
        </div>
    )
}
