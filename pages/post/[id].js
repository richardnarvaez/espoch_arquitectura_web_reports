import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import axios from "axios";

import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import ProfileChip from "../../components/views/profile_chip";

export default function Post() {
  const router = useRouter();
  const { id } = router?.query;

  const [data, setData] = useState();

  useEffect(() => {
    if (id)
      axios({
        method: "get",
        url: `https://web-reports.vercel.app/api/${id}`,
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log("ERROR: ", err);
        });
  }, [id]);

  if (data)
    return (
      <div className="container">
        <Head>
          <title>Post</title>
        </Head>

        <main>
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <h2
              style={{
                borderRadius: 999,
                background: "#000",
                fontWeight: "bold",
                width: 150,
                display: "inline-block",
                padding: 16,
                color: "#fff",
                fontSize: "0.5rem",
              }}
            >
              TRABAJO EN CLASE
            </h2>
          </div>

          <h1 style={{ marginBottom: 56, textAlign: "center" }}>
            {data.title}
          </h1>

          {/* {data.list.map((item, i) => {
            return (
              <article
                key={i}
                style={{
                  margin: 16,
                  borderRadius: 16,
                  boxShadow: "0 2px 2px #0000001a",
                  padding: 16,
                }}
              >
                <p>titulo: {item.title}</p>
                <p>{item.description}</p>
              </article>
            );
          })} */}

          <div className="sec-169" style={{ paddingTop: "52%" }}>
            <img
              className="sec-img"
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
              }}
              src="https://i.ytimg.com/vi/-D3v97XKJuI/maxresdefault.jpg"
            />
          </div>

          <div className="mt-5">
            <h3>Que es un dispositivo de entrada</h3>
            <p>
              Definicion: Aquellos componentes que permiten ingresaar
              informacion de cualquier tipo a nuestro PC
            </p>

            <p style={{ marginTop: 16, fontWeight: "bold" }}>
              TENEMOS CONEXIONES
            </p>
            <p>USB 3.0 - 5 Gbps (625 MB/s)</p>

            <p>USB 3.1 - 10 Gbps (1375 MB/s)</p>

            <p>USB C - 20 Gbps (2500 MB/s)</p>
            <div className="d-flex mt-5" style={{ position: "relative" }}>
              <div className="col-4" style={{ borderRadius: 16 }}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 2px 2px #0000001a",
                  }}
                  className="sec-min-img"
                  src="https://pbs.twimg.com/media/EFe6z7zXoAMWGNL.jpg"
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
                  src="https://images-na.ssl-images-amazon.com/images/I/51jFMFlCFkL._AC_SY450_.jpg"
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
                  src="https://m.media-amazon.com/images/I/51oARkPxCjL.jpg"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3>PRDUCTOS SELECCIONADOS</h3>
            <p>
              Para este articulo hemos seleccionado tres articulos en cada una
              de las categorias que nos parecio mas importante.
            </p>
            <div className="row mt-5">
              {data.productos.map((item, i) => {
                return (
                  <a
                    className="col-4"
                    href={item.link}
                    target="_blank"
                    key={i}
                    style={{
                      boxShadow: "0 2px 2px #0000001a",
                      paddingTop: "30%",
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={item.photo}
                      style={{
                        width: "100%",
                        height: "40%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        height: "100%",
                      }}
                    />
                    <div
                      style={{
                        zIndex: 2,
                        background: "#0000007a",
                        position: "absolute",
                        top: 0,
                        height: "100%",
                        left: 0,
                        width: "100%",
                        padding: 16,
                        color: "#fff",
                      }}
                    >
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="d-flex mt-5" style={{ alignItems: "center" }}>
            <ProfileChip name="Richard Vinueza" code="6745" />
            <div
              style={{ width: "100%", height: 1, background: "#ececec" }}
            ></div>
          </div>

          <Section1 />

          <div className="d-flex mt-5" style={{ alignItems: "center" }}>
            <ProfileChip
              name={data.author[1].name}
              code={data.author[1].code}
            />
            <div
              style={{ width: "100%", height: 1, background: "#ececec" }}
            ></div>
          </div>

          <Section2 />

          <div className="d-flex mt-5" style={{ alignItems: "center" }}>
            <ProfileChip
              name={data.author[2].name}
              code={data.author[2].code}
            />
            <div
              style={{ width: "100%", height: 1, background: "#ececec" }}
            ></div>
          </div>
          <Section3 />

          <div className="d-flex mt-5" style={{ alignItems: "center" }}>
            <ProfileChip name="Maria Jose Tapia" code="6573" />
            <div
              style={{ width: "100%", height: 1, background: "#ececec" }}
            ></div>
          </div>
          <Section4 />

          <div className="d-flex mt-5" style={{ alignItems: "center" }}>
            <ProfileChip name="Wilson Lluilema" code="6699" />
            <div
              style={{ width: "100%", height: 1, background: "#ececec" }}
            ></div>
          </div>
          <Section5 />

          <div style={{ height: 200 }}></div>
        </main>
      </div>
    );
  else return <> CAARGANDO... </>;
}
