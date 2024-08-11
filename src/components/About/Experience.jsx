function Experience() {
    return (
        <section className="section_experience container">
            <div className="section_experience_heading">
                <p>WHAT I HAVE DONE SO FAR</p>
                <h2>Work Experience.</h2>
            </div>
            <div className="section_experience_block">
                <div className="experience rejoin" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className="experience_g_bg">
                        <div className="experience_company">
                            <img className="company_logo" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/logo-clr-1_1.png?v=1714758954"></img>
                            <p className="company_name">Rejoin Web Solution</p>
                            <p className="experience_time">10/23 - Present</p>
                        </div>
                        <ul className="experience_tasks">
                            <li>Developed a private Shopify app featuring an AI chatbot powered by ChatGPT.</li>
                            <li>Customized a Shopify public app to meet specfic client requirements</li>
                        </ul>
                    </div>
                </div>
                <div className="experience iwebcode" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" >
                    <div className="experience_g_bg">
                        <div className="experience_company">
                            <img className="company_logo" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/iwebcode.png?v=1695448628"></img>
                            <p className="company_name">Iwebcode</p>
                            <p className="experience_time">8/22 - 10/23</p>
                        </div>
                        <ul className="experience_tasks">
                            <li>Developed custom Shopify apps to utilize Shopify's API for enhanced functionality.</li>
                            <li>Integrated third-party APIs and tools to add features and improve user experience.</li>
                            <li>Experienced in converting Figma/PSD to HTML, ensuring responsiveness, and pro cient in CSS animations and media queries.</li>
                        </ul>
                    </div>
                </div>
                <div className="experience fabcode" data-aos="fade-down" data-aos-offset="300">
                    <div className="experience_g_bg">
                        <div className="experience_company">
                            <img className="company_logo" src="https://cdn.shopify.com/s/files/1/0600/4038/0594/files/photo.jpg?v=1722259130"></img>
                            <p className="company_name">Fabcode It solutions</p>
                            <p className="experience_time">02/21 - 06/22</p>
                        </div>
                        <ul className="experience_tasks">
                            <li>Developed custom features and functionalities using Shopify's Liquid templating language, HTML, CSS, and JavaScript/Jquery.</li>
                            <li>Enhanced Shopify store performance by optimizing code, compressing images, enabling lazy loading, reducing file sizes.</li>
                            <li>Customized Shopify themes to match the client's branding, including layout, colours, fonts, and imagery</li>
                            <li>Fixed bugs for smooth store operation and good user experience. Tested and analyzed logs to prevent issues. Collaborated with team to solve complex problems.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience