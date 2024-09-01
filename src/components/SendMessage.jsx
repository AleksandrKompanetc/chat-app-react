import React from 'react';

const style = {
  form: ``,
  input: ``,
  button: ``,
}

const SendMessage = () => {
  return (
    <form className={style.form}>
      <input className={style.input} type="text" placeholder='Message' />
      <button className={style.button} type='submit'>Send</button>
    </form>
  )
}

export default SendMessage;