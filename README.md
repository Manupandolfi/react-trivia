# React trivia

This project is the solution to a Trivia Game code challenge

## Statement

An enterteinment company wants to make a Q&A game. For that, they prepare trivias every day and load them in JSON format.
Make a web app, using React (responsive):
- Once the page has loaded, show the title of the trivia, with it picture and a button to start the gaem
- Once the trivia started, show the current question wich will be available for the `lifetimeSeconds` secs property amount.
- Answered or not, the correct answer must be remarked for 1 second before navigate to the next question
- Once all the questions are done, show a popup, with the trivia result (win or lose).

## Trivia capture example

<img width="511" alt="image" src="https://user-images.githubusercontent.com/14002301/211339902-028722f5-7284-4227-ab6e-09b3a36f4793.png">


## Trivia data example

`
{
  title: 'Test trivia',
  image: 'https://48tools.com/wp-content/uploads/2015/09/shortlink.png',
  questions: [
    {
      text: 'Question 1',
      image:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      lifetimeSeconds: 10,
      options: [
        { text: 'Option1', correct: true },
        { text: 'Option2', correct: false },
        { text: 'Option3', correct: true },
      ],
    },
    {
      text: 'Question 2',
      image:
        'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
      lifetimeSeconds: 5,
      options: [
        { text: 'Option1', correct: true },
        { text: 'Option2', correct: false },
        { text: 'Option3', correct: false },
      ],
    },
  ],
};
`

