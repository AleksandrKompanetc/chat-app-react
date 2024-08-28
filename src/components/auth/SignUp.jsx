import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');
  const [error, setError] = useState('');

  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError('Passwords didnt match');
      return
    }
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user);
        setError('');
        setEmail('');
        setPassword('');
        setCopyPassword('');
      }).catch((error) => console.log(error));
  }

  return (
    <div>
      <form onSubmit={register}>
        <h2>Create an account</h2>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Enter your email'
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='Enter your password'
        />
        <input 
          type="password" 
          value={copyPassword} 
          onChange={(e) => setCopyPassword(e.target.value)} 
          placeholder='Enter your password again'
        />
        <button>Create</button>

        {error ? <p style={{color:'red'}}>{error}</p> : ""}

      </form>
    </div>
  )
}

export default SignUp;