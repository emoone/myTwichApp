const HomeComponent = () => {
  return (
    <div>
      The HOME asdfasdfasdfa
      <div className="parent" style={{}}>
        parent
        <div>children1</div>
        <div>children2</div>
      </div>
      {/* grid-[repeat(6,_minmax(150px,_1fr))] */}
      <div className="grid grid-cols-[repeat(6,minmax(150px,1fr))]">
        {[...Array(10)].map((item, index) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`item-${index}`}
              className="item bg-[red] border-solid border-[#fff] border">
              {index}
            </div>
          );
        })}
      </div>
      {/* pokeMon/  */}
    </div>
  );
};
export default HomeComponent;
