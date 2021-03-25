import React, { useEffect, useState } from "react"
import "./styles/contact.css"
import axios from "axios"
import Layout from "../components/Layout"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    const contactData = {
      name,
      email,
      phoneNumber,
      message,
    }

    axios
      .post("/api/sendMail", contactData)
      .then(() => {
        console.log("Successfully sent data.")
      })
      .catch(err => {
        if (err) {
          throw err
        }
      })
  }
  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="m-4 text-center">Contact</h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={e => {
                          setName(e.target.value)
                        }}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="email-address">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-address"
                        name="emailAddress"
                        value={email}
                        onChange={e => {
                          setEmail(e.target.value)
                        }}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label for="phone-number">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone-number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={e => {
                          setPhoneNumber(e.target.value)
                        }}
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label for="textarea-1">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={message}
                        onChange={e => {
                          setMessage(e.target.value)
                        }}
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="submitBtn mt-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
