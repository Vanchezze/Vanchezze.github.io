import React from 'react';
import Icon from '../../icons/';

const social = [
  {
    icon: 'linkedIn',
    name: 'LinkedIn',
    className: 'icon-linkedIn',
    href: 'https://www.linkedin.com/in/ivan-rudiuk/'
  },
  {
    icon: 'gitHubCircle',
    name: 'GitHub',
    className: 'icon-github',
    href: 'https://github.com/Vanchezze'
  },
  {
    icon: 'mailCircle',
    name: 'Email',
    className: 'icon-mail',
    href: 'mailto:vanchezze@gmail.com'
  }
];

class Footer extends React.Component {
  render() {
    const socialIcons = social.map((item, index) => {
      return (
        <div className="v-footer__social-icon" key={index}>
          <a
            href={item.href}
            target={item.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <Icon name={item.icon} className={item.className} />
          </a>
        </div>
      );
    });

    return (
      <div className="v-footer">
        <div className="v-container">
          <p className="v-footer__quote">
            Choose a job you love, and you will never have to work a day in your
            life.
          </p>

          <div className="v-footer__social">{socialIcons}</div>

          <span className="v-footer__copyright">
            © 2026 Ivan Rudiuk | Denver, CO
          </span>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {};

export default Footer;
