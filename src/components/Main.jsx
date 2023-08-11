import React, { useState } from "react";
import details_img from "../assets/details_img.jpg";
import googledev from "../assets/googledev.jpg";
import Bizarre_Coders from "../assets/Bizarre_Coders.jpg";
import GDG_Jalandhar from "../assets/gdgjalandhar.jpg";
import ptulogo from "../assets/classic-logo.png";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import ImageComponent from "./ImageComponent";

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
import Dharmesh_Vaya from "../assets/Dharmesh_Vaya.jpg";
import Adit_Lal from "../assets/Adit_Lal.JPG";
import Nitin_Tiwari from "../assets/Nitin_Tiwari.jpg";
import Aashi_Dutt from "../assets/Aashi_Dutt.jpeg";
import Amanpreet_Kaur from "../assets/Amanpreet_Kaur.jpg";

import {} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLink as faSolidLink } from "@fortawesome/free-solid-svg-icons";

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

  const speakers = [
    {
      image: Dharmesh_Vaya,
      name: "Dharmesh Vaya",
      position: "Solutions Architect",
      company: "Palo Alto Networks",
      sessionTitle: "GCP for Everyone",
      desciption:
        "Dharmesh is a technologist known for his ability of developing enterprise applications on Cloud Platforms and fostering a spirit of innovation among teams, with a diverse experience around Banking, e-Commerce, Media/Entertainment to name a few. With over 17 years of experience, he currently works at PaloAlto Networks as a Solutions Architect, protecting and securing the Clouds. He is a Google Developer Expert for Google Cloud Platform and actively manages Google Cloud Developers Community, Mumbai.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/dharmeshvaya",
        twitter: "https://x.com/DRVaya",
      },
    },
    {
      image: Adit_Lal,
      name: "Adit lal",
      position: "Senior Android Manager and Architect",
      company: "Viacom18",
      sessionTitle:
        "Accelerate your key learnings of modern Android app development with KMM",
      desciption:
        "Adit is a Senior Android Manager and Architect, currently working at Viacom18/ JioCinema. He has been working in the industry for 10 year, primarily helping build Android mobile products and scaling them up. Some of his hobbies are Stargazing, Travel, and Landscape Photography.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/aditlal/",
        twitter: "http://twitter.com/aditlal",
        github: "https://github.com/aldefy",
      },
    },
    {
      image: Nitin_Tiwari,
      name: "Nitin Tiwari",
      position: "Software Engineer",
      company: "LTIMindtree",
      sessionTitle: "Venturing into the world of Generative AI",
      desciption:
        "Nitin is a software engineer at LTIMindtree and a Machine Learning Google Developer Expert. With a strong dedication to sharing knowledge and supporting the community, Nitin enjoys helping others explore the world of AI and ML and is always open to collaborations to build for the community.  ",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/tiwari-nitin/",
        twitter: "https://twitter.com/NSTiwari21",
        github: "https://github.com/NSTiwari",
        others: "https://developers.google.com/profile/u/nitin-tiwari",
      },
    },
    {
      image: Aashi_Dutt,
      name: "Aashi Dutt",
      position: "Co-founder",
      company: "MedEnGauge Healthcare pvt ltd ",
      sessionTitle: "Collaborate, Innovate, Elevate: The Power of Communities",
      desciption:
        "Aashi is a masters student at Georgia Institute of Technology, Atlanta, USA specialising in field of machine learning. She is an Alumni of MIT, Cambridge, an active community speaker, 2X kaggle expert and leads the TFUG Chandigarh chapter. Currently, she is working on her healthcare startup along with many AI based products. ",
      socialLinks: {
        twitter: "https://twitter.com/aashidutt",
      },
    },
    {
      image: Amanpreet_Kaur,
      name: "Amanpreet Kaur",
      position: "Mobile team lead ",
      company: "O7 Solutions ",
      sessionTitle: "Roadmap to flutter ",
      desciption:
        "I'm mobile team leading in O7 Solutions dealing wrh Android and iOS apps. I like to code in kotlin, swift and dart.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/amanpreet-kaur-7b1b0a1a4/",
        github: "https://github.com/kauramanp",
      },
    },
    {
      image: veer_pic,
      name: "Veer Pratap Singh",
      position: "Tech Lead",
      company: "Antier Solutions",
      sessionTitle: "Welcome Keynote",
      desciption:
        "Veer Pratap Singh is a Full Stack Web3 Developer with more than 3 years of professional experience. He is having a very good knowledge about React, Nodejs, Nextjs, Solidity, Rust etc. He loves to speak and volunteer at tech events and meetups as he thinks knowledge increases as we share it.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/veer-pratap-singh/",
        twitter: "https://twitter.com/theveer5",
        github: "https://twitter.com/theveer5",
        others: "https://veertech.co.in/",
      },
    },
    {
      image: "https://avatars.githubusercontent.com/u/28017507?v=4",
      name: "Simar Preet Singh",
      position: "Organiser",
      company: "GDG Jalandhar",
      sessionTitle: "Web's New Swag: Dialogs, Popovers, and More.",
      desciption:
        "Simar Preet Singh is a dynamic, motivated and result oriented professional with more than 5 years of experience in the Information Technology industry and loves contributing to the Dev Community. His motto is - `Succeed and help others succeed`. He is skilled in Node.js, Angular, React, Ionic, Capacitor and Firebase. Currently, he is working with Redaptive Inc. as Software Engineer.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/programmersingh/",
        twitter: "https://twitter.com/programmersingh",
        github: "https://github.com/programmer-singh",
        others: "https://programmersingh.dev",
      },
    },
  ];

  const teamMembers = [
    {
      name: "Simar Preet Singh",
      position: "Organiser",
      company: "GDG Jalandhar",
      image: "https://avatars.githubusercontent.com/u/28017507?v=4",
    },
    {
      name: "Amanpreet Kaur",
      position: "Ambassador",
      company: "Women Techmakers",
      image: amanpreet_pic,
    },
    {
      name: "Veer Pratap Singh",
      position: "Technical Lead",
      company: "Antier Solutions",
      image: veer_pic,
    },
    {
      name: "Harnarinder Singh",
      position: "Software Engineer",
      company: "Redaptive Inc.",
      image: "https://avatars.githubusercontent.com/u/20265606?v=4",
    },
    {
      name: "Suraj Pandey",
      position: "GDSC Lead",
      company: "IKGPTU",
      image: suraj_pic,
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

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    console.log(member);
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  const speakersRender = speakers.map((member, index) => (
    <div
      key={member.name + member.position + member.company}
      className="card col-md-4 col-lg-2 mx-3 mb-5"
      style={{
        cursor: "pointer",
      }}
      onClick={() => handleMemberClick(member)}
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
      <div className="container-fluid justify-content-center mt-5" id="about">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-lg-7">
                <h1 className="font-weight-lighter header">
                  Unleash <br />
                  <span id="tech-event">Tomorrow's Tech Today:</span>
                  <br />
                  <span id="developers">Learn, Code, Innovate!</span>
                </h1>

                <div className="event-details">
                  <p className="m-0">
                    <i className="fa fa-calendar"></i>
                    <span id="data" className="ms-1">
                      August 12 , 2023
                    </span>
                    {/* <span id="data">To Be Announced</span> */}
                  </p>
                  <p className="m-0">
                    <i className="fa fa-clock"></i>
                    <span id="data" className="ms-1">
                      09:00 AM - 4:00 PM IST
                    </span>
                    {/* <span id="data">To Be Announced</span> */}
                  </p>
                  <p className="m-0" id="location">
                    <i className="fa fa-map-marker"></i>
                    <span id="data" className="ms-1">
                      <a
                        id="data"
                        className="ms-1 text-decoration-underline"
                        href="https://goo.gl/maps/siUi8Lr2nWK3x5Ku7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        I.K. Gujral Punjab Technical University, Jalandhar,
                        Punjab
                      </a>
                    </span>
                    {/* <span id="data">
                    To Be Announced
                  </span> */}
                  </p>
                  <p className="mt-2">
                    Google I/O Extended is the community led counterpart to
                    Google I/O, our annual Google led conference where the world
                    hears about Google's latest developer solutions, products,
                    and technology.
                  </p>
                  <div className="">
                    <button
                      data-event-id="80002610412454"
                      data-ticket-id="0"
                      class="ae-ticket-book-button btn btn-primary rounded-pill"
                    >
                      Book Tickets
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column justify-content-center mt-lg-0 mt-sm-4 mt-4">
                <img
                  src="https://io.google/2023/app/images/cs_products.svg"
                  className="img-fluid rounded-9"
                  alt="Google IO Laptop"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <img src={details_img} className="img-fluid rounded-9" alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center ">
                <section className="text-center mt-lg-0 mt-sm-4 mt-3">
                  <h2>What is Google I/O Extended Jalandhar ?</h2>
                  <p>
                    Google I/O Extended Jalandhar, a full day event, where you
                    find updates of Google's Products. The magic of I/O
                    doesn&apos;t end after the main event. Local developers come
                    together for I/O Extended events to discuss the latest new
                    technologies, summarize content, hosting Q&As, and meet
                    other technology enthusiasts. This will be a physical event,
                    promising to each of our attendee an experience, unlike
                    anything they've ever seen.
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
                  propel enterprises forward and solve the big problems that
                  impact all of us.
                </p>
                <div className="icons d-flex flex-wrap justify-content-center aligh-items-center">
                  {techs?.map((result, index) => (
                    <div className="px-2 mb-3" key={index}>
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

            <hr />
            <div className="team mt-5" id="speakers">
              <h2 className="text-center mb-3">Speakers</h2>

              <div className="row flex-wrap justify-content-center">
                {speakersRender}
              </div>
            </div>
            {/* Pop-up */}
            {selectedMember && (
              <div className="modal popup" tabIndex="-1" role="dialog">
                <div className="" role="document">
                  <div className="modal-content popup-content">
                    <div className="modal-header">
                      <div
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={handleClosePopup}
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          fontSize: "1.8rem",
                        }}
                      >
                        <span aria-hidden="true">&times;</span>
                      </div>
                      <div class="row">
                        <div class="col-md-6  align-items-center">
                          <div class="text-center">
                            <img
                              className="img-thumbnail object-cover object-top rounded-circle"
                              src={selectedMember.image}
                              alt={selectedMember.name + " profile"}
                              style={{ width: "200px", height: "200px" }}
                            />
                            <div>
                              <h3 style={{ color: "var(--main-blue)" }}>
                                {selectedMember.name}
                              </h3>
                              <div>{selectedMember.position}</div>
                              <div>{selectedMember.company}</div>
                              <div className="followus mt-2 d-flex justify-content-center align-items-center">
                                {selectedMember.socialLinks.linkedin && (
                                  <a
                                    href={selectedMember.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      className="ml-3 pl-3 footer-icons foot-li"
                                      icon={faLinkedin}
                                    />
                                  </a>
                                )}
                                {selectedMember.socialLinks.twitter && (
                                  <a
                                    href={selectedMember.socialLinks.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      className="ml-3 pl-3 footer-icons foot-tw"
                                      icon={faTwitter}
                                    />
                                  </a>
                                )}
                                {selectedMember.socialLinks?.github && (
                                  <a
                                    href={selectedMember.socialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      className="ml-3 pl-3 footer-icons foot-github"
                                      icon={faGithub}
                                    />
                                  </a>
                                )}
                                {selectedMember.socialLinks?.others && (
                                  <a
                                    href={selectedMember.socialLinks.others}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      className="ml-3 pl-3 footer-icons foot-others"
                                      icon={faSolidLink}
                                    />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-center">
                          <div class="text-left">
                            <div className="">
                              <h3 className="mt-md-0 mt-4">
                                About{" "}
                                <span style={{ color: "var(--main-red)" }}>
                                  {selectedMember.name}
                                </span>{" "}
                              </h3>
                              <div className="aboutff my-4">
                                {selectedMember.desciption}
                              </div>
                              <h4>
                                <span style={{ color: "var(--main-red)" }}>
                                  {" "}
                                  {selectedMember.name}{" "}
                                </span>{" "}
                                will be talking about{" "}
                                <span style={{ color: "var(--main-green)" }}>
                                  {" "}
                                  {selectedMember.sessionTitle}{" "}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <hr />
            <div className="partners" id="partners">
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
                  <a
                    href="https://gdg.community.dev/gdg-jalandhar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="commdiv">
                      <div>
                        <img
                          src={GDG_Jalandhar}
                          title="GDSC IKGPTU"
                          className="gdgjalandharimg"
                          alt="GDSC IKGPTU logo"
                        />
                      </div>
                      <div>GDSC IKGPTU</div>
                    </div>
                  </a>
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
                  <img
                    src={ptulogo}
                    title="IKGPTU"
                    className="googledevimgptu"
                    alt="IK Gujral Punjab Technical University logo"
                  />
                </a>
              </div>
            </div>

            {/* Team */}

            <hr />
            <div className="team mt-5" id="team">
              <h2 className="text-center mb-3">Team</h2>

              <div className="row flex-wrap justify-content-center">
                {teamMembersRender}
              </div>
            </div>

            <hr />
            <div className="faqs" id="faqs">
              <h2 className="text-center mt-2">Frequently asked questions</h2>
              <p className="text-center mt-2">
                Need Answers? Everything you need to know.
              </p>
            </div>
          </div>
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
          <h3 className="footer-heading text-primary">
            I/O Extended Jalandhar
          </h3>
          <section className="d-flex  follow-section">
            <h4>Follow Us : </h4>
            <div className="followus ">
              <a
                href="https://www.facebook.com/GDGJalandhar"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="ml-3 pl-3 footer-icons foot-fb"
                  icon={["fab", "facebook"]}
                  title="Follow GDG Jalandhar on Facebook"
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
                  title="Follow GDG Jalandhar on Instagram"
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
                  title="Follow GDG Jalandhar on LinkedIn"
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
                  title="Follow GDG Jalandhar on Twitter"
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
