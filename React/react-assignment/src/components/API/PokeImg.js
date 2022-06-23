const PokeImg = ({ sprites }) => {
  return (
    <img
      alt=""
      width="256px"
      src={
        sprites &&
        sprites["versions"]["generation-i"]["red-blue"]["front_transparent"]
      }
    ></img>
  );
};

export default PokeImg;
