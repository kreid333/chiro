import React, { useEffect, useState } from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles/testimonials.css"
import Operating from "../components/Operating/Operating"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import StarRating from "../components/StarRating/StarRating"
import Layout from "../components/Layout"

const Testimonials = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Layout>
      <div className="wrapper">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit your review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="name">
                    Name
                  </label>
                  <input type="text" name="name" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="email">
                    Email
                  </label>
                  <input type="text" name="email" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="reviewTitle">
                    Review Title
                  </label>
                  <input type="text" name="reviewTitle" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="rating">
                    Rating
                  </label>
                  <StarRating />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label className="d-block" htmlFor="review">
                    Review
                  </label>
                  <textarea name="review" cols="50" rows="5"></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="m-4 text-center">Testimonials</h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-sm-12">
              {/* <h2>Liberty County Clinic of Chiropractic</h2>
          <p className="">Chiropractor located in Hinesville, GA</p> */}
              <div className="text-center">
                <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                <span className="rating d-block m-2 p-3 mx-auto">5/5</span>
                <br />
                <button className="reviewBtn" onClick={handleShow}>
                  Submit a review
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <span className="quote">“</span>
              <div className="stars d-inline">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
              <div className="client-review ml-2">
                <p>
                  All I can say is, "oh my wow, wow"! A few months ago I was
                  involved in a motor vehicle accident. My neck, back, right arm
                  and hip were injured. I was having problems sleeping, climbing
                  stairs, headaches, and numbness in my arms. I surely thought
                  there was not any hope of recovery. then I met Dr. Peer, what
                  a wonderful man and doctor. After 2 months of visits I sleep
                  through he night; I can climb stairs with no problem;
                  headaches are gone; my arms no longer go numb; and most
                  important i can dance again. So i can say is" oh my wow, wow!"
                </p>
                <p>Thank you</p>
                <div className="text-right mr-2">
                  <span>~ Brandy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <span className="quote">“</span>
              <div className="stars d-inline">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
              <div className="client-review ml-2">
                <p>
                  I came to Dr. Peer's office for lower back pain that I have
                  had for thirty years and a shoulder that always was in pain. I
                  would barely move if I worked out in my garden and couldn't be
                  out there more than two or three hours and then I'd be in bed
                  for three days. Since coming to Dr. Peer I'm happy to report
                  that yesterday I spent 5 hours in my yard and today I'm pain
                  free and taking a walk of a mile or two just for the pleasure
                  of it. I am no longer taking the pain killer Darvocet. My
                  overall health and well-being is so much better
                </p>
                <div className="text-right mr-2">
                  <span>~ Maria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <span className="quote">“</span>
              <div className="stars d-inline">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
              <div className="client-review ml-2">
                <p>
                  After several years of back and forth pain in my lower back
                  and hip I was at my wits end. The pain was unbearable in any
                  position, the pain would never go away.
                </p>
                <p>
                  I had relied on regular doctors, meds, and physical therapy
                  for all of those years to no avail. i had NEVER tried a
                  chiropractor and was rather skeptical about it.
                </p>
                <p>
                  I came to Dr. Peer in MAJOR pain and in lots of tears. I
                  couldn't care for my children the way I needed to. I couldn't
                  even drive without being in tears.
                </p>
                <p>
                  Dr. Peer got me on a regular weekly regime of therapy with
                  him. Now, after six weeks, I'm almost at 100%. I honestly
                  could NOT believe how bad my back was. My hips and whole spine
                  was way off. I am BEYOND AMAZED with the results.
                </p>
                <p>
                  Looking at the X-Rays from beginning til now, made me almost
                  cry. I was so blessed by this place and these people and this
                  Doctor.
                </p>
                <p>
                  LCCC is an awesome blessing to this area. Their spirit and
                  faith based business makes them #1. I would drive an hour to
                  see them if need be.
                </p>
                <p>
                  I am forever grateful to them. I will never be able to repay
                  them for the return of my health, my piece of mind, and
                  overall state of mind. They have forever blessed my heart. My
                  children can now run and play with mommy and that ALONE is a
                  huge blessing.
                </p>
                <p>Thank You! I LOVE Y'ALL</p>
                <div className="text-right mr-2">
                  <span>~ Tina</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-6">
              <h2>Jonathan Robbins</h2>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/j8c8tq_Euvc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-sm-6">
              <h2>Melanie Gibson</h2>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uLKXv5DBVUg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <br />
          <div className="row text-center">
            <div className="col-sm-6">
              <h2>Taurus Williams</h2>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/61CswPIPaI4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-sm-6">
              <h2>Ruth Candler</h2>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/oa_y9ibQm8E"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <Operating />
        </div>
      </div>
    </Layout>
  )
}

export default Testimonials
