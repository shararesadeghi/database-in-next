import React from "react";
import connectDB from "./../utils/connectDB";

const SSG = ({ users }) => {
  console.log(users);
  return <div>SSG</div>;
};

export default SSG;

export async function getStaticProps() {
  try {
    await connectDB();
    const users = await User.find();
    return {
      props: { users: JSON.parse(JSON.stringify(users)) },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
