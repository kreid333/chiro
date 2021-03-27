import React, { useEffect } from "react"
import Operating from "../components/Operating/Operating"
import Layout from "../components/Layout"

const FAQ = () => {
  return (
    <Layout title="FAQ">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="m-4 text-center">FAQ</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h3>Is Chiropractic effective?</h3>
              <p>Yes. Chiropractic care is safe and effective. </p>
              <p>
                Scientific evidence proving that chiropractic care works is
                overwhelming. Over the past 20 years, many controlled and
                independent research studies have shown again and again that
                chiropractic care is safe and effective for treating low back
                pain, neck pain, headaches and other conditions relating to the
                spine.
              </p>
              <p>
                Based on these scientific studies, the consensus is that
                chiropractic care is the treatment of choice for most spinal
                problems. The extent to which a person can benefit from care
                varies depending on their problem and how long it has existed.
              </p>
              <h3>Do many people see chiropractors?</h3>
              <p>
                The non-surgical, drug-free healing nature of chiropractic
                provides benefit to the health of millions of other people
                worldwide each year. Most chiropractic patients experience real
                relief and improved general well being, and continue to make
                regular visits a part of their healthy lifestyle choice.
              </p>
              <h3>Why should I see a Chiropractor?</h3>
              <p>
                From professional athletes to homemakers, engineers to
                electricians, young people to seniors, chiropractic care has
                been the answer to optimum health. Many people see a
                chiropractor for back, neck or other joint problems. Still
                others find that regular visits to their chiropractor keep them
                in peak condition.
              </p>
              <p>
                Regularly a dentist checks our teeth, an optometrist checks our
                eyes and a doctor checks our blood pressure and heart. Yet, we
                take the spine – a crucial component of our body – for granted.
                Call us today because regular checkups of your spine can help
                you maintain better health.
              </p>
              <h3>What is a chiropractic adjustment? Is it safe?</h3>
              <p>
                An adjustment is the main method of treatment used by your
                chiropractor. It is a specialized, controlled and safe pressure
                applied to your spine to restore the proper motion and position
                of your vertebrae. It is a precise procedure that your highly
                skilled chiropractor has learned and perfected over years of
                training at a Chiropractic College and in clinical practice.
              </p>
              <p>
                Every health procedure, from taking aspirin to giving blood,
                involves a level of risk. Chiropractic adjustments are among the
                safest of all health care interventions because they are
                non-surgical, drug-free and present an extremely low risk. And
                they work!
              </p>
              <h3>What can I expect from my visit to a chiropractor?</h3>
              <p>
                As a licensed practitioner, it is the duty of your chiropractor
                to do the following:
              </p>
              <ul>
                <li>
                  A thorough review of your specific problem is conducted,
                  including relevant past history and overall health.
                </li>
                <li>
                  You will be asked to perform physical tests and movements to
                  help identify the problem.
                </li>
                <li>
                  In certain situations, an X-ray may be used to confirm the
                  history and examination findings and to investigate for the
                  presence of any underlying bone conditions or pathological
                  developments.
                </li>
                <li>
                  A diagnosis is made, with treatment options for its resolution
                  outlined. If it is, a plan of treatment is communicated. If it
                  is not a chiropractic problem, an appropriate referral is
                  arranged.
                </li>
                <li>
                  A prognosis is made, taking into account your general health
                  habits, occupation, stress and activity levels.
                </li>
                <li>
                  Your response to treatment is monitored by your chiropractor,
                  who looks for an improvement to your specific condition, as
                  well as for changes in your overall health.
                </li>
              </ul>
              <p>
                Two of the basic components of chiropractic care are wellness
                and prevention. Utilization of exercises, along with nutrition
                and lifestyle modifications may also be suggested to improve
                your overall well-being and promote active, patient-centered
                care.
              </p>
              <h3>What results can I expect from treatment?</h3>
              <p>
                That depends on your condition. The length of time you have had
                the problem, your age and the degree of your disability all
                affect the length of your treatment.
              </p>
              <p>
                Your Doctor of Chiropractic should be able to give you an
                estimate of the extent of relief you should receive from the
                recommended treatment and how long you can expect it to last.
              </p>
              <p>
                One of the main reasons people choose chiropractic is that they
                often get quick results. Individual cases vary and chronic
                conditions obviously need more treatment. However, Workers’
                Compensation Board studies show that people with low back pain
                return to work much faster with chiropractic care.
              </p>
              <h3>How long do Doctors of Chiropractic go to school?</h3>
              <p>
                Today’s graduating Doctors of Chiropractic have studied and
                trained in a post-secondary college or university for at least
                seven years. Just like medical or dental students, they must
                first complete undergraduate study before applying for admission
                to a chiropractic college.
              </p>
              <p>
                Becoming a chiropractor is a demanding and highly rewarding path
                that includes a minimum of 4,500 hours of intense academic study
                including classroom learning, clinical science and internship
                training. During the course of their training, he/she will have
                studied the following three areas:
              </p>
              <ul>
                <li>
                  Basic sciences, including anatomy, physiology, pathology (the
                  study of diseases), biochemistry, clinical sciences, X-ray
                  interpretation and differential diagnosis.
                </li>
                <li>
                  Training in the philosophy and practice of chiropractic.
                </li>
                <li>Clinical internship with emphasis on hands-on practice.</li>
              </ul>
              <p>
                Your chiropractor is a primary contact provider just like your
                family physician, optometrist or dentist. You do not need a
                referral from your medical doctor to see a chiropractor.
              </p>
            </div>
          </div>
          <Operating />
        </div>
      </div>
    </Layout>
  )
}

export default FAQ
