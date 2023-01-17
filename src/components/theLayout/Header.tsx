const Header = () => {
  const headerArr = [
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
  return (
    <header className="AppHeader flex gap-x-[10px]">
      {headerArr.map((item, index) => {
        return (
          <a key={`${item.name}`} href={`${item.link}`} className="headerItem">
            {item.name}
          </a>
        );
      })}
    </header>
  );
};
export default Header;
