export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => ({
    params: { heroID: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.heroID;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
};
import UserDetails from "../../components/userDetails";

function HeroPage({ people }) {
  // console.log(props);
  return (
    <div>
      <UserDetails people={people}></UserDetails>
    </div>
  );
}

export default HeroPage;
