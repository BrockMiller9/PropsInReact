const Person = (props) => {
  let message;
  if (props.age >= 18) {
    message = <h3>Please go vote!</h3>;
  } else {
    message = <h3>You must be 18</h3>;
  }
  let name = props.name;
  if (name.length > 8) {
    name = name.slice(0, 6);
  }

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "300px",
      }}
    >
      <p
        style={{
          color: "red",
          fontWeight: "bold",
        }}
      >
        Learn some information about this person
      </p>
      <h3>
        Name:{" "}
        <span
          style={{
            color: "blue",
            fontWeight: "bold",
          }}
        >
          {name}
        </span>
      </h3>
      {message}

      <h4>Interests:</h4>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

{
  /* Create a component called Person. Inside of this component, render a p tag which displays “Learn some information about this person”. Each person should have name and age properties.

If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”.

If the person’s name is longer than 8 characters, only display the first six characters of their name.

Add a property called hobbies to your Person component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an li.

Add an App component that renders at least three copies of the Person component on the page.*/
}
