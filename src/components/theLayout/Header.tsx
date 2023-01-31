import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import cn from 'clsx';

library.add(fab);

const Header = () => {
  const gnbArr = [
    {
      name: 'main',
      link: '/',
    },
    {
      name: 'twich',
      link: '/twich',
    },
    {
      name: 'other',
      link: '/other',
    },
  ];
  interface InbArrPropTypes {
    name: string;
    link: string;
    iconName: IconProp;
  }
  const inbArr: InbArrPropTypes[] = [
    { name: 'github', link: '', iconName: ['fab', 'github-alt'] },
    { name: 'twich', link: '', iconName: ['fab', 'twitch'] },
    { name: 'twitter', link: '', iconName: ['fab', 'twitter'] },
  ];
  return (
    <header className="header z-[1]" style={{ position: 'sticky', top: 0 }}>
      <nav id="navbar" className="bd-navbar navbar is-flex">
        {/* logo, gnbMenu, icons */}
        {/* logo */}
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img
              src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/256/moon-dreamy-icon.png"
              alt=""
            />
          </a>
        </div>
        {/* logo */}

        {/* gnbMenu  */}
        <div className="navbarMenu is-flex is-full-widescreen">
          {gnbArr.map(item => {
            return (
              <a
                key={`${item.name}`}
                href={`${item.link}`}
                className="headerItem is-flex is-align-items-center">
                {item.name}
              </a>
            );
          })}
        </div>
        {/* gnbMenu */}

        {/* inbMenu */}
        <div className={cn('is-flex')}>
          {inbArr.map(item => {
            return (
              <a
                key={item.name}
                href={item.link}
                className="bd-navbar-icon navbar-item is-flex">
                <span className="icon">
                  <FontAwesomeIcon icon={item.iconName} className="fa-lg" />
                </span>
              </a>
            );
          })}
        </div>
        {/* inbMenu */}
      </nav>
    </header>
  );
};
export default Header;
