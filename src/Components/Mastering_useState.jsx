import React, { useState } from 'react';

function MasteringUseState() {
  const [state, setState] = useState({ name: 'Chey', isBanned: false });

  return (
    <div className='p-3'>
      <h1>Name: {state.name}</h1>
      <h1>Banned: {state.isBanned.toString()}</h1>
      <button 
        onClick={() => setState({ ...state, isBanned: !state.isBanned })} 
        className={`${state.isBanned ? "bg-blue-400":"bg-red-400"} px-5 py-2 mt-2 rounded-full`}>
        Change
      </button>
    </div>
  );
}

export default MasteringUseState; 


// import React from 'react'

// function Mastering_useState() {
//   const [state, setState] = React.useState({ name: 'Chey', isBanned: false });
//   return (
//     <div className='p-5'>
//       <h1>Name : {state.name}</h1>
//       <h1>Banned : {state.isBanned.toString()}</h1>
//       <button onClick={()=> setState({...state, isBanned:!state.isBanned})} className={`${state.isBanned?"bg-blue-300":"bg-red-300"} px-3 py-1 rounded-full`}>change</button>
//     </div>
//   )
// }

// export default Mastering_useState