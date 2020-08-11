const Section5 = () => {
  return (
    <>
      {/* ARTICULO EXTRAS */}
          {/* ARTICULO extra 1  */}
          <article>
              <p className="sec-title">DISPOSITIVOS EXTRAS</p>
              <p>
                  Como la tecnologia avanaza a varios niveles ,los dispositivos de entrada 
                  ya no se limitan solo a los convencionales ,ahora incluso de adapta o se
                  ocupa mas aparte del mismo ,tales dispositivos seran presentados .
              </p>
              
              <div className="sec-169" style={{ paddingTop: "52%" }}>
          <img
            className="sec-img"
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
            }}
            src="https://img.menzig.tech/a/1000/1026-h0.jpg"
          />
        </div>

              <p className="sec-sub-title"> Entre los mejores dispositivos extras y mas utilizados </p>
              <p className="sec-sub-title">Escaner ADS-1700W </p>
              <div style={{ display: "flex", marginTop: 32 }}>
                  <div className="col-12 col-md-4">

                      <p>
                          Facilita la forma de almacenar los documentos cotidianos
                          con el ADS-1700W. Diseñado para oficinas donde el
                          espacio es limitado, el escáner compacto ADS-1700W es
                          una herramienta potente y versátil. Gracias a su
                          conectividad inalámbrica, es posible ubicarlo donde más
                          convenga.
            </p>
                  </div>
                  <div className="col-12 col-md-8 d-flex">
                      <div
                          style={{
                              borderRadius: 16,
                              justifyContent: "center",
                              paddingTop: "calc(150% * 9/16)",
                              overflow: "hidden",
                              width: "100%",
                              position: "relative",
                              boxShadow: "0 2px 2px #0000001a",
                          }}
                      >
                          <img
                              width="100%"
                              style={{ position: "absolute", top: 0, height: "101%" }}
                              src="https://http2.mlstatic.com/brother-ads-1700w-escaner-color-doble-cara-wifi-D_NQ_NP_656270-MCO29461447924_022019-O.jpg"
                          />
                      </div>
                  </div>
              </div>

              {/* Extra 2  */}  

              <p className="sec-sub-title">Elgato Stream Deck XL</p>
              <div style={{ display: "flex", marginTop: 32 }}>
                  <div className="col-12 col-md-8">
                      <div
                          style={{
                              borderRadius: 16,
                              justifyContent: "center",
                              paddingTop: "calc(150% * 9/16)",
                              overflow: "hidden",
                              width: "100%",
                              position: "relative",
                              boxShadow: "0 2px 2px #0000001a",
                          }}
                      >
                          <img
                              width="100%"
                              style={{ position: "absolute", top: 0, height: "101%" }}
                              src="https://www.profesionalreview.com/wp-content/uploads/2019/06/stream-deck-xl-review02.jpg"
                          />
                      </div>
                  </div>
                  <div className="col-12 col-md-4">
                      <p>
                          Stream Deck XL pone en tus manos aún más control creativo. Disfrutarás de un mayor control profesional
                          para optimizar tu contenido. Más acceso a integraciones que te ahorran tiempo. Más flexibilidad para 
                          aumentar la calidad de tus producciones. Más de todas esas cosas que aportan frescura a tu stream y 
                           enganchan al público.
                  </p> 

                      
                  </div>
              </div>

              {/* extra  3  */}
              <p className="sec-sub-title">Gamepad  </p>
              <div style={{ display: "flex", marginTop: 30 }}>
                  <div className="col-12 col-md-4">

                      <p>
                          La durabilidad y precisión de un gamepad.
                          Usa un dispositivo de juego tipo consola 
                          para PC y juega como quieras.
            </p>
                     
                  </div>
                  <div className="col-12 col-md-8 d-flex">
                      <div
                          style={{
                              borderRadius: 16,
                              justifyContent: "center",
                              paddingTop: "calc(150% * 9/16)",
                              overflow: "hidden",
                              width: "100%",
                              position: "relative",
                              boxShadow: "0 2px 2px #0000001a",
                          }}
                      >
                          <img
                              width="100%"
                              style={{ position: "absolute", top: 0, height: "101%" }}
                              src="https://i.blogs.es/21f6e6/mandos/1366_2000.jpeg"
                          />
                      </div>
                  </div>
              </div>
              
          </article>
    </>
  );
};

export default Section5;
