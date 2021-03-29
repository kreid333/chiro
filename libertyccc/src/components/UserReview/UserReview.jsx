import React from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../pages/styles/testimonials.css"

const UserReview = ({ rating, message, name }) => {
  return (
    <div className="row">
      <div className="col-sm-12 review">
        <span className="quote">“</span>
        <div className="stars d-inline">
          {[...Array(rating)].map(() => (
            <FontAwesomeIcon icon={faStar} color="gold" />
          ))}
        </div>
        <div className="client-review ml-2">
          <p>{message}</p>
          <div className="text-right mr-2">
            <span>~ {name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserReview
