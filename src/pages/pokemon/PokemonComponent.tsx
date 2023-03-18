import { useGetPokemonByNameQuery } from '../../app/store/services/pokemon';

const Pokemon = () => {
  const { error, isLoading, data, isError } =
    useGetPokemonByNameQuery('bulbasaurasdfasdf');

  // name?: string;
  // message?: string;
  // stack?: string;
  // code?: string;
  if (isError) {
    if (error) {
      console.log(typeof error, error.status);
    }
    return (
      <div className="errCon">
        {/* <strong className="text-[#FF3333]">{error?.originalStatus}</strong> */}
        {`Error is ${data}`}
      </div>
    );
  }
  if (!data) return null;

  return (
    <div className="pokemon">
      <h1>{data.name}</h1>
      <div className="aspect-ratio-[1/1]">
        {isLoading ? (
          <div style={{ backgroundColor: 'red' }}>isLoading</div>
        ) : (
          <img src={data.sprites.front_default} alt="" />
        )}
      </div>
    </div>
  );
};
export default Pokemon;
