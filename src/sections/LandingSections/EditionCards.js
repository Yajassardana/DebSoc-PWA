import React from "react";
import { Row, Col } from "reactstrap";

const EditionCards = () => {
  const [mob, setMob] = React.useState(true);
  React.useEffect(() => {
    const a = window.innerWidth;
    if (a <= 900) {
      setMob(true);
    } else {
      setMob(false);
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if (b <= 900) {
        setMob(true);
      } else {
        setMob(false);
      }
    });
  },[mob]);
  if (mob === false) {
    return (
      <>
        <div
          className="section section-cards"
          style={{
            paddingTop: "0rem",
          }}
        >
          <div className="codrops-header">
            <Row>
              <Col lg="4" md="6">
                <div className="section-description">
                  <img
                    width="10%"
                    style={{
                      minWidth: "4rem",
                    }}
                    src={require("assets/img/icons/newspaper.png")}
                    alt="..."
                  />
                  <h2
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "8rem !important",
                    }}
                  >
                    <span style={{ color: "#040403" }}>
                      <strong>Latest</strong>
                    </span>{" "}
                    <span style={{ color: "#6bd098" }}>
                      <strong>Editions</strong>
                    </span>
                  </h2>
                  {/* #F7717 */}
                  <h6 className="category">By DTU Times </h6>
                  <h5
                    style={{
                      fontSize: "1.1rem",
                      color: "#494850",
                      fontWeight: "400 !important",
                    }}
                    className="description"
                  >
                    The DTU Snapshot at a glance. Check out our latest editions,
                    containing interviews of the dignitaries and the celebrities
                    that visited DTU to the news of societies, faculties,
                    students and the University itself. And while you are at it
                    be sure to visit the Pulse section, filled to the brim with
                    the creativity of some of the most talented writers of our
                    University.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          <section className="section-intro">
            <div className="isolayer isolayer--deco1 isolayer--shadow js">
              <ul className="grid grid--loaded">
                <li className="grid__item first-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //1 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/740/conversions/Screen-Shot-2020-03-07-at-2.16.20-PM-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item second-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //2 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/632/conversions/48-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item third-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //7 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/652/conversions/43-cover.jpg"
                    />
                  </a>
                </li>

                {/* <li className="grid__item fourth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/47.png"
                  />
                </a>
              </li> */}
                <li className="grid__item fifth-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //5 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/650/conversions/45-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item sixth-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //6 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/651/conversions/44-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item seventh-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //3 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/648/conversions/47-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item eight-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //4 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/649/conversions/46-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item ninth-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //8 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/653/conversions/42-cover.jpg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="section section-cards"
          style={{
            paddingTop: "0rem",
            minHeight: "900px !important",
          }}
        >
          <div className="codrops-header">
            <Row>
              <Col lg="4" md="6">
                <div className="section-description">
                  <img
                    width="10%"
                    style={{
                      minWidth: "3rem",
                    }}
                    src={require("assets/img/icons/newspaper.png")}
                    alt="..."
                  />
                  <h2
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "8rem !important",
                    }}
                  >
                    <span style={{ color: "#040403" }}>
                      <strong>Latest</strong>
                    </span>{" "}
                    <span style={{ color: "#6bd098" }}>
                      <strong>Editions</strong>
                    </span>
                  </h2>
                  {/* #F7717 */}
                  <h6 className="category">By DTU Times </h6>
                  <h5
                    style={{
                      fontSize: "1.1rem",
                      color: "#494850",
                      fontWeight: "400 !important",
                    }}
                    className="description"
                  >
                    The DTU snapshot at a glance. Check out our latest editions
                    for a comprehensive summary of the happenings over the past
                    quarter.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          <section className="section-intro">
            <div className="isolayer isolayer--deco1 isolayer--shadow js">
              <ul className="grid grid--loaded">
                <li className="grid__item first-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/*1*/}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/740/conversions/Screen-Shot-2020-03-07-at-2.16.20-PM-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item second-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //2 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/632/conversions/48-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item third-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //7 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/652/conversions/43-cover.jpg"
                    />
                  </a>
                </li>

                {/* <li className="grid__item fourth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/47.png"
                  />
                </a>
              </li> */}
                <li className="grid__item fifth-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //5 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/650/conversions/45-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item sixth-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //6 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/651/conversions/44-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item seventh-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //3 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/648/conversions/47-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item eight-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //4 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/649/conversions/46-cover.jpg"
                    />
                  </a>
                </li>
                <li className="grid__item ninth-card">
                  <a
                    className="grid__link"
                    href="/editions"
                    //   onClick={e => e.preventDefault()}
                  >
                    {/* //8 */}
                    <img
                      alt="..."
                      className="grid__img layer"
                      src="https://nix.dtutimes.com/storage/653/conversions/42-cover.jpg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  }
};
export default EditionCards;
