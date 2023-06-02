const App = () => {
  return (
    <div>
      <Tweet
        username="BobTheBuilder"
        name="Bob"
        date="1/1/2020"
        message="I can fix it!"
      />
      <Tweet
        username="BillyTheKid"
        name="Billy"
        date="1/1/2020"
        message="Howdy!"
      />
      <Tweet
        username="GrimmReaper"
        name="Grim"
        date="1/1/2020"
        message="I'm coming for you!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

{
  /* Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

Create an App component that renders at least three tweets. */
}
