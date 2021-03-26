import React from "react"
import Layout from "../components/Layout"
import Operating from "../components/Operating/Operating"

const HealthDisclaimer = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="m-4 text-center">Health Disclaimer</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                The information, including but not limited to, text, graphics,
                images and other material contained on this website are for
                informational purposes only. The purpose of this website is to
                promote broad consumer understanding and knowledge of various
                health topics. It is not intended to be a substitute for
                professional medical advice, diagnosis or treatment. Always seek
                the advice of your physician or other qualified health care
                provider with any questions you may have regarding a medical
                condition or treatment and before undertaking a new health care
                regimen, and never disregard professional medical advice or
                delay in seeking it because of something you have read on this
                website.
              </p>
            </div>
          </div>
          <Operating />
        </div>
      </div>
    </Layout>
  )
}

export default HealthDisclaimer
