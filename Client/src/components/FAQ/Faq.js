import React from 'react'

export default function Faq() {
  return (
    <>
    <nav aria-label="breadcrumb" className="bread" style={{backgroundColor: "rgb(233, 240, 245)", height:"30px"}}>
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <a href="home.html" style={{textDecoration:"none"}}>Home</a>s
        </li>
        <li className="breadcrumb-item">
            <a href="Scholarship.html" style={{textDecoration: "none"}}>Scholarship</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
            FAQs
        </li>
    </ol>
</nav>
    <div>
      <div className="container my-3">
    <h2 className="heading text-center text-light p-2 mx-2">
        Frequently Asked Questions:-
    </h2>
    <div className="accordion open align-items-center" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    What is mentorship?</button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur adipisci fugiat ut, saepe
                    officiis provident ipsum qui velit vel nemo sed voluptas quod eveniet quidem libero animi, sunt illo
                    ea.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header " id="heading8">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                    Which Course Should you buy?
                </button>
            </h2>
            <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, culpa adipisci. Dignissimos rerum
                    ipsa veritatis maxime sit porro corrupti sunt quo impedit? Praesentium recusandae voluptate sapiente
                    quia dolore, ut dicta.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header " id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    How does mentorship work?
                </button>
            </h2>
            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque soluta tenetur voluptates,
                    mollitia id, quia consequatur laudantium tempora beatae laboriosam minus perferendis ex accusantium
                    ratione repellendus? Amet, pariatur saepe.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header " id="heading9">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                    What if the mentorship isn't working out?
                </button>
            </h2>
            <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minima repudiandae beatae
                    perspiciatis cupiditate. Eos autem id cupiditate quos laudantium aut nisi dolorem labore tempore
                    recusandae. Quam est saepe sed.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header " id="heading7">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    How do I become a mentor?
                </button>
            </h2>
            <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam veritatis aspernatur, ducimus
                    magni fuga labore ea nisi fugiat excepturi similique facere possimus consectetur, officiis in
                    voluptate molestias deleniti optio!
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I approach someone to be my mentor?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsum accusantium? Ea unde rem
                    voluptates dolore ex voluptatum quae at sunt quaerat facilis! Itaque a ipsa, libero enim impedit
                    voluptatum.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading6">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    Why is mentorship important?
                </button>
            </h2>
            <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia temporibus neque libero, error
                    reprehenderit pariatur, laborum mollitia maiores nostrum distinctio veniam! Optio dolor magni
                    corporis quaerat sint dolore animi quae.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can mentorship be done remotely?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo aperiam nihil expedita
                    velit distinctio illo laboriosam eos deserunt debitis quod sapiente quos aliquam libero quia
                    exercitationem? Similique, amet illum.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading10">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                    How do I know if a mentorship is successful?
                </button>
            </h2>
            <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, repudiandae! Quam, similique
                    adipisci porro inventore, rem doloremque quas nostrum distinctio blanditiis aperiam voluptatibus
                    libero quisquam, at eius harum obcaecati repellat.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading11">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                    Who can be a mentee?
                </button>
            </h2>
            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem totam minus amet consectetur
                    dolorum, ipsum consequuntur laborum iure autem cum esse, adipisci harum suscipit deserunt distinctio
                    explicabo at magni!
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading12">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                    What resources are available to support mentorship programs?
                </button>
            </h2>
            <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                    collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control
                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}
