interface TopGamePropTypes {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string;
}
const getTopGames = (data: TopGamePropTypes) => {
  if (!data) return [];
  return [data];
};
export default getTopGames;
