export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMBD_KEY,
    }
  };
  export const Supported_Lanuguages=
  [{identifier:"en",name:"English"},
    {identifier:"urdu",name:"Urdu"},
    {identifier:"spanish",name:"Spanish"}
  ]


  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;