import React from "react";
import details_img from "../assets/details_img.jpg";
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

import {} from "@fortawesome/free-brands-svg-icons";

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

  const teamMembers = [
    {
      name: "Simar Preet Singh",
      position: "Organiser",
      company: "GDG Jalandhar",
      image: simarpreet_pic,
    },
    {
      name: "Veer Pratap Singh",
      position: "Technical Lead",
      company: "Antier Solutions",
      image: veer_pic,
    },
    {
      name: "Amanpreet Kaur",
      position: "Mobile Team Lead",
      company: "O7 Solutions",
      image: amanpreet_pic,
    },
    {
      name: "Kamal Nayan",
      position: "Student",
      company: "IKGPTU",
      image: kamal_pic,
    },
    {
      name: "Agrim Sharma",
      position: "Student",
      company: "IKGPTU",
      image: agrim_pic,
    },
    {
      name: "Suraj Pandey",
      position: "Student",
      company: "IKGPTU",
      image: suraj_pic,
    },
    {
      name: "Aryan Sharma",
      position: "Student",
      company: "IKGPTU",
      image: aryan_pic,
    },
    {
      name: "Mehak",
      position: "Student",
      company: "IKGPTU",
      image: mehak_pic,
    },
    {
      name: "Simar Sidhu",
      position: "Student",
      company: "IKGPTU",
      image: simar_pic,
    },
    {
      name: "Lovejeet Singh",
      position: "Student",
      company: "DAV University",
      image: lovejeet_pic,
    },
    {
      name: "Gurkirat Singh",
      position: "Student",
      company: "LKCTC",
      image: gurkirat_pic,
    },
    {
      name: "Surbhi",
      position: "Student",
      company: "DAV University",
      image: surbhi_pic,
    },
  ];

  const teamMembersRender = teamMembers.map((member, index) => (
    <div
      key={member.name + member.position + member.company}
      className="card col-md-4 col-lg-2 mx-3 mb-5"
    >
      <div className="team-image-wrapper">
        <img
          className="img-thumbnail object-cover object-top rounded-circle"
          src={member.image}
          alt={member.name + " profile"}
        />
      </div>
      <p className="text-blk name">{member.name}</p>
      <p className="text-blk ">{member.position}</p>
      <p className="text-blk ">
        <b>{member.company}</b>
      </p>
    </div>
  ));
  return (
    <>
      <ImageComponent />
      <div className="container w-75 mx-auto" id="about">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="font-weight-lighter header">
              Unleash <br />
              <span id="tech-event">Tomorrow's Tech Today:</span>
              <br />
              <span id="developers">Learn, Code, Innovate!</span>
            </h1>

            <div>
              <h6>
                <i className="fa fa-calendar"></i> Date :{" "}
                {/* <span id="data">August 12 , 2023</span> */}
                <span id="data">To Be Announced</span>
              </h6>
              <h6>
                <i className="fa fa-clock"></i> Time :{" "}
                {/* <span id="data">09:00 AM - 4:00 PM IST</span> */}
                <span id="data">To Be Announced</span>
              </h6>
              <h6 id="location">
                <i className="fa fa-map-marker"></i> Location:{" "}
                {/* <span id="data">
                  I.K. Gujral Punjab Technical University -9F35+9F9, Kapurthala
                  Highway, VPO - Ibban, Distt, Kapurthala, Punjab 144603
                </span> */}
                <span id="data">To Be Announced</span>
              </h6>
              <p className="text-center">
                Google I/O Extended is the community led counterpart to Google
                I/O, our annual Google led conference where the world hears
                about Google's latest developer solutions, products, and
                technology.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary rounded-pill disabled">
                  Registrations Starting Soon
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column justify-content-center mt-lg-0 mt-sm-4">
            <img
              src="https://io.google/2023/app/images/cs_products.svg"
              className="img-fluid rounded-9"
              alt="Google IO Laptop"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <img src={details_img} className="img-fluid rounded-9" alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center ">
            <section className="text-center mt-lg-0 mt-sm-4">
              <h2>What is Google I/O Extended Jalandhar ?</h2>
              <p>
                Google I/O Extended Jalandhar, a full day event, where you find
                updates of Google's Products. The magic of I/O doesn&apos;t end
                after the main event. Local developers come together for I/O
                Extended events to discuss the latest new technologies,
                summarize content, hosting Q&As, and meet other technology
                enthusiasts. This will be a physical event, promising to each of
                our attendee an experience, unlike anything they've ever seen.
              </p>
            </section>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Technologies in Focus</h1>
            <p className="my-3">
              At sessions that span from the technical to the visionary,
              let&apos;s celebrate and discover what the technologies can
              enable: how product innovation, open source, and ML and AI can
              propel enterprises forward and solve the big problems that impact
              all of us.
            </p>
            <div className="icons d-flex">
              {techs?.map((result, index) => (
                <div className="boxes" key={index}>
                  <a href={result.link} target="_blank" rel="noreferrer">
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
        </div>

        <hr id="partners" />
        <div className="partners">
          <h2 className="text-center mt-2">Sponsors</h2>
          <p className="text-center mt-2 mx-2">
            Sponsors dedicated to building remarkable experience!
          </p>

          <div className="googledev">
            <a
              href="https://developers.googleblog.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={googledev}
                title="Google Developers"
                className="googledevimg"
                alt="Google Developers logo"
              />
            </a>

            <h2 className="text-center mt-2">Community Partners</h2>
            <div className="community_logos">
              {/* <a href="https://gdg.community.dev/gdg-jalandhar/" target="_blank" rel="noreferrer"> */}
              <div className="commdiv">
                <div>
                  <img
                    src={GDG_Jalandhar}
                    title="GDSC PTU"
                    className="gdgjalandharimg"
                    alt="GDG PTU logo"
                  />
                </div>
                <div>GDSC PTU</div>
              </div>
              {/* </a> */}
              <a
                href="https://bizarre-coders-official.netlify.app/"
                target="_blank"
                rel="noreferrer"
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
            <a href="https://ptu.ac.in/" target="_blank" rel="noreferrer">
              <div className="text-black flex-column">
                <img
                  src={ptulogo}
                  title="IKGPTU"
                  className="googledevimgptu"
                  alt=""
                />{" "}
                <div>IKGPTU, Jalandhar</div>
              </div>
            </a>
          </div>
        </div>

        {/* Team */}

        <hr id="team" />
        <div className="team mt-4">
          <h2 className="text-center mb-3">Team</h2>

          <div className="row flex-wrap justify-content-center">
            {teamMembersRender}
          </div>
        </div>

        <hr id="faqs" />
        <div className="faqs">
          <h2 className="text-center mt-2">Frequently asked questions</h2>
          <p className="text-center mt-2">
            Need Answers? Everything you need to know.
          </p>
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
          <h2 className="footer-heading text-primary">
            I/O Extended Jalandhar
          </h2>
          <section className="d-flex  follow-section">
            <h5>Follow Us : </h5>
            <div className="followus ">
              <a
                href="https://www.facebook.com/GDGJalandhar"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-fb"
                  icon={["fab", "facebook"]}
                />
              </a>
              <a
                href="https://www.instagram.com/gdgjalandhar"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-in"
                  icon={["fab", "instagram"]}
                />
              </a>
              <a
                href="http://linkedin.com/company/GDGJalandhar"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-li"
                  icon={["fab", "linkedin"]}
                />
              </a>
              <a
                href="https://twitter.com/gdgjalandhar"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-tw"
                  icon={["fab", "twitter"]}
                />
              </a>
            </div>
          </section>
          <hr className="footer-hr" />

          <section className="d-flex footer-link-section">
            <a href="https://io.google/2023/" target="_blank" rel="noreferrer">
              Google I/O 2023
            </a>
            <a
              className="footer-links"
              href="https://developers.google.com/community/gdg"
              target="_blank"
              rel="noreferrer"
            >
              About GDG Program
            </a>
            <a
              className="footer-links"
              href="https://www.womentechmakers.com/"
              target="_blank"
              rel="noreferrer"
            >
              About WTM Program
            </a>
            <a
              className="footer-links"
              href="https://developers.google.com/community-guidelines"
              target="_blank"
              rel="noreferrer"
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
