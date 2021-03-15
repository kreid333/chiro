import React, { useEffect } from "react";
import Operating from "../../components/Operating/Operating";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="m-4 text-center">About Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            Dr. David L Peer, D.C., received his Doctor of Chiropractic degree
            from Life University and was recognized for his clinical excellence.
            He is certified by the National Board of Chiropractic Examiners and
            is adequately trained in a variety of techniques that allow our
            office to treat patients of all ages. We are injury specialists,
            whether due to an accident or sports related.
          </p>
          <p>
            Dr Peer is certified in the Webster Technique with the
            ICPA(International Chiropractic Pediatric Association)
            www.ICPA4kids.com www.ICPA4kids.org Dr. Peer has received
            specialized training in techniques of Activator, Thompson, Mopal
            Cox-Flexion Distraction, Diversified, Extremities, Meridian Therapy,
            Acupuncture, and a various post graduate studies.
          </p>
          <p>
            The Peer Chiropractic team will respect your time by offering
            prompt, effective care. We are a provider for most insurance
            companies and offer a variety of payment arrangements. Same day
            appointments are available. We are a referral practice and consider
            it the highest compliment when you entrust us with the referral of
            your friends and family.
          </p>
          <p>
            Our vision is to improve the health and well-being of our patients
            returning them to their daily activities, as soon as possible. We
            look forward to making Hinesville our new home.
          </p>
          <p className="mb-0">
            Dr. Peer and his staff wish you the best and hope you consider our
            clinic for all your health care needs. We are confident you and your
            family will enjoy your visit to our office.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="m-4 text-center">
            Professional, Business, and Civic Organizations
          </h1>
          <ul>
            <li>United Way Board of Directors</li>
            <li>Kirk Healing Center for the Homeless Board of Directors</li>
            <li>Member of Hinesville, GA Rotary</li>
          </ul>
        </div>
      </div>
      <Operating />
    </div>
  );
};

export default About;
