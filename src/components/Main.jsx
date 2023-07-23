import React from "react";
import banner_mid from "../assets/banner_mid.png";
import watch_party from "../assets/watch_party.gif";
import details_img from "../assets/details_img.jpg";
import demo_profile from "../assets/dev_gif.png";
import googledev from "../assets/googledev.jpg";
import Bizarre_Coders from "../assets/Bizarre_Coders.jpg";
import GDG_Jalandhar from "../assets/gdgjalandhar.jpg";
import ptulogo from "../assets/classic-logo.png";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import ImageComponent from "./ImageComponent";

import simarpreet_pic from "../assets/simarpreet_pic.png";
import veer_pic from "../assets/veer_pic.jpg";
import kamal_pic from "../assets/kamal_pic.png";
import agrim_pic from "../assets/agrim_pic.jpg";
import aryan_pic from "../assets/aryan_pic.png";
import mehak_pic from "../assets/mehak_pic.jpg";
import amanpreet_pic from "../assets/amanpreet_pic.jpg";
import lovejeet_pic from "../assets/lovejeet_pic.png";
import surbhi_pic from "../assets/surbhi_pic.jpg";
import suraj_pic from "../assets/suraj_pic.jpg";
import simar_pic from "../assets/simar_pic.jpg";
import gurkirat_pic from "../assets/gurkirat_pic.jpeg";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  const techs = [
    {
      name: "Android",
      link: "https://developer.android.com/",
      logo: "https://io.google/2022/app/images/android-logo.svg",
    },
    {
      name: "Chrome OS",
      link: "https://chromeos.dev/en",
      logo: "https://io.google/2022/app/images/chrome-logo.svg",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      logo: "https://io.google/2022/app/images/firebase-logo.svg",
    },
    {
      name: "Flutter",
      link: "https://flutter.dev/",
      logo: "https://io.google/2022/app/images/flutter-logo.svg",
    },
    {
      name: "Google Cloud",
      link: "https://cloud.google.com/",
      logo: "https://io.google/2022/app/images/googlecloud-logo.svg",
    },
    {
      name: "TensorFlow",
      link: "https://www.tensorflow.org/",
      logo: "https://io.google/2022/app/images/machinelearning-logo.svg",
    },
    {
      name: "Web",
      link: "https://developers.google.com/web",
      logo: "https://io.google/2022/app/images/web-logo.svg",
    },
  ];
  return (
    <>
      <ImageComponent />
      <div className="main-content d-flex flex-wrap">
        <div className="info">
          <h1 className="font-weight-lighter header">
            Most Awaited <span id="tech-event">Tech-Event</span> For{" "}
            <span id="developers">Developers</span>
          </h1>

          <div>
            <h6>
              <i className="fa fa-calendar"></i> Date :{" "}
              <span id="data">August 12 , 2023</span>
            </h6>
            <h6>
              <i className="fa fa-clock"></i> Time :{" "}
              <span id="data">09:00 AM - 4:00 PM IST</span>
            </h6>
            <h6 id="location">
              <i className="fa fa-map-marker"></i> Location:{" "}
              <span id="data">
                I.K. Gujral Punjab Technical University -9F35+9F9, Kapurthala
                Highway, VPO - Ibban, Distt, Kapurthala, Punjab 144603
              </span>
            </h6>
            <p id="location">
              Google I/O Extended is the community led counterpart to Google
              I/O, our annual Google led conference where the world hears about
              Google's latest developer solutions, products, and technology.
            </p>

            <button type="button" disabled id="register">
              COMING SOON...
            </button>
          </div>
        </div>

        <img
          src={watch_party}
          width="580px"
          height="350px"
          className="watch_party"
          alt=""
        />
      </div>

      <div className="details d-flex">
        <img src={details_img} className="detailsImg" width="550px" alt="" />

        <section className="detailsSec">
          <h2>What is Google I/O Extended Jalandhar ?</h2>
          <p>
            Google I/O Extended Jalandhar, a full day event, where you find
            updates of Google's Products. The magic of I/O doesn&apos;t end
            after the main event. Local developers come together for I/O
            Extended events to discuss the latest new technologies, summarize
            content, hosting Q&As, and meet other technology enthusiasts. This
            will be a physical event, promising to each of our attendee an
            experience, unlike anything they've ever seen.
          </p>
        </section>
      </div>

      <div className="tech">
        <h1>Technologies to be focused</h1>
        <p>
          At sessions that span from the technical to the visionary, let&apos;s
          celebrate and discover what the technologies can enable: how product
          innovation, open source, and ML and AI can propel enterprises forward
          and solve the big problems that impact all of us.
        </p>

        <div className="icons d-flex">
          {techs?.map((result, index) => (
            <div className="boxes" key={index}>
              <a href={result.link} target="_blank">
                {" "}
                <img
                  src={result.logo}
                  title={result.name}
                  alt={result.name}
                />{" "}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <hr /> */}

      {/* Schedule Section */}

      {/* <div className="schedule-section" id="schedule">
        <h1 className="schedule-title">Schedule</h1>
        <section>
          <div className="container py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Registration</h3>
                    <p className="mb-0">
                      Get here on time, it's first come first serve. Be late,
                      get turned away.
                    </p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 1</h3>
                    <p className="mb-0">Welcome Keynote</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 2</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 3</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 4</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card1">
                  <div className="card-body p-4">
                    <h3>Speaker 5</h3>
                    <p className="mb-0">This topic</p>
                  </div>
                  <div className="timing">9:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* Speakers */}
      {/* <div className="schedule-section" id="speakers">
        <h1 className="schedule-title">Speakers</h1>
        <div className="responsive-container-block container ">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img
                    className="team-member-image"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  />
                </div>
                <p className="text-blk name">Name</p>
                <p className="text-blk position">Job Role</p>
                <p className="text-blk ">Company</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Partners */}

      <hr />
      <div className="partners" id="partners">
        <h2 className="text-center mt-2">Sponsors</h2>
        <p className="text-center mt-2 mx-2">
          Sponsors dedicated to building remarkable experience!
        </p>

        <div className="googledev">
          <a href="https://developers.googleblog.com/" target="_blank">
            <img
              src={googledev}
              title="Google Developers"
              className="googledevimg"
              alt="Google Developers logo"
            />
          </a>

          <h2 className="text-center mt-2">Community Partners</h2>
          <div className="community_logos">
            <a href="https://gdg.community.dev/gdg-jalandhar/" target="_blank">
              <div className="commdiv">
                <div>
                  <img
                    src={GDG_Jalandhar}
                    title="GDG Jalandhar"
                    className="gdgjalandharimg"
                    alt="GDG Jalandhar logo"
                  />
                </div>
                <div>GDG Jalandhar</div>
              </div>
            </a>
            <a
              href="https://bizarre-coders-official.netlify.app/"
              target="_blank"
            >
              <div className="commdiv">
                <img
                  src={Bizarre_Coders}
                  title="Bizarre Coders"
                  className="bizarrecodersimg"
                  alt="Bizarre Coders logo"
                />

                <div>Bizarre Coders</div>
              </div>
            </a>
          </div>

          <h2 className="text-center mt-2">Venue Partner</h2>
          <a href="https://ptu.ac.in/" target="_blank">
            <img
              src={ptulogo}
              title="IKGPTU"
              className="googledevimgptu"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* Team */}

      <hr />
      <div className="team" id="team">
        <h2 className="text-center mt-2">Team</h2>

        <div className="responsive-container-block container">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={simarpreet_pic} />
                </div>
                <p className="text-blk name">Simar Preet Singh</p>
                <p className="text-blk position">Organiser</p>
                <p className="text-blk position">
                  <b>GDG Jalandhar</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={veer_pic} />
                </div>
                <p className="text-blk name">Veer Pratap Singh</p>
                <p className="text-blk position">Technical Lead</p>
                <p className="text-blk position">
                  <b>Antier Solutions</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={amanpreet_pic} />
                </div>
                <p className="text-blk name">Amanpreet Kaur</p>
                <p className="text-blk position">Mobile Team Lead </p>
                <p className="text-blk position">
                  <b>O7 Solutions</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={kamal_pic} />
                </div>
                <p className="text-blk name">Kamal Nayan</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>IKGPTU</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={agrim_pic} />
                </div>
                <p className="text-blk name">Agrim Sharma</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>IKGPTU</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={suraj_pic} />
                </div>
                <p className="text-blk name">Suraj Pandey</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>IKGPTU</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={aryan_pic} />
                </div>
                <p className="text-blk name">Aryan Sharma</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>IKGPTU</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={mehak_pic} />
                </div>
                <p className="text-blk name">Mehak</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>IKGPTU</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={simar_pic} />
                </div>
                <p className="text-blk name">Simar Sidhu</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>IKGPTU</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={lovejeet_pic} />
                </div>
                <p className="text-blk name">Lovejeet Singh</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>DAV University</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={gurkirat_pic} />
                </div>
                <p className="text-blk name">Gurkirat Singh</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>LKCTC</b>
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
              <div className="card">
                <div className="team-image-wrapper">
                  <img className="team-member-image" src={surbhi_pic} />
                </div>
                <p className="text-blk name">Surbhi</p>
                <p className="text-blk position">Student</p>
                <p className="text-blk position">
                  <b>DAV University</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="faqs" id="faqs">
        <h2 className="text-center mt-2">Frequently asked questions</h2>
        <p className="text-center mt-2">
          Need Answers? Everything you need to know.
        </p>
      </div>

      <MDBContainer className="mt-5" style={{ maxWidth: "90%" }}>
        <MDBAccordion>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What is Google I/O Extended ?"
          >
            Google I/O Extended is the community led counterpart to Google I/O,
            our annual Google led conference where the world hears about
            Google's latest developer solutions, products, and technology.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="What are GDG's ?">
            GDGs are focused on community building and learning about
            Google&apos;s technologies.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="Who can register for I/O Extended ?"
          >
            Beginners, experts, literally everyone. Anyone with the passion of
            learning, who&apos;s fond of technology, passionate programmers ,
            everybody can register and attend.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="Is it mandatory to register to participate in the event ?"
          >
            Yes. Each individual may register for only one ticket. You may not
            register on behalf of anyone else.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="I'm a beginner in programming. Can I still register?"
          >
            Yes. Anybody with the zeal in technology can register. We have
            special tracks especially for beginners.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle="What will attendees get by participating in the event ?"
          >
            We have a plethora of AMAZING perks awaiting for you!
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={7}
            headerTitle="How can I become a member of GDG ?"
          >
            {" "}
            Head to Google developers group website
            (https://gdg.community.dev/gdg-jalandhar/)
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={8}
            headerTitle="How can I communicate my queries ? "
          >
            Reach out to us at: [hello@gdgjalandhar.com]
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>

      {/* Footer */}

      <div className="footer">
        <div className="footer-content">
          <a className="footer-heading" href="">
            I/O Extended Jalandhar
          </a>
          <section className="d-flex  follow-section">
            <h5>Follow Us : </h5>
            <div className="followus ">
              <a href="https://www.facebook.com/GDGJalandhar" target="_blank">
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-fb"
                  icon={["fab", "facebook"]}
                />
              </a>
              <a href="https://www.instagram.com/gdgjalandhar" target="_blank">
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-in"
                  icon={["fab", "instagram"]}
                />
              </a>
              <a
                href="http://linkedin.com/company/GDGJalandhar"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-li"
                  icon={["fab", "linkedin"]}
                />
              </a>
              <a href="https://twitter.com/gdgjalandhar" target="_blank">
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-tw"
                  icon={["fab", "twitter"]}
                />
              </a>
            </div>
          </section>
          <hr className="footer-hr" />

          <section className="d-flex footer-link-section">
            <a href="https://io.google/2023/" target="_blank">
              Google I/O 2023
            </a>
            <a
              className="footer-links"
              href="https://developers.google.com/community/gdg"
              target="_blank"
            >
              About GDG Program
            </a>
            <a
              className="footer-links"
              href="https://www.womentechmakers.com/"
              target="_blank"
            >
              About WTM Program
            </a>
            <a
              className="footer-links"
              href="https://developers.google.com/community-guidelines"
              target="_blank"
            >
              Community Guidelines
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
