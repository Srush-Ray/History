import React from "react";
import "./History.css";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Register from "./Register.svg";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "transparent",
  },
}));

// const classes = useStyles();

class History extends React.Component {
  constructor() {
    super();
    this.state = {
      text: [
        <p className="History__lightColor History__text1">
          National <br /> Integrated Medical
          <p style={{ color: "#e0a984" }}>Association</p>
        </p>,
        <p className="History__textFont" style={{ color: "#FFEADC" }}>
          The National Integrated Medical Association (NIMA) is an{" "}
          <span style={{ color: "#FF812D" }}>
            {" "}
            Indian Non-governmental organization established in 1948.
          </span>{" "}
          Integrated medical education was started nearly
          <br />
          <span className="History__75" style={{ color: "#FF812D" }}>
            {" "}
            75 <span style={{ fontSize: "16px" }}> years ago </span>{" "}
          </span>
          , and though the graduates coming out of these courses proved very
          successful practitioners ideal for the conditions of this country.
        </p>,
        <p className="History__textFont" style={{ color: "#FFEADC" }}>
          The vested interests from both
          <span style={{ color: "#FF812D" }}>
            {" "}
            modern medical & pure Ayurved camps,
          </span>{" "}
          <span
            className="History__text2"
            style={{ color: "#F9A162", fontWeight: "500" }}
          >
            misguided the authorities{" "}
            <span
              className=""
              style={{ color: "#F9A162", fontWeight: "normal" }}
            >
              and
            </span>{" "}
            created various problems
          </span>{" "}
          <span className="History__textFont" style={{ color: "#FFEADC" }}>
            for integrated practitioners from the very beginning. Gradually the
            integrated medical community started organising itself to face the
            problems in an organised manner
          </span>
        </p>,
        <p style={{ color: "#ffdfc9", fontSize: "42px" }}>
          All <br /> India <p style={{ color: "#f9b384" }}>Conference</p>{" "}
        </p>,
        <p className="History__text3">
          The first major attempt was of the establishment of National Medical
          Association of India in{" "}
          <span
            className="History__75"
            style={{ color: "#FF812D", lineHeight: "1.5" }}
          >
            {" "}
            1947
          </span>{" "}
          , which soon spread its activities in northern states of the country.
          From
          <span
            className="History__75"
            style={{ color: "#FF812D", lineHeight: "1.5" }}
          >
            {" "}
            1953
          </span>{" "}
          onwards other Associations of Integrated Practitioners were
          established in the states of Bombay, Mysore and madras,etc. with the
          names as{" "}
          <span style={{ color: "#F9A162" }}>
            Bombay State Integrated Medical Association
          </span>{" "}
          as{" "}
          <span style={{ color: "#FF812D" }}>
            Maharashtra State Integrated Medical Association & Gujrat State
            Integrated Medical Association, Integrated Associations of Mysore,
            etc.
          </span>
        </p>,
        <p style={{ fontSize: "13px" }}>
          The attempt to bring all these associations together, materialised in
          <span
            className="History__75"
            style={{ color: "#FF812D", lineHeight: "1.5" }}
          >
            {" "}
            1966{" "}
          </span>
          at
          <span style={{ color: "#F9A162", fontSize: "17px" }}>
            {" "}
            5th AIC{" "}
          </span>{" "}
          of NIMA Conference under the Presidentship of
          <span style={{ color: "#FF812D", fontSize: "17px" }}>
            {" "}
            Dr Panna Lal Varshney
          </span>{" "}
          and at the{" "}
          <span style={{ color: "#F9A162", fontSize: "17px" }}>7th</span> All
          India Conference of NIMA held at Bhopal on
          <span style={{ color: "#FF812D", fontSize: "17px" }}> 1.2.1969 </span>
          the Constitution of the National Integrated Medical Association was
          adopted and <br />
          thus{" "}
          <span style={{ color: "#FF812D", fontSize: "26px", lineHeight: "2" }}>
            {" "}
            NIMA
          </span>{" "}
          <span style={{ color: "#F9A162", fontSize: "17px" }}>was born.</span>
        </p>,
        <p>
          <p style={{ color: "#ffdfc9", fontSize: "70px" }}> 1st</p>
          <span style={{ color: "#e0a984", fontSize: "35px" }}>Meeting</span>
        </p>,
        <p className="textFont" style={{ color: "#ffdfc9" }}>
          The first meeting of the NIMA Central Council was held at Delhi on
          6.4.1969 which elected Dr P.N.Awasthi (Bombay) as the president and
          Dr.K.S.Potdar (Delhi) as the General Secretary of NIMA.
        </p>,
        <p
          style={{
            color: "darkorange",
            fontSize: "44px",
            margin: "0px",
            padding: "0px",
          }}
        >
          Regi
          <span style={{ color: "#e0a984", margin: "0px", padding: "0px" }}>
            stration
          </span>
        </p>,
        <p
          style={{
            color: "#ffdfc9",
            fontSize: "13px",
          }}
          // className="textFont"
        >
          Today NIMA is the only all India organisation of the
          <span style={{ color: "#F9A162" }} className="History__text4">
            {" "}
            institutionally trained and qualified practitioners{" "}
          </span>
          of Indian Systems of Medicine, who have undergone the conjoint study
          of Ayurveda, Unani, Siddha & modern medicine, for a period of at least
          four years after Inter Science or XIIth std (10 + 2 years education).
          The Association has well organised branches in{" "}
          <span style={{ color: "#F9A162", fontSize: "18px" }}>
            {" "}
            <span style={{ color: "#E77428" }} className="History__17">
              17
            </span>{" "}
            states and in union territories{" "}
          </span>
          of Delhi & Chandigarh.
        </p>,
        <p style={{ fontSize: "44px" }}>
          <span style={{ color: "orange" }}>Branch</span>es
        </p>,
        <p
          style={{
            color: "#ffdfc9",
          }}
          className="History__textFont"
        >
          Today NIMA is the only all India organisation of the institutionally
          trained and qualified practitioners of Indian Systems of Medicine, who
          have undergone the conjoint study of Ayurveda, Unani, Siddha & modern
          medicine, for a period of at least four years after Inter Science or
          XIIth std (10 + 2 years education). The Association has well organised
          branches in 17 states and in union territories of Delhi & Chandigarh.
        </p>,
        <p>
          <span
            style={{ color: "#ffdfc9", fontSize: "100px", lineHeight: "1.2" }}
          >
            lll
          </span>
          <br />
          <span
            style={{ color: "#ffdfc9", fontSize: "30px", lineHeight: "1.2" }}
          >
            Tier
          </span>{" "}
          <br />
          <span
            style={{ color: "#ffb482", fontSize: "30px", lineHeight: "1.2" }}
          >
            System of{" "}
          </span>{" "}
          <span style={{ color: "#ff812d", fontSize: "30px" }}>NIMA </span>
        </p>,
        <p style={{ color: "#ffdfc9", fontSize: "12px" }}>
          <p style={{ fontWeight: "bold", color: "#FF812D", fontSize: "17px" }}>
            The Association has a three tier system in its working
          </p>
          Local/District Branch.
          <br />
          <br />
          State Branches/Territorial Branches.
          <br />
          <br />
          Central Council.
        </p>,
        <p className="History__textFont">
          Minimum{" "}
          <span
            style={{ color: "#E77428", fontWeight: "bold" }}
            className="History__17"
          >
            11
          </span>{" "}
          eligible integrated practitioners from{" "}
          <span style={{ color: "#E77428" }} className="History__17">
            any town/city/area
          </span>{" "}
          can come together and function locally as per the
          <span style={{ color: "#E77428", fontWeight: "bold" }}>
            {" "}
            Constitution of NIMA.
          </span>
          <br />
          <br />
          All{" "}
          <span style={{ color: "#E77428", fontSize: "19px" }}>
            Local/District
          </span>{" "}
          Branches in a state form a State Branch of NIMA, which is governed by
          its{" "}
          <span style={{ color: "#E77428", fontSize: "19px" }}>
            state council.
          </span>
        </p>,
        <p style={{ color: "#ffdfc9", fontSize: "14px" }} className="textFont">
          Local Branch Managing Committees send their representatives in
          proportion to the number of their members to the{" "}
          <span style={{ color: "#FF812D", fontSize: "20px" }}>
            State Council.
          </span>{" "}
          The State Council meets twice a year, elect its Office Bearers and
          carries out its duties for the entire State. The details regarding the
          working of the Local/District Branch and State Branches can be seen in
          the booklet of{" "}
          <span style={{ color: "#FF812D", fontSize: "20px" }}>
            By-Laws of NIMA
          </span>
        </p>,
        <p style={{ color: "#ffdfc9", fontSize: "14px" }}>
          <span style={{ color: "#FF812D", fontSize: "18px" }}>
            The Central Council
          </span>{" "}
          is formed by the representatives coming from all the State Councils
          <span style={{ color: "#FF812D", fontSize: "18px" }}>
            {" "}
            every year.
          </span>{" "}
          In proportion to their membership strength. The
          <span style={{ color: "#FF812D", fontSize: "18px" }}>
            {" "}
            STATE SECRETARY
          </span>{" "}
          is necessarily the first representative of the
          <span style={{ color: "#FF812D", fontSize: "18px" }}>
            {" "}
            State Branch
          </span>{" "}
          on the
          <span style={{ color: "#FF812D", fontSize: "18px" }}>
            {" "}
            Central Council.
          </span>{" "}
        </p>,
        <p style={{ color: "#FFEADC", fontSize: "14px" }}>
          The Central Council is the important body in which are vested the
          general control, management and direction of policy of the
          Association. The central council in its annual meeting elects the
          <span style={{ color: "#F79D60", fontSize: "19px" }}>
            {" "}
            Central Office bearers
          </span>{" "}
          who form the
          <span style={{ color: "#F79D60", fontSize: "18px" }}>
            {" "}
            Executive Committee
          </span>{" "}
          of NIMA which executes the programme laid down by the Central Council.
        </p>,
        <p style={{ color: "#ffdfc9", fontSize: "40px" }}>Membership</p>,
        <p style={{ fontSize: "13px", color: "#ffdfc9" }}>
          To bring financial stability and to have labour of workers on
          enrolments of annual members, the Association has laid stress on
          enrolling maximim
          <span style={{ color: "#FF812D", fontSize: "20px" }}>
            {" "}
            life members.
          </span>{" "}
          The life membership subscription is kept in
          <span style={{ color: "#F9A162", fontSize: "20px" }}>
            {" "}
            long term fixed deposit in a Nationalised Bank
          </span>{" "}
          and
          <span style={{ color: "#F9A162", fontSize: "20px" }}>
            {" "}
            the annual interest{" "}
          </span>
          accrued on it is distributed.
        </p>,
        <p style={{ fontSize: "14px" }}>
          The
          <span style={{ color: "#F9A162", fontSize: "22px" }}>
            {" "}
            Association has opened Associate Membership for non integrated{" "}
          </span>
          qualified practitioners who believe in integration. The Association
          year for Branches is from
          <br />
          <span style={{ color: "#FF812D", fontSize: "22px" }}>
            {" "}
            <span style={{ fontSize: "37px" }}>1</span> October{" "}
            <span style={{ fontSize: "14px" }}>to</span>{" "}
            <span style={{ fontSize: "37px" }}>30</span> September
          </span>
        </p>,
      ],
      currentText: 0,
      wheelCount: 0,
      scrollTop: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("wheel", this.scrollText);
  }
  componentWillMount() {
    window.addEventListener("wheel", this.scrollText);
  }
  scrollText = (event) => {
    if (
      event.deltaY < 0 &&
      this.state.currentText < this.state.text.length - 1
    ) {
      if (this.state.wheelCount === 50) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.add("animation");
        setTimeout(() => {
          para.classList.remove("animation");
          this.setState({ currentText: this.state.currentText + 1 });
          line.classList.add("lineAnimation");
          para.classList.add("animatebottom");
        }, 1000);
        line.classList.remove("lineAnimation");
      } else {
        this.setState({ wheelCount: this.state.wheelCount + 1 });
      }
    } else if (event.deltaY > 0 && this.state.currentText > 0) {
      if (this.state.wheelCount === 50) {
        this.setState({ wheelCount: 0 });
        const para = document.getElementById("paragraphContent");
        const line = document.getElementById("lineDivider");
        para.classList.remove("animatebottom");
        para.classList.add("animationFade");
        setTimeout(() => {
          this.setState({ currentText: this.state.currentText - 1 });
          para.classList.remove("animationFade");
          para.classList.add("animationTop");
          line.classList.add("lineAnimation");
        }, 1000);
        para.classList.remove("animationTop");
        line.classList.remove("lineAnimation");
      } else {
        this.setState({ wheelCount: this.state.wheelCount + 1 });
      }
    } else {
      this.setState({ currentText: this.state.currentText });
    }
  };

  shoot = (event) => {
    event.preventDefault();
    if (this.state.currentText > 0) {
      const para = document.getElementById("paragraphContent");
      const line = document.getElementById("lineDivider");
      para.classList.remove("animatebottom");
      para.classList.add("animationFade");
      setTimeout(() => {
        this.setState({ currentText: this.state.currentText - 1 });
        para.classList.remove("animationFade");
        para.classList.add("animationTop");
        line.classList.add("lineAnimation");
      }, 1000);
      para.classList.remove("animationTop");
      line.classList.remove("lineAnimation");
    }
  };
  shootdown = (event) => {
    event.preventDefault();

    if (this.state.currentText < this.state.text.length - 1) {
      const para = document.getElementById("paragraphContent");
      const line = document.getElementById("lineDivider");
      para.classList.remove("animatebottom");
      para.classList.add("animation");
      setTimeout(() => {
        para.classList.remove("animation");
        this.setState({ currentText: this.state.currentText + 1 });
        line.classList.add("lineAnimation");
        para.classList.add("animatebottom");
      }, 1000);
      line.classList.remove("lineAnimation");
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row History__row">
          <div className="text">
            <p id="paragraphContent">
              {
                this.state.text[this.state.currentText]
                // this.state.text[20]
              }
            </p>
          </div>

          <hr id="lineDivider" />
        </div>
        <div className="row History__registerLink">
          <a className="History__link" href="#">
            Register Yourself{" "}
            <img src={Register} alt="" className="History__linkImg img-fluid" />
          </a>
        </div>
        <div className="MobileView">
          {/* <button onClick={this.shoot}> </button>
          <button onClick={this.shootdown}></button> */}
          <Fab size="small" color="black" onClick={this.shoot} aria-label="up">
            <MdKeyboardArrowUp />
          </Fab>
          <Fab size="small" onClick={this.shootdown} aria-label="down">
            <MdKeyboardArrowDown />
          </Fab>
        </div>
      </div>
    );
  }
}

export default History;
