import React from 'react';
import Navbar from './components/Navbar';
// import SignUp from './components/auth/SignUp';
// import SignIn from './components/auth/SignIn';
// import AuthDetails from './components/auth/AuthDetails';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
}

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
      </section>


      {/* <SignUp />
      <SignIn />
      <AuthDetails /> */}
    </div>
  );
}

export default App;
