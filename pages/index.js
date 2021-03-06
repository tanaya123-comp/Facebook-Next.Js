import { getSession, session } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header';
import Login from '../components/Login';
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

export default function Home({ session  }) {

  if (!session) return <Login />;


  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>

      <main className="flex">

        {/* SideBar */}
        <SideBar/>
      

        {/* Feed */}
        <Feed/>
        {/* Widget */}

      </main>

      
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context)
  
  // console.log(session)

  return {
    props: { session },
  }

}
