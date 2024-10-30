import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

function List() {
	const [data, setData] = useState([]);
//	const [ setLoading] = useState(true);
  
	useEffect(() => {
	  axios.get(process.env.X_ZOHO_CATALYST_LISTEN_PORT+'/customers/')
		.then(response => {
		  setData(response.data);
		//  setLoading(false);
		});
	});
     

	
  
	return (
	  <Table className='tableList'>
		<TableHead className='table-thead-list'>
		  <TableRow>  
			<TableCell className='width50'>Unique ID</TableCell>
			<TableCell>First Name</TableCell>
			<TableCell>Last Name</TableCell>
			<TableCell>Phone Number</TableCell>
			<TableCell>Mailing Address</TableCell>
			<TableCell>Billing Address</TableCell>
			<TableCell>What car do you own</TableCell> 
			<TableCell>From When</TableCell>
			<TableCell>Is it on finance</TableCell>
			<TableCell>How much finance</TableCell>
			<TableCell>How much EMI paid per month </TableCell>
			<TableCell>Action</TableCell>
		  </TableRow>  
		</TableHead>
		<TableBody>
		  {data.map(item => (
			<TableRow key={item._id} >  
			<TableCell className='width50'>
				   {item._id.substring(0,7)}###
		    
				</TableCell>
			<TableCell>{item.first_name}</TableCell>
			<TableCell>{item.last_name}</TableCell>
			<TableCell>{item.phone}</TableCell>
			<TableCell>{item.mailing_address}</TableCell>
			<TableCell>{item.billing_address}</TableCell>
			<TableCell>{item.q1}</TableCell>
			  <TableCell>{item.q2}</TableCell> 
			  <TableCell>{item.q3}</TableCell>
			  <TableCell>{item.q4}</TableCell>
			  <TableCell>{item.q5}</TableCell>
			  <TableCell>
			  <a href={'/edit-customer/'+item._id} >Edit</a>
   
			  </TableCell>
			</TableRow>
		  ))}
		</TableBody>
	  </Table>
	);
  }
  
  export default List;