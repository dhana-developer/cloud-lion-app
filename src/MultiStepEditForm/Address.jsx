import React, { useContext, useState, useEffect } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepEditFormContext from "./MultiStepEditFormContext";
const Details = () => {
  const { address, setAddress, next, prev } = useContext(
    MultiStepEditFormContext
  );  

  let pathArray = window.location.pathname.split("/");
  let id = pathArray[2];
  const { details, setDetails } = useContext(MultiStepEditFormContext);
  const [customerDetails, setCustomerDetails] = useState({});
  // const [first_name, setFirstname] = useState("");
  // const [last_name, setLastname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [billing_address, setBillingaddress] = useState("");
  // const [mailing_address, setMailingaddress] = useState("");
  // const [q1, setQ1] = useState("");
  // const [q2, setQ2] = useState("");
  // const [q3, setQ3] = useState("");
  // const [q4, setQ4] = useState("");
  // const [q5, setQ5] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.X_ZOHO_CATALYST_LISTEN_PORT+`/customers/${id}`);
        const data = await response.json();
        // setFirstname(data.first_name);
        // setLastname(data.last_name);
        // setPhone(data.phone);
        // setMailingaddress(data.mailing_address);
        // setBillingaddress(data.billing_address);
        // setQ1(data.q1);
        // setQ2(data.q2);
        // setQ3(data.q3);
        // setQ4(data.q4);
        // setQ5(data.q5);
        setCustomerDetails((prev) => ({ ...prev, ...data }));
        // console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  });

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
   //   initialValues={address}
      onSubmit={(values) => {  
        setAddress(values);
        next();
      }}
      validate={(values) => {  
        const errors = {};
        return errors;
      }}
    >  
      {({ handleSubmit, errors, values, setFieldValue }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.q1 && "input__error"}`}>
              <label>What car do you own ?</label>
              {/* <Input name={"q1"} value="dsf"/> */}
              <Input
                type="text"
                name="q1"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              />
             
              {/* <p className={"error__feedback"}>{errors.q1}</p> */}
            </div>
            <div className={`form__item ${errors.q2 && "input__error"}`}>
              <label>From When ?</label>
              {/* <Input name={"q2"} /> */}

              <Input
                type="text"
                name="q2"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              />
              {/* <input
                type="text"
                defaultValue={q2}
                name="q2"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              /> */}

              {/* <p className={"error__feedback"}>{errors.q2}</p> */}
            </div>
            <div className={`form__item ${errors.q3 && "input__error"}`}>
              <label>Is it on finance ?</label>
              <Input
                type="text"
                name="q3"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              />
              {/* <input
                type="text"
                defaultValue={q3}
                name="q3"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              /> */}

              {/* <Input name={"q3"} /> */}
              {/* <p className={"error__feedback"}>{errors.q3}</p> */}
            </div>
            <div className={`form__item ${errors.q4 && "input__error"}`}>
              <label>How much finance ?</label>
              <Input
                type="text"
                name="q4"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              />
              {/* <input
                type="text"
                defaultValue={q4}
                name="q4"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              /> */}

              {/* <Input name={"q4"} /> */}
              {/* <p className={"error__feedback"}>{errors.q4}</p> */}
            </div>
            <div className={`form__item ${errors.q5 && "input__error"}`}>
              <label>How much EMI paid per month ? </label>
              <Input
                type="text"
                name="q5"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              />
              {/* <input
                type="text"
                defaultValue={q5}
                name="q5"
                className="ant-input css-dev-only-do-not-override-apn68 ant-input-outlined"
              /> */}

              {/* <Input name={"q5"} /> */}
              {/* <p className={"error__feedback"}>{errors.q5}</p> */}
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
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
