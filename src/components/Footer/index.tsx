import { FooterContainer, GithubLink } from './style';

export default function FooterBar() {
  return (
    <FooterContainer>
      <div>
        <h3>COMPANY INFO</h3>
      </div>
      <div>
        <h3>FOLLOW US</h3>
        <GithubLink />
        <GithubLink />
      </div>
    </FooterContainer>
  );
}
