import React,{ useEffect, useState} from 'react';
import { ipcRenderer} from 'electron';
import {Photonplot} from './Photonplot';



const App = () => {
	// const [data,setData]= useState([]);
	const [crystal_data,setCrystalData] = useState({
		alpha:0,
		lamda:0,
		odd_params:{
			n:1.043,
			h: 1.047
		},
		even_params:{
			n: 1.043,
			h: 1.047
		}
	});

	function handleGraphicClick(){
		console.log(crystal_data);
	}
	function handleChange(e){
		const {name, value} = e.target;
 		if(name.includes(':')){

			let [field, sub_field] = name.split(':');
			console.log({field,sub_field})
			setCrystalData({
				...crystal_data,
				[field]:{
					...crystal_data[field],
					[sub_field]:parseFloat(value)
				}
			});	
			return;
		} else{
			setCrystalData({
				...crystal_data,
				[name]:parseFloat(value)
			});
		}
		
	}
	useEffect(()=>{
 
		ipcRenderer.send('pvc_info:load',);

		// ipcRenderer.send('logs:load');
		// ipcRenderer.on('logs:get',(e,logs)=>{
		// 	console.log(JSON.parse(logs))
		// 	// setData(JSON.parse(logs));
		// })
	},[]);
	return (
		<div className='app'>
 			<div className="container">
				<div className="row">
					<div className="input-field col s6">
						<input id="alpha" 
						 value={crystal_data.alpha}
						 onChange={handleChange}
						type="number" name="alpha"/>	
						<label htmlFor="alpha">Введите угол</label>
					</div>
					<div className="input-field col s6">
						<input id="lamda" name="lamda" type="number"/>	
						<label htmlFor="lamda">Введите длину волны</label>
					</div>
				 	
				</div>		
				<div className="row">
			
					{/* чет */}
					<div className="col s6">
						<div className="card">
							 <div className="card-content">
							 <span className="card-title">Для четных</span>
							
								<input name="odd_params:n" value={crystal_data.odd_params.n} onChange={handleChange} type="number" placeholder="показатель преломления"/>
								<input name="odd_params:h" value={crystal_data.odd_params.h} onChange={handleChange} type="number" placeholder="толщина слоя"/>
							</div>	
						</div>	
					</div>
					{/* нечет */}
					<div className="col s6">
					<div className="card">
						 	<div className="card-content">
							 <span className="card-title">Для нечетных</span>	
								<input name="even_params:n" value={crystal_data.even_params.n}  onChange={handleChange}  type="number" placeholder="показатель преломления"/>
								<input name="even_params:h"  value={crystal_data.even_params.h} onChange={handleChange}   type="number" placeholder="толщина слоя"/>
							</div>	
						</div>	
					</div>
					<button className="col s12 btn blue" onClick={handleGraphicClick}>
						Построить график 
					</button>
				</div>
				 <Photonplot/>

 			</div>
		</div>
	)
}

export default App;
