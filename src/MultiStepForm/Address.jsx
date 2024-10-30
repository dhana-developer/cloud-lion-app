import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.q1) errors.address1 = "Address is required";
        // if (!values.city) errors.city = "City is required";
		// if (!values.address1) errors.address1 = "Address is required";
        // if (!values.city) errors.city = "City is required";
		// if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.q1 && "input__error"}`}>
              <label>What car do you own ?</label>
              <Input name={"q1"} />
              {/* <p className={"error__feedback"}>{errors.q1}</p> */}
            </div>
			<div className={`form__item ${errors.q2 && "input__error"}`}>
              <label>From When ?</label>
              <Input name={"q2"} />
			  {/* <p className={"error__feedback"}>{errors.q2}</p> */}
            </div>
            <div className={`form__item ${errors.q3 && "input__error"}`}>
              <label>Is it on finance ?</label>
              <Input name={"q3"} />
              {/* <p className={"error__feedback"}>{errors.q3}</p> */}
            </div>
			<div className={`form__item ${errors.q4 && "input__error"}`}>
              <label>How much finance ?</label>
              <Input name={"q4"} />
			  {/* <p className={"error__feedback"}>{errors.q4}</p> */}
            </div>
			<div className={`form__item ${errors.q5 && "input__error"}`}>
              <label>How much EMI paid per month ? </label>
              <Input name={"q5"} />
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
