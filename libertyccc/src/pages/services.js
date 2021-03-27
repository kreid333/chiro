import React from "react"
import "./styles/services.css"
import chirocare from "../images/pexels-karolina-grabowska-4506109.jpg"
import corrective from "../images/pexels-karolina-grabowska-4506166.jpg"
import lifestyle from "../images/pexels-pixabay-235922.jpg"
import spinal from "../images/pexels-karolina-grabowska-4506107.jpg"
import Operating from "../components/Operating/Operating"
import Layout from "../components/Layout"

const Services = () => {
  return (
    <Layout title="Services">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="m-4 text-center">Services</h1>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-4 text-center">
              <h2 className="mb-3">Chiropractic Care</h2>
              <img className="imgBubble" src={chirocare} alt="" />
            </div>
            <div className="col-lg-8 my-auto pt-3">
              <p>
                We provide advanced spinal correction utilizing ‘state of the
                art’ chiropractic techniques. Never in the history of
                chiropractic have we been able to provide the level of help and
                expertise that now exists. These newer correction methods are
                even safer, more comfortable and more effective than ever
                before.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-4 text-center">
              <h2 className="mb-3">Corrective Exercises</h2>
              <img className="imgBubble" src={corrective} alt="" />
            </div>
            <div className="col-lg-8 my-auto pt-3">
              <p>
                We teach our patient’s special ‘blueprint’ exercises designed
                just for them to help strengthen and correct their own unique
                problem. These exercises can be performed in the comfort of your
                own home and can improve the effectiveness of your spinal
                correction by as much as 30-40%.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-4 text-center">
              <h2 className="mb-3">Lifestyle Advice</h2>
              <img className="imgBubble" src={lifestyle} alt="" />
            </div>
            <div className="col-lg-8 my-auto pt-3">
              <p>
                We often find it helpful to ‘coach’ our patients on certain
                activities they should avoid or do differently to avoid
                aggravating their particular health challenge. Our goal is to
                help every patient achieve a fulfilling and happy lifestyle full
                of the activities they enjoy most.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-4 text-center">
              <h2 className="mb-3">Spinal & Postural Screenings</h2>
              <img className="imgBubble" src={spinal} alt="" />
            </div>
            <div className="col-lg-8 my-auto pt-3">
              <p>
                Posture and spinal screenings can reveal important health
                information and unlock the door to improved health and
                well-being. We provide screenings at community events, health
                fairs and places of employment. Contact us today to arrange a
                screening at your event or workplace.
              </p>
            </div>
          </div>
          <Operating />
        </div>
      </div>
    </Layout>
  )
}

export default Services
