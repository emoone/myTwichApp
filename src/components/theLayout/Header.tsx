import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import cn from 'clsx';
import { fetchTwitchTopGameList } from '../../api/fetchTwitchTopGameList';
import getTwitchItems from '../../api/getTwitchItems';

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

  const onSearch = () => {
    const baseUrl = 'https://picsum.photos/v2/list?page=1&limit=100';

    console.log('searchStart');
    getTwitchItems(baseUrl, { answer: 42 })
      .then(data => {
        console.log('data is', data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <header className="header z-[1]" style={{ position: 'sticky', top: 0 }}>
      <nav id="navbar" className="bd-navbar navbar is-flex">
        {/* logo, gnbMenu, icons */}
        {/* logo */}
        <div className="navbar-brand">
          <a href="/" className="navbar-item aspect-[1/1]">
            <img
              className="h-[28px] w-[28px]"
              src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/256/moon-dreamy-icon.png"
              width="256"
              height="256"
              alt=""
            />
          </a>
        </div>
        {/* logo */}

        {/* gnbMenu  */}
        <div className="navbarMenu flex items-center gap-x-[5px] is-full-widescreen">
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

        {/* search */}
        <div id="search" className="bd-search bd-is-visible">
          <input
            type="text"
            onClick={() => {
              onSearch();
            }}
          />
        </div>
        {/* search */}

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
