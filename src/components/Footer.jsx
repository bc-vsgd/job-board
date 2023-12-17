import logo_react from "../assets/img/logo_react.png";
import logo_reacteur from "../assets/img/Logo_Reacteur.avif";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with{" "}
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
        >
          <img src={logo_react} alt="Logo React" />
          React
        </a>{" "}
        at{" "}
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logo_reacteur} alt="" />
          Le Reacteur
        </a>{" "}
        by{" "}
        <a href="https://github.com/bc-vsgd" target="_blank">
          <i class="fa-brands fa-github"></i>
          Benoît Charles - 2023
        </a>
      </p>
    </footer>
  );
};

export default Footer;
