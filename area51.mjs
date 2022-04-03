import fetch from "node-fetch";
const getStaticPaths = async () => {
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
getStaticPaths().then((data) => console.log(JSON.stringify(data)));
