import React, { useState, useEffect,useContext } from 'react';
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber,Field } from "formik-antd";
import MultiStepFormContext from "../src/MultiStepForm/MultiStepFormContext";

function EditForm() {
	const { details, setDetails, next } = useContext(MultiStepFormContext);
	let pathArray = window.location.pathname.split('/');
	let id = pathArray[2];
	const [first_name, setFirstname] = useState('');
	const [last_name, setLastname] = useState('');
	const [phone, setPhone] = useState('');
	const [billing_address, setBillingaddress] = useState('');
	const [mailing_address, setMailingaddress] = useState('');
	const [q1, setQ1] = useState('');
	const [q2, setQ2] = useState('');
	const [q3, setQ3] = useState('');
	const [q4, setQ4] = useState('');
	const [q5, setQ5] = useState('');

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
		  try {
		
			const response = await fetch(`/customers/${id}`);
			const data = await response.json();  
			setFirstname(data.first_name);
			setLastname(data.last_name);
			setPhone(data.phone);
			setMailingaddress(data.mailing_address);
			setBillingaddress(data.billing_address); 
			setQ1(data.q1);
			setQ2(data.q2);
			setQ3(data.q3);
			setQ4(data.q4);   
			setQ5(data.q5);
		
			 
			console.log(first_name);

		  } catch (error) {
			setError(error.message);
		  }
		}; 
		fetchData(); 
		
	  }, ); 


	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
		  const response = await fetch(process.env.X_ZOHO_CATALYST_LISTEN_PORT+`/customers/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ first_name, last_name,phone,mailing_address,billing_address,q1,q2,q3,q4,q5 }),
		  });
		  const data = await response.json();
		  console.log(data);
		  
		  setLoading(false);
		} catch (error) {
		  setError(error.message);
		  setLoading(false);
		}
	  };

	return (


	  <Formik
		initialValues={details}
		onSubmit={(values) => {
		  setDetails(values);
		  next();
		}}
		validate={(values) => {
		//  const errors = {};
		//   if (!values.first_name) errors.first_name = "First Name is required";
		//   if (!values.last_name) errors.last_name = "Last Name is required";
		//   if (!values.phone) errors.phone = "Phone number is required";
		// //  if (values.phone > 90) errors.phone = "Are you sure you're human?";
		//   if (!values.billing_address) errors.billing_address = "Billing Address is required";
		//   if (!values.mailing_address) errors.mailing_address = "Mailing Address is required";
		//   if (/^[0-9]+$/.test(values.profession))
		// 	errors.profession =
		// 	  "Profession does not require numbers or special characters";
		//   return errors;
		}}
	  >   
		{({ handleSubmit, errors }) => {
		  return (
			<div className={"details__wrapper"}>  
			  <div className={`form__item  && "input__error"}`}>
				<label>First Name *</label>
				<Input name={"first_name"} value="fsdf" onChange={(e) => setFirstname(e.target.value)} placeholder="Enter First Name" />    
				{/* <p className={"error__feedback"}>{errors.first_name}</p> */}
			  </div>
			  <div className={`form__item  && "input__error"}`}>
				<label>Last Name *</label>  
				<Input name={"last_name"}  value="dfhdskfj" placeholder="Enter Last Name" />
				{/* <p className={"error__feedback"}>{errors.last_name}</p> */}
			  </div>
  
			  <div className={`form__item  && "input__error"}`}>
				<label>Phone *</label>     
				<InputNumber name={"phone"} value={phone} placeholder="Enter Phone Number" min={10} />
			  
				{/* <p className={"error__feedback"}>{errors.phone}</p> */}
			  </div>
			  <div 
				className={`form__item  && "input__error"}`}
			  >
				<label>Mailing Address *</label>
				<Input name={"mailing_address"} value={mailing_address} placeholder="Enter mailing address" />
				{/* <p className={"error__feedback"}>{errors.mailing_address}</p> */}
				
			   
			  </div>
			  {/* <button onClick={handleDuplicateAddress}>Duplicate Address</button> */}
			  <div className="duplicate">
			  <label className="duplicate_address_label">
				<Field type="checkbox" name="checked" value="One" className="duplicate_address_field"  />
				Use Mailing Address as Billing Address
			  </label>
			  </div>  
			  <div       
				className={`form__item  && "input__error"}`}
			  > 
  
				<label>Billing Address *</label>
				<Input name={"billing_address"} value={billing_address} placeholder="Enter billing address" />   
				{/* <p className={"error__feedback"}>{errors.billing_address}</p> */}
			  </div>
			   
			  <div
				className={"form__item button__items d-flex justify-content-end"}
			  >
				<Button type={"primary"} onClick={handleSubmit}>
				  Next
				</Button>
			  </div>
			</div>
		  );
		}}
	  </Formik>
	); 
  };
  export default EditForm;
  























