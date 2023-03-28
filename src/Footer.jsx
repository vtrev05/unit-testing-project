export const socialLogos = [
  { link: 'https://github.com', src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', alt: 'github' },
  { link: 'https://www.instagram.com', src: 'https://1000marcas.net/wp-content/uploads/2019/11/Instagram-Logo.jpg', alt: 'instagram' },
  { link: 'https://www.linkedin.com/', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png', alt: 'linkedin' },
  { link: 'https://twitter.com', src: 'https://img.freepik.com/iconos-gratis/gorjeo_318-187597.jpg', alt: 'twitter' },
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a href={logo.link}>
              <img src={logo.src} alt={`logo ${logo.alt}`} width={40} height={40} />
            </a>
          </li>
        ))}
      </ul>
      <p>
        Created with love by @RiveraMerida <span role="img">💕</span>
      </p>
    </footer>
  );
};

export default Footer;