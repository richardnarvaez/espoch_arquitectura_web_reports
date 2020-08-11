import "./section1.module.css";
const Section1 = () => {
  return (
    <>
      <article>
        <div className="sec-169">
          <div
            style={{
              background: "linear-gradient(0deg, #00000070, transparent)",
              color: "#fff",
              padding: 16,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 999,
              position: " absolute",
            }}
          >
            <p className="sec-title">Teclados</p>
            <p className="sec-description" style={{ color: "#fff" }}>
              Elemento fundamental para el uso del PC ya que sin el no se le
              podran enviar instrucciones a tu ordenador.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>Name</p>
                <p>$3500</p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=u3Fy4PkpTVs"
                target="_blank"
              >
                VER VIDEO
              </a>
            </div>
          </div>

          <img
            style={{ position: "absolute", top: 0, height: "100%" }}
            className="sec-img"
            src="https://cdn.vox-cdn.com/thumbor/KzeuDJ3s0X3GmgxUJKqoyfTXKHQ=/0x0:2313x1211/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19655045/tht.png"
          />
        </div>

        <div>
          <div className="product-def">
            <div>
              <p className="sec-sub-title">WISFOX Full-Size</p>
              <p className="sec-post">
                Empezamos con los mas baratos, y los que veriamos en la mayoria
                de ocasiones en centros educativos. O en paquetes de regalo que
                llegan con la compra del PC.
              </p>

              <p className="sec-post">
                Normalmente de MEMBRANA o mecanicos de BAJA calidad y mala
                contrucción.
              </p>

              <div className="sec-169" style={{ paddingTop: "20%" }}>
                <img
                  className="sec-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="https://m.media-amazon.com/images/I/71+DZvi3dGL._AC_UY436_FMwebp_QL65_.jpg"
                />
              </div>

              <div className="sec-169" style={{ paddingTop: "20%" }}>
                <img
                  className="sec-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="https://techguided.com/wp-content/uploads/2018/09/Mechanical-Switch-Comparison.gif"
                />
              </div>

              <div className="sec-169" style={{ paddingTop: "20%" }}>
                <img
                  className="sec-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                  }}
                  src="https://i0.wp.com/keyboardkings.com/wp-content/uploads/2020/03/Are-Membrane-Keyboards-Linear-or-Tactile.jpg?fit=800%2C583&ssl=1"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="product-def">
            <div>
              <p className="sec-sub-title">Keychron K6</p>
              <p className="sec-post">
                En esta gama de precios nos podemos encontrar con el MAgic
                Keyboard o el Keychron K6 que normalmente son utilizados para
                AMBIENTES profesionales.
              </p>

              <div className="sec-169" style={{ paddingTop: "50%" }}>
                <img
                  className="sec-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                  }}
                  src="https://underkg.co.kr:44391/files/attach/images/118/547/681/002/9dcd5ad6166dd2af86567a1c24cc2ce8.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="product-def">
            <div>
              <p className="sec-sub-title">TECLADOS PERSONALIZADOS</p>
              <p className="sec-post">
                Aquí ya entramos en un terreno donde los precios pueden rondar
                los miles de dólares y normalmente son para uso profesional o
                competitivo en muchos casos
              </p>

              <div className="sec-169" style={{ paddingTop: "50%" }}>
                <img
                  className="sec-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                  }}
                  src="  https://cdn.vox-cdn.com/thumbor/KzeuDJ3s0X3GmgxUJKqoyfTXKHQ=/0x0:2313x1211/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19655045/tht.png"
                />
              </div>

              <p className="sec-post mt-4">
                Aqui se abre un mundo completamente diferente, ya que pueden
                existir millones de variantes. Pero los teclados pueden ir desde
                los 200$ hasta facilmente tocar los 10mil$
              </p>

              <p style={{fontWeight: "bold", marginTop: 16}}>KEYCAPS & CABLES</p>
              <p className="sec-post">
                El nivel de personalizacion y los precios pueden llegar a ser bastante sorprendentes y a pesar de que algunos no son muy funcionales suelen ser
                bastante vistosos y divertidos.
              </p>
            </div>

            <div className="d-flex mt-5" style={{ position: "relative" }}>
              <div className="col-4" style={{ borderRadius: 16 }}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 2px 2px #0000001a",
                  }}
                  className="sec-min-img"
                  src="https://hardzone.es/app/uploads-hardzone.es/2020/04/Keycaps-Pok%C3%A9mon.jpg"
                />
              </div>
              <div className="col-4" style={{ borderRadius: 16 }}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 2px 2px #0000001a",
                  }}
                  className="sec-min-img"
                  src="https://www.alfabetajuega.com/wp-content/uploads/2019/11/pokemon-teclas-ordenador.jpg"
                />
              </div>
              <div className="col-4" style={{ borderRadius: 16 }}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 2px 2px #0000001a",
                  }}
                  className="sec-min-img"
                  src="https://i.pinimg.com/originals/df/a4/9d/dfa49d2d8d19d8b78f300e6109f2d428.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
        <p style={{fontWeight: "bold", marginTop: 16}}>Comparacion de sonido</p>
          

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XlCzcJNq9co"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ display: "flex", marginTop: 32 }}>
          <div className="col-12 col-md-6">
          <p style={{fontWeight: "bold", marginTop: 16}}>Cual es el mejor tecladao para un PROGRAMADOR</p>
            <p>
              Una pregunta, que quizas en el ambito profesional es muy comunun
              sonbre todo en profesiones en las que el teclado es una parte
              fundamental, y de uso diario.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div
              style={{
                borderRadius: 16,
                justifyContent: "center",
                paddingTop: "calc(100% * 9/16)",
                overflow: "hidden",
                width: "100%",
                position: "relative",
                boxShadow: "0 2px 2px #0000001a",
              }}
            >
              <iframe
                width="100%"
                style={{ position: "absolute", top: 0, height: "101%" }}
                src="https://www.youtube.com/embed/VlvpEL80Jik"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Section1;
