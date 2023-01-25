import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function ContactGetInTouch() {
  const [isOpen, setOpen] = useState(false);
  const isOpenFalse = () => setOpen(!isOpen);
  const [isSelect, setSelect] = useState("Marriage");
  return (
    <div
      className="get_intouch_area pt-120 pb-120"
      style={{ background: "url(/img/bg/contact_map.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-7 order-1 order-lg-0">
            <div className="contact_section contact_contact bottom_radius0">
              <form
                action="mailto:issifu.amajeed@gmail.com"
                method="post"
                enctype="text/plain"
              >
                <div className="row">
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Enter full name"
                      required
                      minlength="3"
                      title="Input your full name !!!"
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                      message="Please enter a valid email"
                    />
                  </div>

                  <div className="col-xxl-6 col-sm-6">
                    <input type="tel" placeholder="Phone number" required />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <div
                      onClick={isOpenFalse}
                      className={`nice-select contact_select ${
                        isOpen && "open"
                      }`}
                    >
                      <span className="current">{isSelect}</span>
                      <ul className="list">
                        <li
                          onClick={() => setSelect("Select Subject")}
                          className={`option ${
                            isSelect == "Select Subject" && "selected focus"
                          }`}
                        >
                          Select Subject
                        </li>
                        <li
                          onClick={() => setSelect("Marriage")}
                          className={`option ${
                            isSelect == "Marriage" && "selected focus"
                          }`}
                        >
                          Marriage
                        </li>
                        <li
                          onClick={() => setSelect("Fatwa")}
                          className={`option ${
                            isSelect == "Fatwa" && "selected focus"
                          }`}
                        >
                          Fatwa
                        </li>
                        <li
                          onClick={() => setSelect("Da'wa")}
                          className={`option ${
                            isSelect == "Da'wa" && "selected focus"
                          }`}
                        >
                          Da'wa
                        </li>
                        <li
                          onClick={() => setSelect("Donation")}
                          className={`option ${
                            isSelect == "Donation" && "selected focus"
                          }`}
                        >
                          Donation
                        </li>
                      </ul>
                    </div>
                    {/* <select name="contact_select" id="contact_select" className="contact_select">
                                            <option value="Select Subject">Select Subject</option>
                                            <option value="Bangla">Bangla</option>
                                            <option value="English">English</option>
                                            <option value="Mathmatics">Mathmatics</option>
                                            <option value="Textile">Textile</option>
                                        </select> */}
                  </div>
                  <div className="col-xxl-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  <div className="col-xxl-12">
                    <button type="submit" className="contact_btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5 order-0 order-lg-1">
            <div className="contact_location_section pl-50 mb-50">
              <div className="section_title mb-40">
                <Link href="/contact">
                  <a className="sub_title sub_title_2">Contact Us</a>
                </Link>
                <h3 className="title">Get In Touch</h3>
              </div>
              <div className="contact_location_wrapper">
                <div className="single_contact_location theme-6">
                  <Link href="#">
                    <a className="icon">
                      <i className="far fa-map-marker-alt"></i>
                    </a>
                  </Link>
                  <div className="contact_location_text">
                    <span>Location</span>
                    <h5 className="contact_address_title">
                      State Street, Behind Northern Regional Coordinating
                      Council, Tamale, Tamale, Ghana, 00233
                    </h5>
                  </div>
                </div>
                <div className="single_contact_location theme-1">
                  <Link href="/mailto:info@cavefoundation.org">
                    <a className="icon">
                      <i className="fal fa-envelope"></i>
                    </a>
                  </Link>
                  <div className="contact_location_text">
                    <span>Email</span>
                    <Link href="/mailto:info@cavefoundation.org">
                      <a className="contact_address_title">
                        info@cavefoundation.org
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="single_contact_location theme-2">
                  <Link href="/tel:+233 24 584 5796">
                    <a className="icon">
                      <i className="fal fa-phone"></i>
                    </a>
                  </Link>
                  <div className="contact_location_text">
                    <span>Phone</span>
                    <Link href="/tel:+233 24 584 5796">
                      <a className="contact_address_title">+233 24 584 5796</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
