import React from 'react';
import connectDB from './../utils/connectDB';
import User from './../models/User';

const SSR = ({users}) => {
    return (
        console.log(users)
        <div>
           SSR 
        </div>
    );
};

export default SSR;

export async function getServerSideProps(){
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