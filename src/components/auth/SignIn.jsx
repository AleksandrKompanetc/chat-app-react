import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      setError('');
      setEmail('');
      setPassword('');
    }).catch((error) => {
      console.log(error);
      setError('Sorry, we dont find your account');
    })
  }
  return (
    <div>
      <form>
        <h2>Log In</h2>
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
          placeholder='Enter your email'
        />
        <button onClick={logIn}>Login</button>

        {error ? <p style={{color: 'red'}}>{error}</p> : ''}
      </form>
    </div>
  )
}

export default SignIn;