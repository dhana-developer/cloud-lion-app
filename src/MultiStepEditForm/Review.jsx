import { Button, Col, Row } from "antd";
import React, { useContext,useState } from "react";
import MultiStepFormEditContext from "./MultiStepEditFormContext";

const Review = () => {  
	
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	let pathArray = window.location.pathname.split('/');
	let id = pathArray[2];
	const { details, address, prev } = useContext(MultiStepFormEditContext);
	const handleSubmit = async (e) => {
		console.log("fsfdddddddddd",details)
		let first_name = "johnnn";
		let last_name = details.last_name;    
		let phone = details.phone;
		let billing_address = details.billing_address;
		let mailing_address = details.mailing_address;
		let q1 = details.q1; 
		let q2 = details.q2; 
		let q3 = details.q3; 
		let q4 = details.q4; 
		let q5 = details.q5; 

		console.log(first_name); 

		e.preventDefault();  
		try {
			const response = await fetch(`http://localhost:9000/customers/${id}`, {
				method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			 body: JSON.stringify({ first_name, last_name, phone,billing_address,mailing_address,q1,q2,q3,q4,q5 }),
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
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h3>Customer Details</h3>

          <p>First Name: {details.first_name}</p>
		  <p>Last Name: {details.last_name}</p>
          <p>Phone Number: {details.phone}</p>
          <p>Billing Address: {details.billing_address}</p>
		  <p>Mailing Address: {details.mailing_address}</p>
        </Col>
        <Col span={24}>
          <h3>Quote Details</h3>
          <p>What car do you own : {address.q1}</p>
		  <p>From When : {address.q2}</p>  
		  <p>Is it on finance : {address.q3}</p>
		  <p>How much finance : {address.q4}</p>
		  <p>How much EMI paid per month ?  {address.q5}</p>
     
          
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} 
			// onClick={next}
			onClick={handleSubmit}>
              Confirm
            </Button>
          </div>
        </Col>   
      </Row>
    </div>
  );
};
export default Review;
