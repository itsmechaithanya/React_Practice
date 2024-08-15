import React, { useState } from "react";
import Card from "./Components/Card";
import Cards from "./Components/Handling";
import Handling from "./Components/Handling";
import Use_State_basic from "./Components/Use_State_basic";
import Use_state_int from "./Components/Use_state_int";
import Use_state_adv from "./Components/Use_state_adv";
import Mastering_useState from "./Components/Mastering_useState";
import Mastering_useStatetwo from "./Components/Mastering_useStatetwo";
import Mastering_useStatethree_array from "./Components/Mastering_useStatethree_array";
import Mastering_useStatefour_arraytwo from "./Components/Mastering_useStatefour_arraytwo";
import Mastering_useState_last from "./Components/Mastering_useState_last";
import UseState_hooks from "./Components/UseState_hooks";
import UseState_hook_CreatingSomething from "./Components/UseState_hook_CreatingSomething";
import Passing_data_via_props from "./Components/Passing_data_via_props";

function App (){
	const data = [
		{name:'Chaithanya', age:21 , place:'BHEL', img:'https://static.ffx.io/images/$zoom_2.3309%2C$multiply_0.5855%2C$ratio_1%2C$width_1059%2C$x_678%2C$y_162/t_crop_custom/q_86%2Cf_auto/89dcd9ed59d16f7c77f001daa35c38e30b16c8dc',friends:false},
		{name:'Shravya', age:20 , place:'BHEL', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmzeH0jd09pXamfBlGehS_c79EDBwoNrGLw&s',friends:false},
		{name:'Vignesh', age:21 , place:'Miyapur', img:'https://i.pinimg.com/736x/8e/0b/ac/8e0bac139390b0be4d5f3db8dcfee9ad.jpg',friends:false},
		{name:'Harsh', age:21 , place:'Sangareddy', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mXjongwKoEB9fBngM3g7y5g6PPTf2jZ5FQ&s',friends:false},
	]

	const[realdata,setdata] = useState(data)
	const handleFriends = (Cardindex) => {
		setdata((prev)=>{
			return prev.map((item, index)=>{
				if(index === Cardindex){
                    return {...item, friends:!item.friends}
                }
				return item
			})
		})
	}

	return(
	<>
		<div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-3">
			{realdata.map((item,index)=>(
				<Passing_data_via_props handleFriends={handleFriends} index={index} key={index} img={item.img} name={item.name} place={item.place} friends={item.friends}/>
			))}
		</div>
		{/* <UseState_hook_CreatingSomething/> */}
		{/* <UseState_hooks/> */}
		{/* <Mastering_useState_last/> */}
		{/* <Mastering_useStatefour_arraytwo/> */}
		{/* <Mastering_useStatethree_array/> */}
		{/* <Mastering_useStatetwo/> */}
		{/* <Mastering_useState/> */}
		{/* <Use_state_adv/> */}
		{/* <Use_state_int/> */}
		{/* <Use_State_basic/> */}
		{/* <Handling/> */}
		{/* <Card/> */}
		{/* <h1>hey</h1> */} 
	</>
	)
}
export default App