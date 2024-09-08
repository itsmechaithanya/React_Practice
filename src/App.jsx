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
import Props_and_States_Exercise from "./Components/Props_and_States_Exercise";
import NavBar from "./Components/NavBar";
import Form_handling from "./Components/Form_handling";
import { useForm } from 'react-hook-form'
import Formm from "./Components/Formm";
import Form_Cards from "./Components/Form_Cards";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import User from "./Components/User";

function App (){
	// const data = [
	// 	{name:'Chaithanya', age:21 , place:'BHEL', img:'https://static.ffx.io/images/$zoom_2.3309%2C$multiply_0.5855%2C$ratio_1%2C$width_1059%2C$x_678%2C$y_162/t_crop_custom/q_86%2Cf_auto/89dcd9ed59d16f7c77f001daa35c38e30b16c8dc',friends:false},
	// 	{name:'Shravya', age:20 , place:'BHEL', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmzeH0jd09pXamfBlGehS_c79EDBwoNrGLw&s',friends:false},
	// 	{name:'Vignesh', age:21 , place:'Miyapur', img:'https://i.pinimg.com/736x/8e/0b/ac/8e0bac139390b0be4d5f3db8dcfee9ad.jpg',friends:false},
	// 	{name:'Harsh', age:21 , place:'Sangareddy', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mXjongwKoEB9fBngM3g7y5g6PPTf2jZ5FQ&s',friends:false},
	// ]

	// const[realdata,setdata] = useState(data)

	// const handleFriends = (Cardindex) => {
	// 	setdata((prev)=>{
	// 		return prev.map((item, index)=>{
	// 			if(index === Cardindex){
    //                 return {...item, friends:!item.friends}
    //             }
	// 			return item
	// 		})
	// 	})
	// }

	// const data = [
	// 	{
	// 		img:'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452',
	// 		name:'Starboy',
	// 		artist:'TheWeeknd',
	// 		added:false,
	// 	},
	// 	{
	// 		img:'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
	// 		name:'Paradise',
	// 		artist:'PSD',
	// 		added:false,
	// 	},
	// 	{
	// 		img:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/palm-tree-desert-cd-cover-music-design-template-f6d4327e69f24bfb2febca081f5301b6_screen.jpg?ts=1617999453',
	// 		name:'Palm Tree Desert',
	// 		artist:'Deryaba',
	// 		added:false,
	// 	},
		
	// ]

	// const [SongData,SetSongData] = useState(data)
	// const handleclick = (index) =>{
	// 	SetSongData((prev)=>{
	// 		return prev.map((item,itemindex)=>{
	// 			if(itemindex === index) return{...item, added:!item.added};
	// 			return item;
	// 		})
	// 	})
	// }

	// const [users,Setusers] = useState([]);
	// const handleData = (data) => {
	// 	Setusers([...users,data])
	// }

	// const handleRemove = (id)=>{
	// 	Setusers(()=>users.filter((item,index)=>index!=id))
	// }

	return(
	<>
		<nav className="mt-10 flex justify-center gap-10">
			<Link to="/">Home</Link>
			<Link to="/User">User</Link>
			<Link to="/About">About</Link>
		</nav>

		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/User" element={<User/>}/>
			<Route path="/About" element={<About/>}/>
		</Routes>
		{/* <div className="w-full h-screen bg-rose-200 flex items-center justify-center flex-col">
			<div className=" container mx-auto">	
				<Form_Cards handleRemove={handleRemove} users={users}/>
				<Formm handleData={handleData}/>
			</div>
		</div> */}
		{/* <Form_handling/> */}
		{/* <div className="h-screen w-screen">
			<NavBar data={SongData}/>
			<div className="flex justify-center gap-4 mt-10 flex-wrap">
				{SongData.map((obj,index)=>
				<Props_and_States_Exercise name={obj.name} img={obj.img} artist={obj.artist} added={obj.added} handleclick={handleclick} index={index} key={index}/>
			)}
			</div>
		</div> */}
		{/* <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-3">
			{realdata.map((item,index)=>(
				<Passing_data_via_props handleFriends={handleFriends} index={index} key={index} img={item.img} name={item.name} place={item.place} friends={item.friends}/>
			))}
		</div> */}
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