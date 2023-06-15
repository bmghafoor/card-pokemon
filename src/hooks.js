import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = () => {
  const [state, setState] = useState(true);
  const flipCard = () => {
    setState((state) => !state);
  };
  return [state, flipCard];
};

const useAxios = (url) => {
  const [state, setState] = useState([]);
  const addCard = async () => {
    const response = await axios.get(url);
    setState((state) => [...state, { ...response.data, id: uuid() }]);
  };
  return [state, addCard];
};

export { useFlip, useAxios };
