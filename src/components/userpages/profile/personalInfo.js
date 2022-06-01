import React, { useState, useEffect, useRef } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import Button from "../../button"
import { Input } from "../../input"
import WithTextInput from "../../withTextInput"
import DateField from "../../DateInput"
import ChangeMobile from "./ChangeMobile"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setUserInfo } from "../../../app/features/userInfoSlice"
import { useRequestWithAuth } from "../../customHooks/useRequestWithAuth"
import SmallModal, { smallModal } from "../../userpages/smallModal"
import { SUCCESS } from "../../constants"
import { SuccessFulRegistered } from "../../userpages/sucessRegistered"

const PersonalInfo = () => {
  const [editName, setEditName] = useState(false)
  const userinfo = useSelector((state) => state.userInfo.userInfo)
  const dispatch = useDispatch()
  const [confirmModal, setConnfirmModal] = useState(false)
  const { getRequsetWithAuth, postRequsetWithAuth } = useRequestWithAuth()
  const [simpleText, setSimpleText] = useState("")
  const formRef = useRef("")

  let initialValues = {
    username: userinfo.name === undefined ? "" : userinfo.name,
    email: userinfo.email === undefined ? "" : userinfo.email,
    mobile: userinfo.mobile === undefined ? "" : userinfo.mobile,
    city: userinfo.city === undefined ? "" : userinfo.city,
    dob: userinfo.dob === undefined ? "" : new Date(userinfo.dob),
  }

  useEffect(() => {}, [userinfo])
  //section specific to modal
  const [modalState, setModalState] = useState(false)
  const showPasswordModal = () => {
    setModalState(true)
  }

  const refetchUserInfo = () => {
    getRequsetWithAuth("userinfo").then((res) => {
      console.log(res)
      setSimpleText("Phone Details Update Successful")
      dispatch(setUserInfo(res))
      setConnfirmModal(true)
      formRef.current.setFieldValue("mobile", res.mobile, false)
    })
  }
  //modal specific section ends here

  const refetchUserInfoAndStore = () => {
    getRequsetWithAuth("userinfo").then((res) => {
      console.log(res)
      dispatch(setUserInfo(res))
    })
  }

  console.log(userinfo)
  const validate = (values) => {
    const errors = {}
    if (values.username === "") {
      errors.username = "Full name can't be empty"
    }
    if (isNaN(parseFloat(values.city)) === false) {
      errors.city = "city name can't be a number"
    }
    return errors
  }

  const handleSubmit = (values) => {
    console.log(values)
    let dateOfBrith = ""
    if (values.dob) {
      dateOfBrith = new Date(values.dob).toISOString().split("T")[0]
    }

    postRequsetWithAuth("user/updateprofile", null, null, {
      name: values.username,
      dob: dateOfBrith,
      city: values.city,
      mode: "web",
      username: userinfo.username,
    })
      .then((res) => {
        console.log(res)
        if (res.Status === SUCCESS) {
          setSimpleText("Personal Details Update Successful")
          setConnfirmModal(true)
          refetchUserInfoAndStore()
        }
      })
      .catch((error) => {
        if (error.response.status === 412) {
        }
        console.log(error)
      })
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
        innerRef={formRef}>
        {(formik) => (
          <Form>
            <div className="grid grid-cols-1 w-full p-2 shadow-default mt-2">
              <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
                <div className="flex flex-col">
                  <div>
                    <span className="text-gray-primary">Full Name</span>
                    <span className="text-red-error">
                      <ErrorMessage name="username" />
                    </span>
                  </div>
                  <div className="flex">
                    <Input
                      Id="username"
                      name="username"
                      dis={!editName}
                      val={formik.values.username}
                      change={(values) =>
                        formik.setFieldValue("username", values, true)
                      }
                      blurFunction={formik.handleBlur}
                      iType="text"
                      override={{ maxWidth: "100%", width: "100%" }}
                      holder="Full Name"
                    />
                    <Button
                      text={"Edit"}
                      type="button"
                      click={() => setEditName(!editName)}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-primary">Mobile No</span>
                  <WithTextInput
                    type="tel"
                    disable={true}
                    val={formik.values.mobile}
                    text="Change Mobile No"
                    holder="Mobile No"
                    textClick={() => showPasswordModal()}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-primary">Email ID</span>
                  <Input
                    iType="email"
                    dis={true}
                    val={formik.values.email}
                    override={{ maxWidth: "100%" }}
                    holder="Email"
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="text-gray-primary">
                    Date of Birth (DD-MM-YYYY)
                  </span>
                  <DateField
                    name="dob"
                    Id="dob"
                    currentDate={formik.values.dob}
                    change={(date) => formik.setFieldValue("dob", date, true)}
                    holder="Select Date Of Birth"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-gray-primary">City</span>
                    <span className="text-red-error">
                      <ErrorMessage name="city" />
                    </span>
                  </div>
                  <Input
                    iType="text"
                    Id="city"
                    name="city"
                    val={formik.values.city}
                    blurFunction={formik.handleBlur}
                    change={(values) =>
                      formik.setFieldValue("city", values, true)
                    }
                    override={{ maxWidth: "100%" }}
                    holder="city"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-primary"></span>
                </div>
                <div className="flex flex-col col-span-full">
                  <span>
                    <Button
                      text="Update Now"
                      type="submit"
                      exClasses="max-w-[]"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {modalState ? (
        <ChangeMobile
          closeModal={() => setModalState(false)}
          callback={() => refetchUserInfo()}
          open={modalState}
        />
      ) : null}
      <SmallModal
        open={confirmModal}
        closeModal={() => setConnfirmModal(false)}>
        <SuccessFulRegistered hideBtn={true} message={simpleText} />
      </SmallModal>
    </>
  )
}

export default PersonalInfo
