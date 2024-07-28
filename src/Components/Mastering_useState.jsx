import React, { useState } from 'react';

function MasteringUseState() {
  const [state, setState] = useState({ name: 'Chey', isBanned: false });

  return (
    <div className='p-3'>
      <h1>Name: {state.name}</h1>
      <h1>Banned: {state.isBanned.toString()}</h1>
      <button 
        onClick={() => setState({ ...state, isBanned: !state.isBanned })} 
        className='bg-zinc-400 px-5 py-2 mt-2 rounded-full'>
        Change
      </button>
    </div>
  );
}

export default MasteringUseState;