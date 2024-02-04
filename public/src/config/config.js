let BASE_URL = 'http://localhost:5000';

if (process.env.NODE_ENV === 'production') {
  BASE_URL = "https://chatify-ambv.onrender.com";
}

export default BASE_URL;