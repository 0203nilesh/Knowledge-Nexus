import React, { useState } from "react";
import "./styles.css";

export default function Home() {
  //Loading Js
  // window.onload()
  // let lund = document.getElementById("running");

  function myFunction() {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.innerText = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }
    counter("count1", 700, 2100, 100);
    counter("count2", 0, 55, 3500);
    counter("count3", 0, 29, 3500);
    counter("count4", 0, 40, 3500);
  }

  function LoadingAnimation() {
    const homePage = document.querySelector("#homeLoading");
    homePage.style.display = "none";
    const loadingIcon = document.getElementById("Loader");
    setTimeout(() => {
      homePage.style.display = "block";
      loadingIcon.style.display = "none";
    }, 1200);
  }

  function likeButton(idName) {
    const likeIcon = document.getElementById(idName);
    if (likeIcon.classList.contains("fa-solid")) {
      likeIcon.classList.remove("fa-solid");
      likeIcon.classList.add("fa-regular");
    } else {
      likeIcon.classList.remove("fa-regular");
      likeIcon.classList.add("fa-solid");
    }
  }

  return (
    <div onLoad={LoadingAnimation}>
      <div id="Loader">
        <div className="preloader-orbit-loading">
          <div className="cssload-inner cssload-one"></div>
          <div className="cssload-inner cssload-two"></div>
          <div className="cssload-inner cssload-three"></div>
        </div>
      </div>

      <div id="homeLoading">
        <section
          id="hero"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="container position-relative" data-aos="zoom-in">
            <h1>Learning Today, Leading Tomorrow</h1> <br />
            {/* <!-- <h2> !!! We are team of Nitian trying to make a better World !!!</h2> --> */}
            <br />
            <form id="search-form">
              <div className="input-group kuch-search">
                <input
                  type="text"
                  className="form-control"
                  id="home_Search"
                  name="search"
                  placeholder="what we can do for you ?"
                />
                <div className="input-group-append rounded-end">
                  <button type="submit" className="btn btn-secondary">
                    <i
                      className="fa fa-search fa-1.2x"
                      style={{ color: "#ec6978" }}
                    ></i>
                  </button>
                </div>
              </div>
            </form>
            {/* <!-- <a href="courses.html" className="btn-get-started">Get Started</a> --> */}
          </div>
        </section>
        {/* <!-- End Hero --> */}

        {/* <!-- About section --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <h1
              className="text-center"
              style={{
                fontSize: "40px",
                color: "#f4f0c9",
                backgroundColor: "rgb(59 110 105)",
              }}
            >
              {" "}
              Benefits of Participating in Our Mentorship Program
            </h1>
            <br />
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src="img/about1.jpg"
                  className="img-fluid"
                  alt="ClassRoom"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <ol>
                  <i
                    className="fa-sharp fa-solid fa-circle-check"
                    style={{ olor: "rgb(10, 149, 15)" }}
                  ></i>
                  <b> Professional Development:</b> Mentors can provide guidance
                  and support for professional growth and career advancement.{" "}
                  <br />
                  <i
                    className="fa-sharp fa-solid fa-circle-check"
                    style={{ color: "rgb(10, 149, 15)" }}
                  ></i>
                  <b> Networking Opportunities: </b>Mentors can introduce
                  mentees to their professional network and provide
                  introductions to potential job opportunities. <br />
                  <i
                    className="fa-sharp fa-solid fa-circle-check"
                    style={{ color: "rgb(10, 149, 15)" }}
                  ></i>
                  <b>Career Advancement:</b> Mentors can provide guidance on
                  career paths, offer advice on job applications and interviews,
                  and help mentees navigate the job market. <br />
                  <i
                    className="fa-sharp fa-solid fa-circle-check"
                    style={{ color: "rgb(10, 149, 15)" }}
                  ></i>
                  <b>Improved Communication Skills:</b> Mentors can provide
                  feedback and help mentees improve their communication and
                  interpersonal skills. <br />
                  <i
                    className="fa-sharp fa-solid fa-circle-check"
                    style={{ color: "rgb(10, 149, 15)" }}
                  ></i>{" "}
                  <b>Long-term Relationships:</b>Long-term Relationships:
                  Mentorship programs can foster long-term relationships between
                  mentees and mentors, providing continued support and
                  opportunities for growth and development.
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- Count starts here --> */}
        <section
          className=" py-5 min-vh-40"
          onMouseOver={myFunction}
          style={{ backgroundColor: "azure" }}
        >
          <div className="container">
            <div
              className="row justify-content-center text-center"
              style={{ fontSize: "30px" }}
            >
              <div className="col-md-3">
                <span id="count1" className="display-4"></span>
                <p>Students</p>
              </div>
              <div className="col-md-3">
                <span id="count2" className="display-4"></span>
                <p>Courses</p>
              </div>
              <div className="col-md-3">
                <span id="count3" className="display-4"></span>
                <p>Trainers</p>
              </div>
              <div className="col-md-3">
                <span id="count4" className="display-4"></span>
                <p>Events</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Count Ends here --> */}
        {/* <!-- Popular Course --> */}
        <section id="popular-courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Courses</h2>
              <h1>Popular Courses</h1>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                style={{ border: "1px solid black", borderRadius: "8px" }}
              >
                <div className="course-item" style={{ margin: "15px 0px" }}>
                  <img
                    src="img\webd.jpg"
                    className="img-fluid"
                    style={{ height: "260px", borderRadius: "10px" }}
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <br />
                      <h4>Web Development</h4>
                      <p className="price">
                        {" "}
                        <del>$275 </del>&nbsp;&nbsp;$135
                      </p>
                    </div>
                    <hr />
                    <h3>
                      <a href="course-details.html">Website Design</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img src="img\pawan.jpg" className="img-fluid" alt="" />
                        <span>Nimhal</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <img
                          src="img\students.svg"
                          style={{ cursor: "pointer" }}
                        />
                        &nbsp;809 &nbsp;&nbsp;
                        <i
                          className="fa-regular fa-heart"
                          style={{ color: "#d60c0c", cursor: "pointer" }}
                          id="test1"
                          onClick={() => likeButton("test1")}
                        ></i>
                        &nbsp;267
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Course Item--> */}

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                style={{ border: "1px solid black", borderRadius: "8px" }}
              >
                <div className="course-item" style={{ margin: "15px 0px" }}>
                  <img
                    src="img\govern.jpg"
                    className="img-fluid"
                    alt="..."
                    style={{ height: "260px", borderRadius: "10px" }}
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <br />
                      <h4>Government Jobs</h4>
                      <p className="price">
                        {" "}
                        <del>$390 </del>&nbsp;&nbsp;$250
                      </p>
                    </div>
                    <hr />

                    <h3>
                      <a href="course-details.html">Government </a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        {/* <img src="img\rupesh (1).jpg" className="img-fluid" alt=""> */}
                        <span>Aryan</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <img
                          src="img\students.svg"
                          style={{ cursor: "pointer" }}
                        />
                        &nbsp;819 &nbsp;&nbsp;
                        <i
                          className="fa-regular fa-heart"
                          style={{ color: "#d60c0c", cursor: "pointer" }}
                          id="test2"
                          onClick={() => {
                            likeButton("test2");
                          }}
                        ></i>
                        &nbsp;302
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Course Item--> */}

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-3 mt-lg-0"
                style={{ border: "1px solid black", borderRadius: "8px" }}
              >
                <div className="course-item" style={{ margin: "15px 0px" }}>
                  <img
                    src="img\dsa.jpg"
                    className="img-fluid"
                    style={{ height: "260px", borderRadius: "10px" }}
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <br />
                      <h4>Data Structure & Algo</h4>
                      <p className="price">
                        {" "}
                        <del>$350 </del>&nbsp;&nbsp; $180
                      </p>
                    </div>
                    <hr />
                    <h3>
                      <a href="course-details.html">Data Structure</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img src="img\pawan.jpg" className="img-fluid" alt="" />
                        <span>Devi</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <img
                          src="img\students.svg"
                          style={{ cursor: "pointer" }}
                        />
                        &nbsp;400 &nbsp;&nbsp;
                        {/* <!-- <img id="test1" src="img\heart.svg" style="cursor:pointer">&nbsp;190 --> */}
                        <i
                          className="fa-regular fa-heart"
                          style={{ color: "#d60c0c", cursor: "pointer" }}
                          id="test3"
                          onClick={() => {
                            likeButton("test3");
                          }}
                        ></i>
                        &nbsp;190
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Course Item--> */}
            </div>
          </div>
        </section>
        {/* <!-- End Popular Courses Section --> */}

        {/* <!-- Why to Choose us Starts --> */}
        <section id=""></section>
        {/* <!-- Why to Choose us Ends --> */}
      </div>
    </div>
  );
}