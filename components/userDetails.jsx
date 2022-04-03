function UserDetails({ people }) {
  return (
    <>
      {" "}
      <div>{`These are the user details for ${people.name}`}</div>
      <div>{`Name: ${people.name}`}</div>
      <div>{`Email: ${people.email}`}</div>
      <div>{`Phone: ${people.phone}`}</div>
      <div>{`Username: ${people.username}`}</div>
      <div>{`Website: ${people.website}`}</div>{" "}
    </>
  );
}

export default UserDetails;
