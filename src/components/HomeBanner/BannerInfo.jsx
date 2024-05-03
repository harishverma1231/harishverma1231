import TypeIt from "typeit-react";

const BannerInfo = () => {
  return (
    <div className="main_info_text App">
        <p className="info_text">
          <TypeIt
              options={{ loop: false,speed: 30, }}
              getBeforeInit={(instance) => {
                  instance.type(`<span class="info_text_small">Hi There!, I'm <br></span>Harsh Verma`).move(-8).type('i',{delay:"10"}).move(null, { to: "END",cursorSpeed:150 }).type(`.<br> <span class="info_text_small">I'm a <span>`).type('Shopify Developer').pause(50).delete(9).pause(25).type('<span class="info_text_small">and</span> React JS Developer.').pause(100);
                  return instance;
              }}
          />
        </p>
    </div>
  );
};
export default BannerInfo;