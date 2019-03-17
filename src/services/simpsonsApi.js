export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json();
    })
    .then(json => {
      return {
        quote: json[0].quote,
        characterName: json[0].character,
        characterImage: json[0].image
      };
    });
};
