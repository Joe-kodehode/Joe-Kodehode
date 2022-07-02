import FacebookLogo from "../images/FacebookLogo.png";
import TwitterLogo from "../images/TwitterLogo.png";
import InstagramLogo from "../images/InstagramLogo.png";
import GithubLogo from "../images/GithubLogo.png";

export default function Footer() {
  return (
    <div>
      <img src={TwitterLogo} alt="twitter's logo" />
      <img src={FacebookLogo} alt="facebook's logo" />
      <img src={InstagramLogo} alt="instagram's logo" />
      <img src={GithubLogo} alt="github's logo" />
    </div>
  );
}
