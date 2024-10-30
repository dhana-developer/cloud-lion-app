import React, { useContext,useState } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber,Field } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";


const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);
  const { billingAddress, setBillingAddress } = React.useRef({});
  const { mailingAddress, setMailingAddress} = React.useRef({});
  const { sameAsBilling, setSameAsBilling } = useState(false);  
  const [customerDetails, setCustomerDetails] = useState({});
  const [isMaillingSameAsBilling, setIsMaillingSameAsBilling] = useState(false);

  // const handleSameAsBillingChange = (e) => {
  //   setSameAsBilling(e.target.checked);
  //   if (e.target.checked) {
  //     mailingAddress.current.value = billingAddress.current.value;
  //   } else {
  //     mailingAddress.current.value = '';
  //   }
  // };

  // const handleBillingAddressChange = (e) => {
  //   billingAddress.current.value = e.target.value;
  //   if (sameAsBilling) {
  //     mailingAddress.current.value = e.target.value;
  //   }
  // };

//   const [customer, setCustomer] = useState({
//     email: '',
//     first_name: '',
//     last_name: '',
//     phone: '',
//     mailing_address: '',
//     billing_address: '',
//   });

//   const handleDuplicateAddress = () => {
//     setCustomer((prevCustomer) => ({
//       ...prevCustomer,
//       billing_address: prevCustomer.mailing_address,
//     }));
//   };

const onChangeCheckbox = (e, values, setFieldValue) => {
  const target = e.target;
  const isChecked = target.checked;
  let newVal = "";
  if (isChecked) {
    newVal = values.mailing_address;
  setIsMaillingSameAsBilling(true)
  } else setIsMaillingSameAsBilling(false)
  setFieldValue("billing_address", newVal);
};

const onFormvalueChange = (e) => {
  const target = e.target;
  const name = target.getAttribute("name");
  const value = target.value;
  const formVal = { [name]: value };
  setCustomerDetails((prev) => ({ ...prev, ...formVal }));
};

  return (
    <Formik
      initialValues={details}
      enableReinitialize
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.first_name) errors.first_name = "First Name is required";
		if (!values.last_name) errors.last_name = "Last Name is required";
        if (!values.phone) errors.phone = "Phone number is required";
      //  if (values.phone > 90) errors.phone = "Are you sure you're human?";
        if (!values.billing_address) errors.billing_address = "Billing Address is required";
		if (!values.mailing_address) errors.mailing_address = "Mailing Address is required";
        if (/^[0-9]+$/.test(values.profession))
          errors.profession =
            "Profession does not require numbers or special characters";
        return errors;
      }}
    >
        {({ handleSubmit, errors, values, setFieldValue }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.first_name && "input__error"}`}>
              <label>First Name *</label>
              <Input name={"first_name"} placeholder="Enter First Name" />
              <p className={"error__feedback"}>{errors.first_name}</p>
            </div>
			<div className={`form__item ${errors.last_name && "input__error"}`}>
              <label>Last Name *</label>
              <Input name={"last_name"} placeholder="Enter Last Name" />
              <p className={"error__feedback"}>{errors.last_name}</p>
            </div>

            <div className={`form__item ${errors.phone && "input__error"}`}>
              <label>Phone *</label>     
              <InputNumber name={"phone"} placeholder="Enter Phone Number" min={10} />
			
              <p className={"error__feedback"}>{errors.phone}</p>
            </div>
			<div 
              className={`form__item ${errors.mailing_address && "input__error"}`}
            >
              <label>Mailing Address *</label>
              <Input name={"mailing_address"} placeholder="Enter mailing address" />
              <p className={"error__feedback"}>{errors.mailing_address}</p>
			  
			 
            </div>
			{/* <button onClick={handleDuplicateAddress}>Duplicate Address</button> */}
			<div className="duplicate">
			<label className="duplicate_address_label">
      <Field
                  type="checkbox"
                  name="checked"
                  value="One"
                  className="duplicate_address_field"
                  onClick={(e) => onChangeCheckbox(e, values, setFieldValue)}
                />
              Use Mailing Address as Billing Address
            </label>
			</div>  
			<div        
              className={`form__item ${errors.billing_address && "input__error"}`}
            > 
 
              <label>Billing Address *</label>
              <Input name={"billing_address"} placeholder="Enter billing address" 			disabled={isMaillingSameAsBilling}  />   
              <p className={"error__feedback"}>{errors.billing_address}</p>
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
