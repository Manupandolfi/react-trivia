const mockedTrivia = {
  title: 'Trivia de prueba',
  image: 'https://48tools.com/wp-content/uploads/2015/09/shortlink.png',
  questions: [
    {
      text: 'Pregunta 1',
      image:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      lifetimeSeconds: 10,
      options: [
        { text: 'Opcion1', correct: true },
        { text: 'Opcion2', correct: false },
        { text: 'Opcion3', correct: true },
      ],
    },
    {
      text: 'Pregunta 2',
      image:
        'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
      lifetimeSeconds: 5,
      options: [
        { text: 'Opcion1', correct: true },
        { text: 'Opcion2', correct: false },
        { text: 'Opcion3', correct: false },
      ],
    },
  ],
};

const getTrivias = () => {
  // Using a promise to simulate an api call to fetch trivias
  return new Promise((res) => {
    setTimeout(() => {
      res([mockedTrivia]);
    }, 1200);
  });
};

export default {
  getTrivias,
};
