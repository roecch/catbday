import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [wrong, isWrong] = useState(false);
  
  const navigate = useNavigate();

  const navigateToFnaf= () => {
    // 👇️ navigate to /contacts
    navigate('/Fnaf');
  };

  const navigateToOP= () => {
    // 👇️ navigate to /contacts
    navigate('/OnePiece');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === 'toreadormarch') {
      navigateToFnaf();
    } 
    else if (password === 'human') {
      navigateToOP();
    } 
    else {
        isWrong(true)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Password (all lowercase, no space):<br/>
          <input type="password" value={password} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {wrong ? 
          <div>
          <iframe
            src={`https://www.youtube.com/embed/2naim9F4010?title=0&byline=0&portrait=0&transparent=0&autoplay=1&muted=1&loop=1&autopause=0`}
            title="Embedded youtube" 
            allow="autoplay"
          />
        </div> : null}
    </div>
  );
};

export default PasswordChecker;