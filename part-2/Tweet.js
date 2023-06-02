const Tweet = (props) => {
  return (
    <div>
      <div>
        <h3>{props.message}</h3>
      </div>
      <div>
        <h4>
          By {props.name} (@{props.username}) on {props.date}
        </h4>
      </div>
    </div>
  );
};
