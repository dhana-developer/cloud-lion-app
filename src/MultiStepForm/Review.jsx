import { Button, Col, Row } from "antd";
import React, { useContext, } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {

	const { details, address, prev } = useContext(MultiStepFormContext);
	const handleSubmit = async (e) => {
		console.log(details)
		let first_name = details.first_name;
		let last_name = details.last_name;  
		let phone = details.phone;
		let billing_address = details.billing_address;
		let mailing_address = details.mailing_address;
		let q1 = address.q1;
		let q2 = address.q2;     
		let q3 = address.q3;
		let q4 = address.q4;
		let q5 = address.q5;
		

		e.preventDefault();  
		try {
		  const response = await fetch("http://192.168.2.24:9000"+'/customers/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			 body: JSON.stringify({ first_name, last_name, phone,billing_address,mailing_address,q1,q2,q3,q4,q5 }),
		  });
		  const data = await response.json();
		  console.log(data);
		  alert("New customer is Created.")
		  window.location.reload();
		} catch (err) {   
		  console.error(err);
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
