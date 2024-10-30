import React, { useState, useEffect } from 'react';


function Navbar() {
	
	
  
	return (
	<div>
		<div className="row navRow">
			
			<div className="col-md-2 nav-col-2">
				<a href="/list" className='nav-class-list'>List</a>
				<a href="/add-customer" className='nav-class-add'>Add</a>
			</div>
			<div className="col-md-10"></div>
		</div>

	</div>  
	);   
  }
  
  export default Navbar;