import React, { useContext,useEffect,useState } from "react";
import { Formik,Form } from "formik";
import { Button } from "antd";
import { Input, InputNumber,Field } from "formik-antd";
import MultiStepEditFormContext from "./MultiStepEditFormContext";

     
const Details = () => {

  const { details, setDetails, next } = useContext(MultiStepEditFormContext);
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
	  
		  const response = await fetch(`http://localhost:9000/customers/${id}`);
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
	       console.log(data);   
		   
		} catch (error) {
		  setError(error.message);
		}
	  }; 
	
	  
	  fetchData(); 
	  
	}, ); 

	

  return (
    <Formik
      initialValues={(details)} 
	
      onSubmit={(values) => {
		
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
    //     if (!values.first_name) errors.first_name = "First Name is required";
	// 	if (!values.last_name) errors.last_name = "Last Name is required";
    //     if (!values.phone) errors.phone = "Phone number is required";
    //   //  if (values.phone > 90) errors.phone = "Are you sure you're human?";
    //     if (!values.billing_address) errors.billing_address = "Billing Address is required";
	// 	if (!values.mailing_address) errors.mailing_address = "Mailing Address is required";
    //     if (/^[0-9]+$/.test(values.profession))
    //       errors.profession =
    //         "Profession does not require numbers or special characters";
    //     return errors;
      }}
    >  
      {({ handleSubmit, errors }) => { 
        return (       
          <div className={"details__wrapper"}>  
            <div className={`form__item `}>  
              <label>First Name *</label>  
			  {/* <input type="text" name="first_name" defaultValue={first_name} placeholder="Enter First Name" className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"  /> */}  
              <Input name="first_name"  defaultValue={last_name} value={last_name || ''}/>
			  <p>{first_name}</p>
              {/* <p className={"error__feedback"}>{errors.first_name}</p> */}
            </div>
			<div className={`form__item `}>
              <label>Last Name *</label>    
			  <input type="text" name="last_name" defaultValue={last_name} placeholder="Enter Last Name" className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"  />
{/* 
              <Input name={"last_name"} placeholder="Enter Last Name" /> */}
              {/* <p className={"error__feedback"}>{errors.last_name}</p> */}
            </div>  

            <div className={`form__item `}>
              <label>Phone *</label>     
              {/* <InputNumber name={"phone"} placeholder="Enter Phone Number" min={10} /> */}
			  <input type="text" name="phone" defaultValue={phone} placeholder="Enter Phone Number" className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"  />
              {/* <p className={"error__feedback"}>{errors.phone}</p> */}
            </div>
			<div 
              className={`form__item ${errors.mailing_address && "input__error"}`}
            > 
              <label>Mailing Address *</label>
			  <textarea name="mailing_address" placeholder="Enter mailing address" defaultValue={mailing_address} id="" className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"  required />
		
              {/* <Input name={"mailing_address"} placeholder="Enter mailing address" /> */}
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
              className={`form__item ${errors.billing_address && "input__error"}`}
            >   

              <label>Billing Address *</label>
			  <textarea name="billing_address" placeholder="Enter billing address" defaultValue={billing_address} id="" className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"  required />
   
              <Input className="hide"/>   
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
export default Details;
