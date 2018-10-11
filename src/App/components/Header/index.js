import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "./headerStyles.css";

// import logo from "../../assets/logo.png";

const links = [
  {
    to: "/register",
    text: "Register",
    auth: false,
    isButton:true
  },
  {
    to: "/login",
    text: "Login",
    auth: false,
    isButton:true
  },
  {
    to: "/dashboard",
    text: "Dashboard",
    auth: true,
    isButton:true
  },
  {
    to: "/profile",
    text: "Profile",
    auth: true,
    isButton:true
  },
  {
    to: "/logout",
    text: "Logout",
    auth: true
  }
  /*{
    to: '/this-is-broken',
    text: 'Broken Page'
  }*/
];

const isCurrent = (to, current) => {
  if (to === "/" && current === to) {
    return true;
  } else if (to !== "/" && current.includes(to)) {
    return true;
  }

  return false;
};

const navItemClasses = (to, current, isButton) => classnames({
  current:isCurrent(to, current),
  btn: isButton,
  "btn-gradient": isButton

});

const HeaderLink = ({ to, text, isButton,  current }) => (
  <NavItem className={navItemClasses(to, current, isButton)}>
    <NavLink href={to}>{text}</NavLink>
  </NavItem>
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //export default ({ isAuthenticated, current }) => (

  render(){
    const { isAuthenticated, current } = this.props;
    return (
      <Navbar className="navBar" light expand="md">
        <NavbarBrand href="/">
          <span className="logo">
            {/**<img src={logo} alt="Homepage"/>**/}
            <span>TechNews</span>
          </span>

        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map((link, index) => {
              const TheLink = <HeaderLink key={index} current={current} {...link} />;

              if (link.hasOwnProperty("auth")) {
                if (link.auth && isAuthenticated) {
                  return TheLink;
                } else if (!link.auth && !isAuthenticated) {
                  return TheLink;
                }

                return null;
              }

              return TheLink;
            })}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
