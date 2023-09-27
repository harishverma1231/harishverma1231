import TypeIt from "typeit-react";

export default () => {
  return (
    <div className="main_info_text App">
        <p className="info_text">
          <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                  instance.type(`<span class="info_text_small">Hi There!, I'm <br></span>Harsh Verma`).move(-8).type('i',{delay:"100"}).move(null, { to: "END",cursorSpeed:150 }).type(`.<br> <span class="info_text_small">I'm a <span>`).type('Shopify Developer').pause(550).delete(9).pause(250).type('<span class="info_text_small">and</span> React JS Developer.').pause(1300);
                  return instance;
              }}
          />
        </p>
    </div>
  );
};