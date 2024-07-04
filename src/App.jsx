import React from "react";
// import Card from "./Components/Card";

function App (){

	const names = ["Chaithanya","Shravya","rajini"];

	return(
	<div>
		{/* {names.map((elem,index)=>(<div className="w-fit px-3 py-4 m-2 bg-zinc-200 rounded-xl">
			{elem}
		</div>))} */}
		{names.map((elem,index)=>(<div className="w-fit px-3 py-4 m-2 bg-zinc-200 rounded-xl">{elem}</div>))}
		
	</div>
	)
}
export default App