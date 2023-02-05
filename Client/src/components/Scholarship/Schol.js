import React from 'react'

export default function Schol(){
    function showAlert (){
        window.alert("Successsfully submitted our team will get back to you later.")
    }
    function likeButton (idName){
        const likeIcon= document.getElementById(idName);
        if(likeIcon.classList.contains('fa-solid')){
            likeIcon.classList.remove('fa-solid');
            likeIcon.classList.add("fa-regular");
        }else{
            likeIcon.classList.remove("fa-regular");
            likeIcon.classList.add('fa-solid');
        }
    }
    
    function LoadingAnimation (){
        const homePage= document.getElementById("homeLoading");
        homePage.style.display="none";
        const loadingIcon= document.getElementById("Loader");
        setTimeout(()=>{
            homePage.style.display="block";
            loadingIcon.style.display="none";
        }, 1200);
    }
  return (
    <>
    <div>
         <section id="popular-courses" className="courses" style={{margin:" 2px"}}>
        <div className="container">

            <div className="section-title text-center">
                <h1>Courses We Offer</h1>
            </div>

            <div className="row">

                <div className="col-lg-4 col-md-6 d-flex align-items-center"
                    style={{border: "1px solid black", borderRadius: "8px"}}>
                    <div className="course-item" style={{margin: "15px 0px"}}>
                        <img src="img\webd.jpg" className="img-fluid" style={{height: "260px", borderRadius: "10px"}}/>
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <br/>
                                <h4>Web Development</h4>
                                <p className="price"> <del>$275 </del>&nbsp;&nbsp;$135</p>
                            </div>
                            <hr/>
                            <h3><a href="course-details.html">Website Design</a></h3>
                            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores
                                dolorem tempore.</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                                <div className="trainer-profile d-flex align-items-center">
                                    <img src="img\pawan.jpg" className="img-fluid" alt=""/>
                                    <span>Nimhal</span>
                                </div>
                                <div className="trainer-rank d-flex align-items-center">
                                    <img src="img\students.svg" style={{cursor:"pointer"}}/>&nbsp;809
                                    &nbsp;&nbsp;
                                    <i className="fa-regular fa-heart" style={{color:"#d60c0c", cursor: "pointer"}} id="test1"
                                        onClick={()=>likeButton('test1')}></i>&nbsp;267
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- End Course1 Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-center mt-4 mt-md-0"
                     style={{border: "1px solid black", borderRadius: "8px"}}>
                    <div className="course-item" style={{margin: "15px 0px"}}>
                        <img src="img\govern.jpg" className="img-fluid" alt="..."
                            style={{height: "260px", borderRadius: "10px"}}/>
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <br/>
                                <h4>Government Jobs</h4>
                                <p className="price"> <del>$390 </del>&nbsp;&nbsp;$250</p>
                            </div>
                            <hr/>

                            <h3><a href="course-details.html">Government </a></h3>
                            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores
                                dolorem tempore.</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                                <div className="trainer-profile d-flex align-items-center">
                                    <img src="img\rupesh (1).jpg" className="img-fluid" alt=""/>
                                    <span>Aryan</span>
                                </div>
                                <div className="trainer-rank d-flex align-items-center">
                                    <img src="img\students.svg" style={{cursor:"pointer"}}/>&nbsp;819
                                    &nbsp;&nbsp;
                                    <i className="fa-regular fa-heart" style={{color:"#d60c0c", cursor: "pointer"}} id="test2"
                                        onClick={()=>likeButton('test2')}></i>&nbsp;302
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- End Course2 Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-center mt-3 mt-lg-0"
                     style={{border: "1px solid black", borderRadius: "8px"}}>
                    <div className="course-item" style={{margin: "15px 0px"}}>
                        <img src="img\dsa.jpg" className="img-fluid" style={{height: "260px", borderRadius: "10px"}}/>
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <br/>
                                <h4>Data Structure & Algo</h4>
                                <p className="price"> <del>$350 </del>&nbsp;&nbsp; $180</p>
                            </div>
                            <hr/>
                            <h3><a href="course-details.html">Data Structure</a></h3>
                            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores
                                dolorem tempore.</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                                <div className="trainer-profile d-flex align-items-center">
                                    <img src="img\pawan.jpg" className="img-fluid" alt=""/>
                                    <span>Devi</span>
                                </div>
                                <div className="trainer-rank d-flex align-items-center">
                                    <img src="img\students.svg" style={{cursor:"pointer"}}/>&nbsp;400
                                    &nbsp;&nbsp;
                                    {/* <!-- <img id="test1" src="img\heart.svg" style={{cursor:"pointer"}}>&nbsp;190 --> */}
                                    <i className="fa-regular fa-heart" style={{color:"#d60c0c", cursor: "pointer"}} id="test3"
                                        onClick={()=>likeButton('test3')}
                                        ></i>&nbsp;190
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- End Course3 Item--> */}
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch"
                     style={{border: "1px solid black", borderRadius: "8px"}}>
                    <div className="course-item" style={{margin: "15px 0px"}}>
                        <img src="img\c4.jpg" className="img-fluid" style={{height: "260px", borderRadius: "10px"}}/>
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <br/>
                                <h4>Management Course </h4>
                                <p className="price"> <del>$275 </del>&nbsp;&nbsp;$135</p>
                            </div>
                            <hr/>
                            <h3><a href="course-details.html">Management course</a></h3>
                            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores
                                dolorem tempore.</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                                <div className="trainer-profile d-flex align-items-center">
                                    <img src="img\pawan.jpg" className="img-fluid" alt=""/>
                                    <span>Pawan</span>
                                </div>
                                <div className="trainer-rank d-flex align-items-center">
                                    <img src="img\students.svg" style={{cursor:"pointer"}}/>&nbsp;799
                                    &nbsp;&nbsp;
                                    <i className="fa-regular fa-heart" style={{color:"#d60c0c", cursor: "pointer"}} id="test4"
                                        onClick={()=>likeButton('test4')}></i>&nbsp;297
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- End Course4 Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                     style={{border: "1px solid black", borderRadius: "8px"}}>
                    <div className="course-item" style={{margin: "15px 0px"}}>
                        <img src="img\c5.jpg" className="img-fluid" alt="..." style={{height: "260px", borderRadius: "10px"}}/>
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <br/>
                                <h4>Android Development</h4>
                                <p className="price"> <del>$390 </del>&nbsp;&nbsp;$250</p>
                            </div>
                            <hr/>

                            <h3><a href="course-details.html">Android Development</a></h3>
                            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores
                                dolorem tempore.</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                                <div className="trainer-profile d-flex align-items-center">
                                    <img src="img\rupesh (1).jpg" className="img-fluid" alt=""/>
                                    <span>Rupesh</span>
                                </div>
                                <div className="trainer-rank d-flex align-items-center">
                                    <img src="img\students.svg" style={{cursor:"pointer"}}/>&nbsp;619
                                    &nbsp;&nbsp;
                                    <i className="fa-regular fa-heart" style={{color:"#d60c0c", cursor: "pointer"}} id="test5"
                                        onClick={()=>likeButton('test5')}></i>&nbsp;392
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- End Course5 Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-3 mt-lg-0"
                     style={{border: "1px solid black", borderRadius: "8px"}}>
                    <div className="course-item" style={{margin: "15px 0px"}}>
                        <img src="img\c6.jpg" className="img-fluid" style={{height: "260px", borderRadius: "10px"}}/>
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <br/>
                                <h4>Robotics Course</h4>
                                <p className="price"> <del>$350 </del>&nbsp;&nbsp; $180</p>
                            </div>
                            <hr/>
                            <h3><a href="course-details.html">Robotics</a></h3>
                            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores
                                dolorem tempore.</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                                <div className="trainer-profile d-flex align-items-center">
                                    <img src="img\pawan.jpg" className="img-fluid" alt=""/>
                                    <span>Devi</span>
                                </div>
                                <div className="trainer-rank d-flex align-items-center">
                                    <img src="img\students.svg" style={{cursor:"pointer"}}/>&nbsp;400
                                    &nbsp;&nbsp;
                                    <i className="fa-regular fa-heart" style={{color:"#d60c0c", cursor: "pointer"}} id="test6"
                                        onClick={()=>likeButton('test6')}></i>&nbsp;190
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- End Course6 Item--> */}
            </div>
        </div>
    </section>

    {/* <!-- Section Starts here --> */}
    <section id="about sec" className="about" style={{backgroundColor: "rgb(198, 200, 201)"}}>
        <div className="container" data-aos="fade-up">
            <h1 style={{textAlign: "center" ,fontFamily:"'Georgia', 'Times New Roman', 'Times', 'serif'"  ,fontSize: "45px"}}>
                Grab Scholarship</h1>

            <div className="row">
                <div className="col-lg-6 order-1 order-lg-2">
                    <ol><br/>
                        <img src="img\arr.svg" alt="" style={{height: "21px", paddingRight: "20px"}}/>
                        <span style={{fontSize: "18px", fontWeight:" bold"}}> Attend the Assessment to get
                            Scholarship.</span>
                        <br/>
                        <img src="img\arr.svg" alt=""  style={{height: "21px", paddingRight: "20px"}}/>
                        <span style={{fontSize: "18px", fontWeight:" bold"}}>Click on this Link to give : <a
                                target="_blank"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdD5aMVp7EguQb7B06RpoO9R711830EAzvTLfW9mPmjQU44pg/viewform?usp=sf_link">Assessment</a></span>
                        <br/>
                        <img src="img\arr.svg" alt=""  style={{height: "21px", paddingRight: "20px"}}/>
                        <span style={{fontSize: "18px", fontWeight:" bold"}}> Send your Score Screenshot by filling given form</span>
                        <br/> <br/>
                        <form  action="#" onSubmit={showAlert}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1"style={{fontSize: "16px"}} >Your Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Name " required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1" style={{fontSize: "16px"}} >Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1" style={{fontSize: "16px"}}>Score Screenshot</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" required/>
                            </div>
                            {/* <!-- <button type="button" className="btn btn-outline-success">Success</button> --> */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{color: "black"}} >Submit</button>
                        </form>
                        

                    </ol>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <br/>
                    <img src="img/scholarship1.jpg" className="img-fluid" alt="ClassRoom"/>
                </div>
            </div>

        </div>
    </section>
    </div>
    </>
  );
}






