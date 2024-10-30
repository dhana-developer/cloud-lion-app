import React, { useContext, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "antd";
import { Input, InputNumber, Field, TextArea } from "formik-antd";
import MultiStepEditFormContext from "./MultiStepEditFormContext";

const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepEditFormContext);
  const [customerDetails, setCustomerDetails] = useState({});
  const [isMaillingSameAsBilling, setIsMaillingSameAsBilling] = useState(false);
  let pathArray = window.location.pathname.split("/");
  let id = pathArray[2];
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [billing_address, setBillingaddress] = useState("");
  const [mailing_address, setMailingaddress] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.X_ZOHO_CATALYST_LISTEN_PORT+`/customers/${id}`);
        const data = await response.json();
        /*  setFirstname(data.first_name);
        setLastname(data.last_name);
        setPhone(data.phone);
        setMailingaddress(data.mailing_address);
        setBillingaddress(data.billing_address);
        setQ1(data.q1);
        setQ2(data.q2);
        setQ3(data.q3);
        setQ4(data.q4);
        setQ5(data.q5); */
        setCustomerDetails((prev) => ({ ...prev, ...data }));
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

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
      initialValues={customerDetails}
      enableReinitialize
      onSubmit={(values) => {
		
		console.log("values",values); 
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
      {({ handleSubmit, errors, values, setFieldValue }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item `}>
              <label>First Name *</label>
            
              <Input name="first_name" />
           
            </div>
            <div className={`form__item `}>
              <label>Last Name *</label>
              <Input name="last_name" />
              
             
            </div>

            <div className={`form__item `}>
              <label>Phone *</label>
              {/* <InputNumber name={"phone"} placeholder="Enter Phone Number" min={10} /> */}
              <Input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              />
              {/* <p className={"error__feedback"}>{errors.phone}</p> */}
            </div>
            <div
              className={`form__item ${
                errors.mailing_address && "input__error"
              }`}
            >
              <label>Mailing Address *</label>
              <Input
                name="mailing_address"
                placeholder="Enter mailing address"
                defaultValue={mailing_address}
                id=""
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
                required
              />

              {/* <Input name={"mailing_address"} placeholder="Enter mailing address" /> */}
              {/* <p className={"error__feedback"}>{errors.mailing_address}</p> */}
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
              className={`form__item ${
                errors.billing_address && "input__error"
              }`}
            >
              <label>Billing Address *</label>
              <Field
                type="textarea"
                name="billing_address"
                placeholder="Enter billing address"
                id=""
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
                required
				disabled={isMaillingSameAsBilling}
              />

              <Input className="hide" />
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
