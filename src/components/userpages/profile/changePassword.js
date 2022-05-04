import React, { useEffect, useState } from "react"
import { isValidPass } from "../../usefullFunctions"
import { Formik, Form, ErrorMessage } from "formik"
import Button from "../../button"
import Password from "../../password"

const ChangePassword = () => {
  const initialValues = {
    exPass: "",
    pass1: "",
    pass2: "",
  }

  const handleSubmit = (values) => {
    console.log({ ...values })
  }

  const validate = (values) => {
    const errors = {}
    if (values.exPass === "") {
      errors.exPass = "please enter the old password"
    }

    if (isValidPass(values.exPass) !== "none") {
      errors.exPass = isValidPass(values.exPass)
    }

    if (!values.pass1) {
      errors.pass1 = "password can't be empty"
    }
    if (isValidPass(values.pass1) !== "none") {
      errors.pass1 = isValidPass(values.pass1)
    }
    if (!values.pass2) {
      errors.pass2 = "password can't be empty"
    }
    if (isValidPass(values.pass1) !== "none") {
      errors.pass1 = isValidPass(values.pass1)
    }

    if (values.pass1 !== values.pass2) {
      errors.pass2 = "passwords don't match"
    }
    if (values.pass1 === values.exPass) {
      errors.pass1 = "you can't re-enter the old password"
    }

    return errors
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <div className="grid grid-cols-12 w-full gap-2 p-2 mt-2 shadow-default">
            <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 p-2  lg:pl-6">
              <span className="text-gray-primary w-40">Existing Password</span>

              <div className="flex flex-col col-span-6 flex-1">
                <Password
                  change={(value) =>
                    formik.setFieldValue("exPass", value, true)
                  }
                  blurFunction={formik.handleBlur}
                  val={formik.values.exPass}
                  name="exPass"
                  dis={false}
                  Id="exPass"
                  fClasses="flex-1"
                />

                <span className="h-3 text-xs text-red-600">
                  <ErrorMessage name="exPass" />
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2 p-2  lg:pl-6">
              <span className="text-gray-primary w-40">New Password</span>
              <div className="flex flex-col col-span-6 flex-1">
                <Password
                  Id="pass1"
                  name="pass1"
                  change={(value) => formik.setFieldValue("pass1", value, true)}
                  blurFunction={formik.handleBlur}
                  dis={false}
                  val={formik.values.pass1}
                  fClasses="flex-1"
                />
                <span className="h-3 text-xs text-red-600">
                  <ErrorMessage name="pass1" />
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row col-span-full xl:col-span-9 gap-2  p-2 lg:pl-6">
              <span className="text-gray-primary w-40">Confirm Password</span>
              <div className="flex flex-col col-span-6 flex-1">
                <Password
                  Id="pass2"
                  name="pass2"
                  change={(value) => formik.setFieldValue("pass2", value, true)}
                  blurFunction={formik.handleBlur}
                  val={formik.values.pass2}
                  dis={false}
                  fClasses="flex-1"
                />

                <span className="h-3 text-xs text-red-600">
                  <ErrorMessage name="pass2" className="text-xs" />
                </span>
              </div>
            </div>

            <div className="col-span-full flex gap-2 lg:pl-6">
              <span className="lg:w-40"></span>
              <Button text="Update Passowrd" fClasses="flex-1" type="submit" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword
