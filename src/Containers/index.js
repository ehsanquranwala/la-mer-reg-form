import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/user-jss";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import app from "../firebase";
import logo from "../Assets/logo.png";
import Snackbar from "../Components/Snackbar";
import { countries } from "../Components/constant";
import { withRouter } from "react-router-dom";
import { Date } from "core-js";
import { createConnection } from "net";
import { DeviceSignalCellularConnectedNoInternet0Bar } from "material-ui/svg-icons";
class Index extends Component {
  state = {
    isAgree: false,
    openStyle: false,
    code: "+971",
    FullName: "",
    number: "",
    AGEGROUP: "",
    Nationality: "",
    type: "",
    message: ""
  };

  onHandleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onHandleChangeNumber(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (value.length < 16) {
      this.setState({ [name]: value });
    }
  }
  handleChange(val) {
    this.setState({ isAgree: !val });
  }

  onSubmit(e) {
    const { FullName, number, code, AGEGROUP, Nationality } = this.state;
    const date = new Date();
    let data = {
      FullName: FullName,
      number: number,
      code: code,
      AGEGROUP: AGEGROUP,
      Nationality: Nationality,
      zdate: `${date}`
    };
    const connection = window.navigator.onLine;
    if(connection === true){
      let ref = app.database().ref(`feebacks/`);
      ref.push(data);
      this.setState({ type: "success", message: "Registration Successful" });
    }
    else{
      this.setState({ type: "error", message: "Registration unsuccessful" });
    }
    this.forceUpdate();
    this.setState({
      openStyle: true,
      FullName: "",
      number: "",
      AGEGROUP: "",
      Nationality: "",
      isAgree: false
    });
    let hiddenElement = document.createElement("a");
    hiddenElement.href = "#";
    // hiddenElement.target = '_blank'

    setTimeout(() => this.props.history.push("/submit"), 5000);
  }
  handleSnakbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openStyle: false });
  };

  render() {
    const { classes } = this.props;
    const {
      FullName,
      number,
      code,
      openStyle,
      AGEGROUP,
      Nationality,
      isAgree,
      type,
      message
    } = this.state;
    return (
      <Fragment>
        <Snackbar
          openStyle={openStyle}
          handleSnakbarClose={() => this.handleSnakbarClose}
          type={type}
          message={message}
        />
        <form>
          <div className="BG">
            <div className="FieldParent">
              <div class="col-lg-6  mb-2 ">
                <img src={logo} height="66" />
                <h6
                  style={{ color: "white", paddingTop: "24px" }}
                  class="heading"
                >
                  WELCOME TO
                </h6>
                <h4 style={{ color: "white" }} class="subheading">
                  PLAYTIME ISLAND!
                </h4>
              </div>
              <div class="col-12 col-lg-8" data-for="code">
                <div class="form-group">
                  <input
                    class="form-control custom"
                    name="FullName"
                    value={FullName}
                    onChange={e => {
                      this.onHandleChange(e);
                    }}
                    placeholder="FULL NAME"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-8" data-for="phNumber">
                <div class="form-group" style={{ display: "flex" }}>
                  <input
                    type="text"
                    class="form-control custom CutomInputCode"
                    onChange={e => {
                      this.onHandleChange(e);
                    }}
                    name="code"
                    placeholder="+971"
                    value={code}
                    data-form-field="Email"
                    required=""
                    id="code-form1-f"
                  />
                  <input
                    type="number"
                    class="form-control custom CutomInputNumber"
                    name="number"
                    onChange={e => {
                      this.onHandleChangeNumber(e);
                    }}
                    placeholder="MOBILE NUMBER"
                    value={number}
                    // pattern="/^-?\d+\.?\d*$/"
                    // min="-999"
                    // pattern="\b[1-9][0-9]{14}\b"
                    // max="9999"
                    min="0"
                    max="99"
                    maxlength="2"
                    // oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                    data-form-field="phNumber"
                    required=""
                    id="phNumber-form1-f"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-8" data-for="email">
                <div class="form-group">
                  <select
                    class="form-control custom"
                    name="AGEGROUP"
                    onChange={e => {
                      this.onHandleChange(e);
                    }}
                    id="sel1"
                    required
                  >
                    <option value={AGEGROUP} disabled selected hidden>
                      AGE GROUP
                    </option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-lg-8" data-for="email">
                <div class="form-group">
                  <select
                    class="form-control custom"
                    name="Nationality"
                    onChange={e => {
                      this.onHandleChange(e);
                    }}
                    id="sel1"
                    required
                  >
                    <option value="" disabled selected hidden>
                      NATIONALITY
                    </option>
                    <option>Afghanistan</option>
                    <option>Albania </option>
                    <option>Algeria </option>
                    <option>American Samoa </option>
                    <option>Andorra </option>
                    <option>Angola </option>
                    <option>Anguilla </option>
                    <option>Antarctica </option>
                    <option>Antigua and Barbuda </option>
                    <option>Argentina </option>
                    <option>Armenia </option>
                    <option>Aruba </option>
                    <option>Australia </option>
                    <option>Austria </option>
                    <option>Azerbaijan </option>
                    <option>Bahamas </option>
                    <option>Bahrain </option>
                    <option>Bangladesh </option>
                    <option>Barbados </option>
                    <option>Belarus </option>
                    <option>Belgium </option>
                    <option>Belize </option>
                    <option>Benin </option>
                    <option>Bermuda </option>
                    <option>Bhutan </option>
                    <option>Bolivia </option>
                    <option>Bosnia and Herzegovina </option>
                    <option>Botswana </option>
                    <option>Brazil </option>
                    <option>British Indian Ocean Territory </option>
                    <option>British Virgin Islands </option>
                    <option>Brunei </option>
                    <option>Bulgaria </option>
                    <option>Burkina Faso </option>
                    <option>Burundi </option>
                    <option>Cambodia </option>
                    <option>Cameroon </option>
                    <option>Canada </option>
                    <option>Cape Verde </option>
                    <option>Cayman Islands </option>
                    <option>Central African Republic </option>
                    <option>Chad </option>
                    <option>Chile </option>
                    <option>China </option>
                    <option>Christmas Island </option>
                    <option>Cocos Islands </option>
                    <option>Colombia </option>
                    <option>Comoros </option>
                    <option>Cook Islands </option>
                    <option>Costa Rica </option>
                    <option>Croatia </option>
                    <option>Cuba </option>
                    <option>Curacao </option>
                    <option>Cyprus </option>
                    <option>Czech Republic </option>
                    <option>Democratic Republic of the Congo </option>
                    <option>Denmark </option>
                    <option>Djibouti </option>
                    <option>Dominica </option>
                    <option>Dominican Republic </option>
                    <option>East Timor </option>
                    <option>Ecuador </option>
                    <option>Egypt </option>
                    <option>El Salvador </option>
                    <option>Equatorial Guinea </option>
                    <option>Eritrea </option>
                    <option>Estonia </option>
                    <option>Ethiopia </option>
                    <option>Falkland Islands </option>
                    <option>Faroe Islands </option>
                    <option>Fiji </option>
                    <option>Finland </option>
                    <option>France </option>
                    <option>French Polynesia </option>
                    <option>Gabon </option>
                    <option>Gambia </option>
                    <option>Georgia </option>
                    <option>Germany </option>
                    <option>Ghana </option>
                    <option>Gibraltar </option>
                    <option>Greece </option>
                    <option>Greenland </option>
                    <option>Grenada </option>
                    <option>Guam </option>
                    <option>Guatemala </option>
                    <option>Guernsey </option>
                    <option>Guinea </option>
                    <option>Guinea-Bissau </option>
                    <option>Guyana </option>
                    <option>Haiti </option>
                    <option>Honduras </option>
                    <option>Hong Kong </option>
                    <option>Hungary </option>
                    <option>Iceland </option>
                    <option>India </option>
                    <option>Indonesia </option>
                    <option>Iran </option>
                    <option>Iraq </option>
                    <option>Ireland </option>
                    <option>Isle of Man </option>
                    <option>Israel </option>
                    <option>Italy </option>
                    <option>Ivory Coast </option>
                    <option>Jamaica </option>
                    <option>Japan </option>
                    <option>Jersey </option>
                    <option>Jordan </option>
                    <option>Kazakhstan </option>
                    <option>Kenya </option>
                    <option>Kiribati </option>
                    <option>Kosovo </option>
                    <option>Kuwait </option>
                    <option>Kyrgyzstan </option>
                    <option>Laos </option>
                    <option>Latvia </option>
                    <option>Lebanon </option>
                    <option>Lesotho </option>
                    <option>Liberia </option>
                    <option>Libya </option>
                    <option>Liechtenstein </option>
                    <option>Lithuania </option>
                    <option>Luxembourg </option>
                    <option>Macau </option>
                    <option>Macedonia </option>
                    <option>Madagascar </option>
                    <option>Malawi </option>
                    <option>Malaysia </option>
                    <option>Maldives </option>
                    <option>Mali </option>
                    <option>Malta </option>
                    <option>Marshall Islands </option>
                    <option>Mauritania </option>
                    <option>Mauritius </option>
                    <option>Mayotte </option>
                    <option>Mexico </option>
                    <option>Micronesia </option>
                    <option>Moldova </option>
                    <option>Monaco </option>
                    <option>Mongolia </option>
                    <option>Montenegro </option>
                    <option>Montserrat </option>
                    <option>Morocco </option>
                    <option>Mozambique </option>
                    <option>Myanmar </option>
                    <option>Namibia </option>
                    <option>Nauru </option>
                    <option>Nepal </option>
                    <option>Netherlands </option>
                    <option>Netherlands Antilles </option>
                    <option>New Caledonia </option>
                    <option>New Zealand </option>
                    <option>Nicaragua </option>
                    <option>Niger </option>
                    <option>Nigeria </option>
                    <option>Niue </option>
                    <option>North Korea </option>
                    <option>Northern Mariana Islands </option>
                    <option>Norway </option>
                    <option>Oman </option>
                    <option>Pakistan </option>
                    <option>Palau </option>
                    <option>Palestine </option>
                    <option>Panama </option>
                    <option>Papua New Guinea </option>
                    <option>Paraguay </option>
                    <option>Peru </option>
                    <option>Philippines </option>
                    <option>Pitcairn </option>
                    <option>Poland </option>
                    <option>Portugal </option>
                    <option>Puerto Rico </option>
                    <option>Qatar </option>
                    <option>Republic of the Congo </option>
                    <option>Reunion </option>
                    <option>Romania </option>
                    <option>Russia </option>
                    <option>Rwanda </option>
                    <option>Saint Barthelemy </option>
                    <option>Saint Helena </option>
                    <option>Saint Kitts and Nevis </option>
                    <option>Saint Lucia </option>
                    <option>Saint Martin </option>
                    <option>Saint Pierre and Miquelon </option>
                    <option>Saint Vincent and the Grenadines </option>
                    <option>Samoa </option>
                    <option>San Marino </option>
                    <option>Sao Tome and Principe </option>
                    <option>Saudi Arabia </option>
                    <option>Senegal </option>
                    <option>Serbia </option>
                    <option>Seychelles </option>
                    <option>Sierra Leone </option>
                    <option>Singapore </option>
                    <option>Sint Maarten </option>
                    <option>Slovakia </option>
                    <option>Slovenia </option>
                    <option>Solomon Islands </option>
                    <option>Somalia </option>
                    <option>South Africa </option>
                    <option>South Korea </option>
                    <option>South Sudan </option>
                    <option>Spain </option>
                    <option>Sri Lanka </option>
                    <option>Sudan </option>
                    <option>Suriname </option>
                    <option>Svalbard and Jan Mayen </option>
                    <option>Swaziland </option>
                    <option>Sweden </option>
                    <option>Switzerland </option>
                    <option>Syria </option>
                    <option>Taiwan </option>
                    <option>Tajikistan </option>
                    <option>Tanzania </option>
                    <option>Thailand </option>
                    <option>Togo </option>
                    <option>Tokelau </option>
                    <option>Tonga </option>
                    <option>Trinidad and Tobago </option>
                    <option>Tunisia </option>
                    <option>Turkey </option>
                    <option>Turkmenistan </option>
                    <option>Turks and Caicos Islands </option>
                    <option>Tuvalu </option>
                    <option>U.S. Virgin Islands </option>
                    <option>Uganda </option>
                    <option>Ukraine </option>
                    <option>United Arab Emirates </option>
                    <option>United Kingdom </option>
                    <option>United States </option>
                    <option>Uruguay </option>
                    <option>Uzbekistan </option>
                    <option>Vanuatu </option>
                    <option>Vatican </option>
                    <option>Venezuela </option>
                    <option>Vietnam </option>
                    <option>Wallis and Futuna </option>
                    <option>Western Sahara </option>
                    <option>Yemen </option>
                    <option>Zambia </option>
                    <option>Zimbabwe </option>
                  </select>
                </div>
              </div>

              <div class="col-12 col-lg-10">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAgree}
                      onChange={val => this.handleChange(isAgree)}
                      value={isAgree}
                      // color="primary"
                    />
                  }
                  style={{
                    color: "white",
                    textShadow: "2px 2px 4px #000000",
                    fontWeight: "bold"
                  }}
                  label="Kids have to be supervised at all times."
                />
              </div>
              <button
                disabled={
                  !FullName ||
                  !number ||
                  !AGEGROUP ||
                  !Nationality ||
                  !code ||
                  isAgree === false
                }
                // className={{ disabled: classes.DisableButton }}
                onClick={e => {
                  this.onSubmit(e);
                }}
                variant="contained"
                // style={{
                //   backgroundColor: "#FC0095",
                //   width: "61%",
                //   marginLeft: "3%",
                //   marginRight: "auto",
                //   height: "42px",
                //   paddingTop: "6px",
                //   color: "white",
                //   fontWeight: "bold",
                //   fontSize: "16px"
                // }}
                className="submitBtn"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const withRouterIndex = withRouter(Index);
export default withStyles(styles)(withRouterIndex);
