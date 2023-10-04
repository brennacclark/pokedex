// api.js
import axios from 'axios';

const baseURL = 'https://api.example.com'; // Replace with your API endpoint

const api = axios.create({
  baseURL,
});

export async function fetchPokemonList(page, cardsPerPage) {
  try {
    const response = await api.get(`/pokemon?page=${page}&cardsPerPage=${cardsPerPage}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
