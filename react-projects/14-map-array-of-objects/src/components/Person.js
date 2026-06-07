export default function Person({ id, firstName, lastName, email, img }) {
  return (
    <div>
      <h1>{id}</h1>
      <h2>
        {firstName}
        {lastName}
      </h2>
      <span>{email}</span>
      <img src={img} alt="img" />
    </div>
  );
}
