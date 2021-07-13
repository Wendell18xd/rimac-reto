import React from "react";
import llantarobada from "../../img/llantarobada.png";
import felchaarriba from "../../img/flechaarriba.svg";
import choque from "../../img/choque.png";
import atropello from "../../img/atropello.png";

export const AddorRemove = () => {
  return (
    <div className="armaplan-left-addorremove">
      {/* titulo */}
      <div className="armaplan-left-addorremove-titulo">
        <h1>Agrega o quita coberturas</h1>
      </div>
      {/* Opciones */}
      <div className="armaplan-left-addorremove-options">
        <div className="armaplan-left-addorremove-options__auto activeclassoptions">
          <p>Protege a tu auto</p>
        </div>
        <div className="armaplan-left-addorremove-options__rodean ">
          <p>Protege a los que te rodean</p>
        </div>
        <div className="armaplan-left-addorremove-options__plan">
          <p>mejora tu plan</p>
        </div>
      </div>
      {/* subopciones */}
      <div className="armaplan-left-addorremove-suboptions">
        <div className="armaplan-left-addorremove-suboptions__llanta">
          {/* header titulo botton */}
          <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton">
            <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo">
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__img">
                <img src={llantarobada} alt="llantarobada" />
              </div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__texto">
                <p>Llanta robada</p>
              </div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__vermas">
                <input type="checkbox" checked={true} onChange={() => {}} />
              </div>
            </div>
            <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__quitar">
              <input
                type="checkbox"
                name="llanta_checkbox"
                checked={true}
                onChange={() => {}}
              />
              <label htmlFor="llanta_checkbox"></label>
            </div>
            <div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__botton">
                <input
                  type="checkbox"
                  id="switch-label-llanta"
                  checked={true}
                  onChange={() => {}}
                />
                <label
                  className="labelswitch"
                  htmlFor="switch-label-llanta"
                ></label>
              </div>
            </div>
          </div>
          {/* texto */}
          <div className="armaplan-left-addorremove-suboptions__llanta-parrafo">
            <p>
              He salido de casa a las cuatro menos cinco para ir a la academia
              de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
              bici, na llego a la academia que está en el centro del pueblo en
              una plaza medio-grande y dejo donde siempre la bici atada con una
              pitón a un sitio de esos de poner las bicis
            </p>
          </div>
          <div className="armaplan-left-addorremove-suboptions__llanta-botton">
            <p>ver menos</p>
            <div className="armaplan-left-addorremove-suboptions__llanta-botton-img">
              <img src={felchaarriba} alt="^" />
            </div>
          </div>
        </div>
        {/*  */}
        <hr className="armaplan-left-addorremove-suboptions-hr" />
        {/*  */}
        <div className="armaplan-left-addorremove-suboptions__choque">
          <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton">
            <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo">
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__img">
                <img src={choque} alt="choque" />
              </div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__texto">
                <p> Choque y/o pasarte la luz roja </p>
              </div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__vermas">
                <input type="checkbox" />
              </div>
            </div>
            <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__quitar">
              <input type="checkbox" id="choque_checkbox" />
              <label htmlFor="choque_checkbox"></label>
            </div>
            <div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__botton">
                <input type="checkbox" id="switch-label-choque" />
                <label
                  className="labelswitch"
                  htmlFor="switch-label-choque"
                ></label>
              </div>
            </div>
          </div>
          <div className="armaplan-left-addorremove-suboptions__llanta-botton vermasclass">
            <p>ver más</p>
            <div className="armaplan-left-addorremove-suboptions__llanta-botton-img">
              <img src={felchaarriba} alt="^" />
            </div>
          </div>
        </div>
        {/*  */}
        <hr className="armaplan-left-addorremove-suboptions-hr" />
        {/*  */}
        <div className="armaplan-left-addorremove-suboptions__atropello">
          <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton">
            <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo">
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__img">
                <img src={atropello} alt="llantarobada" />
              </div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__texto">
                <p>Atropello en la vía Evitamiento </p>
              </div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__titulo__vermas">
                <input type="checkbox" />
              </div>
            </div>
            <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__quitar">
              <input type="checkbox" id="atropello_checkbox" />
              <label htmlFor="atropello_checkbox"></label>
            </div>
            <div>
              <div className="armaplan-left-addorremove-suboptions__llanta-titulobotton__botton">
                <input type="checkbox" id="switch-label-atropello" />
                <label
                  className="labelswitch"
                  htmlFor="switch-label-atropello"
                ></label>
              </div>
            </div>
          </div>
          <div className="armaplan-left-addorremove-suboptions__llanta-botton vermasclass">
            <p>ver más</p>
            <div className="armaplan-left-addorremove-suboptions__llanta-botton-img">
              <img src={felchaarriba} alt="^" />
            </div>
          </div>
        </div>
        {/*  */}
        <hr className="armaplan-left-addorremove-suboptions-hr" />
        {/*  */}
      </div>
    </div>
  );
};
