import React from 'react';
 
const App = () => {
	return (
		<div className='app'>
 			<div className="container">

				<div className="row">
					<div className="input-field col s6">
						<input id="n" type="number"/>	
						<label htmlFor="n">Введите угол</label>
					</div>
					<div className="input-field col s6">
						<input id="n" type="number"/>	
						<label htmlFor="n">Введите длину волны</label>
					</div>
				 	
				</div>		
				<div className="row">
			
					{/* чет */}
					<div className="col s6">
						<div className="card">
							 <div className="card-content">
							 <span className="card-title">Для четных</span>
							
								<input type="number" placeholder="показатель преломления"/>
								<input type="number" placeholder="ширина слоя"/>
							</div>	
						</div>	
					</div>
					{/* нечет */}
					<div className="col s6">
					<div className="card">
						 	<div className="card-content">
							 <span className="card-title">Для нечетных</span>	
								<input type="number" placeholder="показатель преломления"/>
								<input type="number" placeholder="ширина слоя"/>
							</div>	
						</div>	
					</div>
					<button className="col s12 btn blue">
						Построить график 
					</button>
				</div>
				 

 			</div>
		</div>
	)
}

export default App;
