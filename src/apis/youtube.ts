import axios from 'axios';

const KEY = 'AIzaSyBnzoHi1d_d-nbiR0MUeNKj5O-GIb8pkB8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});
