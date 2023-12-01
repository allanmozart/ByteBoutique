import { FooterContainer, GithubLink } from './style';

export default function FooterBar() {
  return (
    <FooterContainer>
      <div>
        <h3>FOLLOW US</h3>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/allanmozart'
        >
          <GithubLink />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/FCarvalhal'
        >
          <GithubLink />
        </a>
      </div>
    </FooterContainer>
  );
}
