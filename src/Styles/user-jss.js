import { fade } from "@material-ui/core/styles/colorManipulator";
import cyan from "@material-ui/core/colors/cyan";
import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";
// import bg from 'dan-images/petal_grey_bg.svg';
// import bgLight from 'dan-images/petal_bg.svg';
// import { gradientBgLight } from 'containers/Templates/appStyles-jss';
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
// import signUpBgImage from 'dan-images/blueBgImg.jpg';
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { black } from "ansi-colors";
// import signUpBgImage from 'dan-images/orangeBgImg.jpg'
// import { PureComponent } from 'react';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import IconButton from '@material-ui/core/IconButton';
// import FileUpload from '@material-ui/icons/CloudUpload';
// import { Link } from 'react-router-dom';

const rootWraper = {
  display: "flex",
  width: "100%",
  zIndex: 1,
  position: "relative"
};

const wrapper = (theme, opacity) => ({
  padding: theme.spacing.unit * 3,
  textAlign: "center",
  backgroundColor: fade(theme.palette.background.paper, opacity),
  backgroundRepeat: "no-repeat",
  color: theme.palette.text.primary,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
});

const styles = theme => ({
  root: {
    ...rootWraper
  },
  signinSpan: {
    paddingLeft: "5px"
  },
  rootFull: {
    ...rootWraper,
    height: "100%"
  },
  container: {
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      overflow: "hidden"
    }
  },
  containerForSignUpPhoneSection: {
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
    // [theme.breakpoints.down('md')]: {
    //   overflow: 'hidden'
    // },
  },
  containerWide: {
    display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    width: "100%"
  },
  containerSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      overflow: "hidden"
    }
  },
  paperWrap: {
    ...wrapper(theme, 1)
  },
  sideWrap: {
    ...wrapper(theme, 1),
    height: "100%",
    borderRadius: 0,
    [theme.breakpoints.up("md")]: {
      width: 480
    },
    "& $topBar": {
      marginBottom: theme.spacing.unit * 4
    }
  },
  fullWrap: {
    ...wrapper(theme, 0.9),
    height: "100%",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& $topBar": {
      width: "100%"
    }
  },
  DisableButton: {
    color: green
  },
  fullWrapCustom: {
    color: "rgba(0, 0, 0, 0.87)",
    height: "100%",
    overflowY: "scroll",
    padding: "24px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    borderRadius: "0",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  },
  petal: {
    // backgroundImage: theme.palette.type === '' ? `url(${bgLight})` : `url(${bg})`,
  },
  icon: {},
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    "& $icon": {
      marginRight: theme.spacing.unit
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginBottom: theme.spacing.unit * 3,
      "& a": {
        display: "none"
      }
    }
  },
  outer: {},
  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: '5px 10px',
    position: "relative",
    fontSize: 16,
    fontWeight: 500,
    // color: theme.palette.text.primary, for branc name in balck
    textDecoration: "none",
    "&$outer": {
      color: theme.palette.common.white
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing.unit * 2
    },
    "& img": {
      width: 30,
      marginRight: 10
    }
  },
  formWrap: {
    [theme.breakpoints.up("sm")]: {
      padding: "0 100px"
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 150px"
    }
  },
  formWrapSignUp: {
    [theme.breakpoints.up("sm")]: {
      padding: "0 100px"
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 50px"
    }
  },
  pageFormWrap: {
    width: "100%",
    margin: "48px auto",
    // margin: `${theme.spacing.unit * 10}px auto`,
    [theme.breakpoints.up("sm")]: {
      width: 480
    }
  },
  pageFormWrap2: {
    width: "100%",
    margin: `${theme.spacing.unit * 10}px auto`,
    [theme.breakpoints.up("sm")]: {
      width: 480
    }
  },
  Agreement: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "37px",
    paddingRight: "37px"
  },
  agreeHeading: {
    display: "flex",
    fontWeight: "bold"
  },
  sideWrapCustom: {
    color: "rgba(0, 0, 0, 0.87)",
    height: "100%",
    padding: "24px",
    textAlign: "center",
    borderRadius: "0",
    backgroundSize: "cover",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  },
  pageFormWrapCustom: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 610
      // marginTop: '20px'
    }
  },
  pageFormSideWrap: {
    margin: "0 auto",
    [theme.breakpoints.only("sm")]: {
      width: 480
    }
  },
  selectAutoCustom: {
    width: "58%",
    marginTop: "29px",
    marginRight: "10px"
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing.unit
  },
  formControlCustom3: {
    width: "100%",
    marginTop: "-14px"
  },
  BtnCustom: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    // height: '100%',
    width: "100%",
    justifyContent: "flexStart"
  },
  formControlSelectCountryinfo: {
    width: "97%",
    marginBottom: theme.spacing.unit,
    textAlign: "left",
    marginTop: "-12px"
  },
  lastNameInfoField: {
    marginTop: "-7px"
  },
  errorRedColorinfoFirstName: {
    marginTop: "-3px",
    color: "red"
  },
  errorRedColorEmail: {
    marginTop: "0px",
    color: "red"
  },

  errorRedColorEmailCodeRequired: {
    marginTop: "0px",
    color: "red"
  },

  formControlSelectCountry: {
    width: "97%",
    marginBottom: theme.spacing.unit,
    textAlign: "left"
  },
  formControl2: {
    width: "100%",
    marginBottom: "-8px",
    marginTop: "-34px"
  },
  errorRedColorPasswordRequired: {
    color: "red",
    marginTop: "0px"
  },
  SendcodeBtnPhone: {
    height: "47px",
    marginTop: "25px !important"
  },
  formControlCustom: {
    width: "97%",
    marginBottom: theme.spacing.unit
  },
  formControlCountry: {
    width: "35%",
    marginRight: "10px",
    float: "left",
    marginBottom: theme.spacing.unit
  },
  formControlPhone: {
    width: "98%",
    float: "right",
    marginBottom: "3px"
  },
  socmedLogin: {
    [theme.breakpoints.up("sm")]: {
      padding: "24px 100px 1px"
    },
    "& button": {
      padding: "4px 24px"
    }
  },
  socmedSideLogin: {
    padding: "24px 24px 1px",
    margin: "0 auto",
    "& button": {
      padding: "4px 16px",
      margin: `0 ${theme.spacing.unit}px`
    },
    [theme.breakpoints.only("sm")]: {
      width: 480
    }
  },
  userFormWrap: {
    width: "94%",
    [theme.breakpoints.up("md")]: {
      width: 720
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing.unit * 3
    }
  },
  sideFormWrap: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  sideFormWrapCustom: {
    height: "100%",
    width: "150%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  fullFormWrap: {
    height: "100%",
    width: "100%"
  },
  title: {
    color: theme.palette.primary.main,
    paddingBottom: "11px"
  },
  titleCustom: {
    color: theme.palette.primary.main
  },
  subtitle: {
    fontSize: 14
  },
  subtitle2: {
    fontSize: 14,
    paddingLeft: "12px"
  },
  titleGradient: {
    // background: gradientBgLight(theme),
    fontWeight: "bold",
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing.unit * 3,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.55em"
    }
  },
  opening: {
    color: theme.palette.common.white,
    width: "100%",
    textAlign: "center",
    "& h1": {
      display: "block",
      [theme.breakpoints.down("md")]: {
        fontSize: 32,
        lineHeight: "48px"
      }
    },
    "& p": {
      color: theme.palette.common.white,
      fontSize: 18,
      [theme.breakpoints.down("md")]: {
        fontSize: 14
      }
    }
  },
  label: {},
  btnArea: {
    display: "flex",
    justifyContent: "space-around",
    margin: `${theme.spacing.unit * 2}px 0`,
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit}px`
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  btnAreaCustom: {
    display: "flex",
    justifyContent: "space-around",

    margin: `${theme.spacing.unit * 2}px 0`,
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit}px`,
      borderRadius: "4px"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  // btnAreaCustom3: {
  //   display: 'flex',
  //   justifyContent: 'space-around',

  //   margin: `${theme.spacing.unit * 2}px 0`,
  //   fontSize: 12,
  //   '& $label': {
  //     fontSize: 12,
  //     '& span': {
  //       fontSize: 12
  //     }
  //   },
  //   '& button': {
  //     margin: `0 ${theme.spacing.unit}px`,
  //     borderRadius: '4px',
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     flexDirection: 'column',
  //     '& button': {
  //       width: '100%',
  //       margin: 5
  //     }
  //   },
  // },

  btnAreaCustom2: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "44px",
    marginBottom: "44px",

    margin: `${theme.spacing.unit * 2}px 0`,
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit}px`,
      borderRadius: "4px"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },

  noMargin: {
    margin: 0
  },
  redBtn: {
    color: red[500],
    borderColor: red[500],
    "&:hover": {
      borderColor: red[700]
    }
  },
  blueBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    "&:hover": {
      borderColor: indigo[500]
    }
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    "&:hover": {
      borderColor: cyan[700]
    }
  },
  buttonLinkCustom: {
    background: "none",
    // marginTop: '36px',
    paddingLeft: "8px",
    padding: 0,
    textTransform: "none",
    transition: "color ease 0.3s",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "0.875rem",
    "&:hover": {
      background: "none",
      color: theme.palette.secondary.main
    }
  },
  FundingRound: {
    width: "80%"
  },
  DBCCompany: {
    display: "flex",
    lineHeight: "12px",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    textAlign: "left"
  },
  DBCCompanyDetail: {
    display: "flex",
    lineHeight: "12px",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    textAlign: "left",
    borderBottom: "2px solid #C2C2C2",
    padding: "20px"
  },
  DocRepo: {
    borderBottom: "2px solid #C2C2C2",
    marginTop: "52px"
  },
  SPVDoc: {
    borderBottom: "2px solid #C2C2C2",
    marginTop: "42px"
  },
  Article: {
    backgroundColor: "#C2C2C2",
    padding: "40px",
    marginBottom: "7px"
  },
  termSheetLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left"
  },
  termSheet: {
    marginTop: "26px",
    border: "17px solid #EBEBEB",
    padding: "26px"
  },
  buttonLink: {
    background: "none",
    padding: 0,
    textTransform: "none",
    transition: "color ease 0.3s",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "0.875rem",
    "&:hover": {
      background: "none",
      color: theme.palette.secondary.main
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  footer: {
    textAlign: "center",
    padding: 5,
    background: theme.palette.grey[100],
    fontSize: 14,
    position: "relative"
  },
  welcomeWrap: {
    position: "relative"
  },
  tab: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit}px`
  },
  link: {
    fontSize: "0.875rem",
    color: theme.palette.secondary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  socmedFull: {
    textAlign: "center",
    width: "100%",
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px`,
    "& button": {
      width: "100%",
      display: "block",
      margin: `0 auto ${theme.spacing.unit * 2}px`
    },
    [theme.breakpoints.up("sm")]: {
      "& button": {
        width: 400
      }
    }
  },
  lockWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  lockForm: {
    display: "flex",
    alignItems: "baseline"
  },
  notifyForm: {
    alignItems: "baseline",
    [theme.breakpoints.down("xs")]: {
      "& button": {
        marginTop: theme.spacing.unit * 3,
        width: "100%"
      }
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      "& button": {
        width: "auto"
      }
    }
  },
  lockField: {
    marginRight: theme.spacing.unit,
    "& label": {
      color: `${theme.palette.common.white} !important`
    },
    "& label + div": {
      background: fade(theme.palette.primary.light, 0.3),
      border: "none",
      "& svg": {
        fill: fade(theme.palette.common.white, 0.7)
      }
    }
  },
  avatar: {
    width: 150,
    height: 150,
    [theme.breakpoints.up("lg")]: {
      marginRight: theme.spacing.unit * 3
    }
    // boxShadow: theme.glow.medium
  },
  avatarCustom: {
    width: 50,
    height: 50,
    [theme.breakpoints.up("lg")]: {
      marginRight: theme.spacing.unit * 3
    },
    boxShadow: "0 0px 15px -5px #039BE5"
  },
  userName: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing.unit * 3,
      textAlign: "center"
    }
  },
  hint: {
    padding: theme.spacing.unit
  },
  brandCenter: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 3
  },
  centerAdornment: {
    justifyContent: "center",
    "& > div": {
      width: "100%"
    },
    "& aside": {
      top: -10,
      [theme.breakpoints.up("sm")]: {
        left: 10
      },
      position: "relative"
    }
  },
  centerV: {
    justifyContent: "center"
  },
  optArea: {
    display: "flex",
    justifyContent: "space-between",
    padding: `0 ${theme.spacing.unit / 2}px`
  },

  demo: {
    height: "auto"
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  field: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  button: {
    margin: theme.spacing.unit
  },
  width100: {
    width: "100%"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  },
  CheckAgree: {
    display: "flex",
    fontWeight: "bold"
  },
  AnchorBtn: {
    borderRadius: "6px"
  },

  scrollCustom: {
    overflowY: "scroll",
    height: "273px"
  },
  infoBtn: {
    display: "flex",
    justifyContent: "center"
  },
  withoutAnchorBtn: {
    marginLeft: "138px !important"
  },

  bootstrapRootCustom: {
    display: "flex",
    fontSize: "12px",
    justifyContent: "space-around",
    width: "19%",
    borderRadius: "4px"
  },
  AgreeBtnNext: {
    borderRadius: "6px",
    marginLeft: "69px"
  },
  bootstrapRoot: {
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 4,
    fontSize: 16,
    padding: "8px 42px",
    maxWidth: "100px",
    marginBottom: "1px",
    border: "1px solid",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  btnbootstrapRoot: {
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 4,
    fontSize: 16,
    padding: "5px 12px 12px 12px",
    marginTop: "16px",
    border: "1px solid",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  btnbootstrapRootCustom: {
    boxShadow: "none",
    textTransform: "none",
    borderRadius: 4,
    width: "49%",
    fontSize: 14,
    marginTop: "16px",
    border: "1px solid",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  phoneBtnVerify: {
    height: "46px"
  },
  VerifyBtn: {
    boxShadow: "none",
    width: "36%",
    textTransform: "none",
    borderRadius: 4,
    fontSize: 14,
    marginTop: "16px",
    border: "1px solid",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  gradientBtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 90,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
  },
  label: {
    textTransform: "capitalize"
  },
  inputUpload: {
    display: "none"
  },
  hide: {
    display: "none"
  },
  show: {
    display: "inline"
  },
  showBank: {
    display: "inline",
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  backNextBtns: {
    position: "absolute",
    bottom: "6%"
  },
  backNextMargin: {
    marginTop: "5%"
  },
  backNextMarginInvestment: {
    position: "absolute",
    marginTop: "14%",
    bottom: "0%",
    paddingBottom: "2%",
    width: "98%"
  },
  backNextBtnArea: {
    display: "flex",
    justifyContent: "space-around",
    margin: `${theme.spacing.unit * 2}px 0`,
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaCustom: {
    display: "flex",
    justifyContent: "space-around",
    // width: "90%",
    // marginLeft: "auto",
    // marginRight: "auto",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaCustomQuestion: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaInfo: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  termSheetConfirmBtn: {
    display: "flex",
    justifyContent: "center",
    fontSize: 12,
    width: "100%",
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaCustom4: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaCustom2: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      // flexDirection: 'column',
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaCustom3: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      "& button": {
        width: "100%",
        margin: 5
      }
    }
  },
  backNextBtnAreaAgree: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 12,
    "& $label": {
      fontSize: 12,
      "& span": {
        fontSize: 12
      }
    },
    "& button": {
      margin: `0 ${theme.spacing.unit * 9}px`,
      borderRadius: "6px"
    },
    [theme.breakpoints.down("xs")]: {
      "& button": {
        margin: 5
      }
    }
  },

  logoTopBar: {
    position: "absolute",
    top: "15px",
    left: "15px"
  },
  signUPBackgroundImage: {
    width: "100%",
    height: "100%",
    position: "fixed",
    // background: `url(${signUpBgImage}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
    // width: "110%",
    // height: "100vh",
    // backgroundImage: `url(${signUpBgImage})`
  },
  focusOnBtn: {
    backgroundColor: "#268AC6",
    color: "white"
  },
  errorRedColor: {
    color: "red"
  },
  errorRedColorinfoLastName: {
    color: "red",
    marginTop: "0px"
  },
  successColor: {
    color: "#4ee44e"
  },
  textAlignLeft: {
    textAlign: "left"
  },
  subOpening: {
    margin: "0 auto",
    width: "75%",
    marginBottom: "30%"
  },
  bold: {
    fontWeight: "bold"
  },
  marginTopNeg20: {
    marginTop: "-9px"
  },
  textColorBlack: {
    color: "black"
  },
  lineHeight: {
    lineHeight: "22px"
  },
  maxWidth550: {
    maxWidth: "550px"
  },
  descBlock: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing.unit * 3
    }
  },
  iconTitle: {
    // borderRadius: theme.rounded.small,
    border:
      theme.palette.type === "dark"
        ? "none"
        : `1px solid ${lighten(theme.palette.primary.dark, 0.9)}`,
    boxShadow: `0 2px 15px -5px ${theme.palette.primary.main}`,
    background:
      theme.palette.type === "dark"
        ? theme.palette.primary.main
        : lighten(theme.palette.primary.light, 0.5),
    width: 48,
    height: 48,
    textAlign: "center",
    lineHeight: "44px",
    verticalAlign: "middle",
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    "& svg": {
      width: "60%",
      height: "60%",
      verticalAlign: "middle",
      fill:
        theme.palette.type === "dark"
          ? theme.palette.common.white
          : theme.palette.primary.main
    }
  }

  // demo: {
  //   height: 'auto',
  // },
  // divider: {
  //   margin: `${theme.spacing.unit * 3}px 0`,
  // },
  // field: {
  //   margin: `${theme.spacing.unit * 3}px 5px`,
  // },
  // root: {
  //   color: green[600],
  //   '&$checked': {
  //     color: green[500],
  //   },
  // },
  // checked: {},
  // size: {
  //   width: 40,
  //   height: 40,
  // },
  // sizeIcon: {
  //   fontSize: 20,
  // },
});

export default styles;
