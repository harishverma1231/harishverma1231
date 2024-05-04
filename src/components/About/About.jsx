function About(){
    return (
        <section className="section_about container">
            <div className="section_about_div">
                <div className="intro" data-aos="fade-right" data-aos-duration="1000">
                    <p className="intro_text">INTRODUCTION</p>
                    <h2 className="intro_heading">Overview.</h2>
                    <p className="my_intro">Experienced Shopify Developer in delivering high-quality e-commerce solutions. Self-motivated, highly organized & dedicated with a positive attitude. A fast learner and good communicator with inherent flexibility towards change, as well as smart working skills.</p>
                    <button className="btn btn_myresume">
                        <a style={{"color":"inherit","textDecoration":"none"}}  href="https://harish-verma.000webhostapp.com/Harish's-Resume.pdf" target="_blank">
                            My Resume
                        </a>
                    </button>
                </div>
                <div className="intro_img" data-aos="zoom-in-up" data-aos-duration="1000">
                </div>
            </div>
        </section>
    )
}
export default About