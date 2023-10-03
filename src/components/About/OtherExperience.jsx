function OtherExperience() {
    return (
        <section className="section_others container">
            <div className="section_others_heading">
                <p>OTHER</p>
                <h2>Details</h2></div>
            <div className="section_more_details">

                <div className="g_background" data-aos="zoom-in-right" data-aos-duration="1000">
                    <div className="section_o_experience experience_g_bg">
                        <h2>Courses</h2>
                        <div className="internship_block">
                            <p className="others_heading">Php Developer</p>
                            <div className="internship">
                                <img src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/cs.png?v=1695448628"></img>
                                <p>CS Infotech, Chandigarh</p>
                            </div>
                            <p className="php_overview">In my 6-month PHP internship, I acquired proficiency in PHP for server-side scripting, JavaScript/jQuery for enhancing interactivity, Ajax for asynchronous data exchange, HTML for web page structure, and MySQL for database management.</p>
                        </div>
                    </div>
                </div>

                <div className="g_background" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="education experience_g_bg">
                        <h2>Education</h2>
                        <div className="education_blocks">
                            <p className="others_heading">Diploma in Electrical Engineering.</p>
                            <p className="education_location">Shaheed Udham Singh College of Engineering & Technology - Mohali, Punjab.</p>
                        </div>
                        <div className="education_blocks">
                            <p className="others_heading higher_e">Higher Secondary</p>
                            <p className="education_location">Government Model Senior Secondary School, 3B1 - Mohali, Punjab.</p>
                        </div>
                    </div>
                </div>

                <div className="g_background" data-aos="zoom-in-left" data-aos-duration="1000">
                    <div className="address experience_g_bg">
                        <h2>PERMANENT ADDRESS</h2>
                        <div className="address_div">
                            <div className="address_heading">
                                <p>Address:</p>
                                <p>Pincode:</p>
                                <p>City:</p>
                                <p>State:</p>
                            </div>
                            <div className="address_details">
                                <p>Sector-68</p>
                                <p>140308</p>
                                <p>Mohali</p>
                                <p>Punjab</p>
                            </div>
                        </div>
                        <button  className="btn maps_btn">
                            <a style={{"color":"inherit","textDecoration":"none"}} href="https://www.google.com/maps/@30.689006,76.7265042,16z?entry=ttu" target="_blank">Visit on Google Maps</a>
                        </button>
                    </div>
                </div>
            </div>

        </section>


    )
}
export default OtherExperience