import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID X5BM6xcm9Qgt9NmIj2lKtTAf2TvjQOidIleoVeYfHRU",
  }
});