import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
// import SignUp from './components/auth/SignUp';
// import SignIn from './components/auth/SignIn';
// import AuthDetails from './components/auth/AuthDetails';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        <Chat />
      </section>


      {/* <SignUp />
      <SignIn />
      <AuthDetails /> */}
    </div>
  );
}

export default App;
