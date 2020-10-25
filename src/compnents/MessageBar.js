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


    useEffect(()=>{
        // setCurrentChat([]);
        var temp=[];
        db.collection('chats').onSnapshot(result=>{
        result.docs.map((doc)=>{
            
           if(doc.data()['sender']===user.uid && doc.data()['reciver']===selectedUserid  || doc.data()['sender']===selectedUserid && doc.data()['reciver']===user.uid){
            temp.push(doc.data())
           }
            
            }
        )
        setCurrentChat(temp);
        
      })},[selectedUserid,user]);
      console.log(currentChat);

      function addMessage(props){
         
        if(messageInput!=''){
        pushToFireBase({
            msg:messageInput,
            sender:user.uid,
            reciver:selectedUserid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        },'chats')
    }
        setmessageInput('');


    }

    

    return (
        <div className="messageBar">

            <div className="chatMessages">
                {
                
                    currentChat.map(chat=>{
                        // console.log(chat);
                        return (
                            
                            <div key={chat.timestamp+chat.msg} className={chat.sender===user.uid?'sendMessage':'reciveMessage'} >
                            <span>{chat.msg}</span>
                            </div>  
                        )
                        
                    })
                    
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
