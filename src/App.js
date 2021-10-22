import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
     if(!localStorage.getItem('username')) return <LoginForm />

 return (
     <ChatEngine 
         height= "100vh"
         projectID= "11e5e718-860d-4f10-a172-949cbed72db6"
         userName= {localStorage.getItem('username')}
         userSecret= {localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     
     />

 );

}

export default App;