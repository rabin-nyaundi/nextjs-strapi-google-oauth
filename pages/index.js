import { getSession, signIn, signOut } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const IndexPage = ({ session }) => {




  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <div className="flex flex-col w-1/2 justify-center mx-auto">
        <div className="flex justify-center p-20 bg-gray-100">
          <Link href="/api/auth/signin">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </button>
        </Link>
        </div>
      </div>
    )
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div className="flex flex-col py-10 justify-center">
        <Link href="/api/auth/signout">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="flex flex-col w-1/2 justify-center mx-auto">
        <div className="flex flex-col justify-center p-20 bg-gray-100">
        <div className="flex navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="flex justify-center">You aren't authorized to view this page</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="flex flex-col w-1/2 justify-center mx-auto">
        <div className="flex flex-col justify-center p-20 bg-gray-100">
      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="flex flex-col py-10 justify-center">Hello world</div>

          </div>
        </div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};

export default IndexPage;
