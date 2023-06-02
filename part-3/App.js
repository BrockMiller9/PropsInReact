const App = () => {
  return (
    <div>
      <Person name="Bob" age={20} hobbies={["Outdoors", "Hiking", "Cooking"]} />
      <Person
        name="Elizabeth"
        age={16}
        hobbies={["Swimming", "Fishing", "Volleyball"]}
      />
      <Person
        name="Francis"
        age={16}
        hobbies={["Cleaning", "Running", "Biking"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
