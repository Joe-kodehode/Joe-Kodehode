import { useState, useEffect, useRef } from "react";
import PokeCard from "./PokeCard";
import Button from "../Button";
import axios from "axios";
import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 64px;
  padding: 64px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function API() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeNum, setPokeNum] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const inputEl = useRef(null);

  const gottaFetchEm = async (random) => {
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    // const data     = await response.joson();
    setError("");
    setIsLoading(true);
    setPokeList([]);
    const baseUrl = "https://pokeapi.co/api/v2/";
    const pokeArr = [];
    const pokePromises = [];
    const pokeSpecPromises = [];
    const pokeNumArr = [];

    for (let i = 1; i < 152; i++) {
      pokeNumArr.push(i);
    }

    if (random) {
      const randomPokeNum = [];
      for (let i = 0; i < pokeNum; i++) {
        const randomNum = Math.floor(Math.random() * pokeNumArr.length + 1);
        randomPokeNum.push(pokeNumArr.splice(randomNum, 1));
      }
      pokeNumArr.splice(0, pokeNumArr.length);
      pokeNumArr.push(...randomPokeNum);
    }

    pokeNumArr.forEach((e) => {
      pokePromises.push(axios.get(`${baseUrl}pokemon/${e}`));
      pokeSpecPromises.push(axios.get(`${baseUrl}pokemon-species/${e}`));
    });

    try {
      const pokeRes = await Promise.all(pokePromises);
      const pokeSpecRes = await Promise.all(pokeSpecPromises);

      pokeRes.forEach((e, i) => {
        pokeArr.push({ ...e.data, ...pokeSpecRes[i].data });
      });

      setPokeList(pokeArr);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    gottaFetchEm(true);
  }, []);

  return (
    <>
      <h1>Random Pokemon Generator</h1>
      <InputContainer>
        <input
          ref={inputEl}
          value={pokeNum}
          type="number"
          min={1}
          max={151}
          onChange={() => {
            if (inputEl.current.value > 151) {
              setPokeNum(151);
            } else if (inputEl.current.value < 1) {
              setPokeNum(1);
            } else {
              setPokeNum(inputEl.current.value);
            }
          }}
        />

        <Button disabled={isLoading} onClick={() => gottaFetchEm(true)}>
          New Pokemon
        </Button>
        <Button disabled={isLoading} onClick={() => gottaFetchEm(false)}>
          Fetch 'em all
        </Button>
      </InputContainer>
      <p>{isLoading && "Loading..."}</p>
      <p>{error}</p>
      <StyledMain>
        {pokeList.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </StyledMain>
    </>
  );
}
