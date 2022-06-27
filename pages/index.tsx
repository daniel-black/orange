import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>IWT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center">
        <h1 className="text-6xl font-bold">
          I wish that<span className='animate-pulse'>...</span>
        </h1>
      </main>

    </div>
  )
}

export default Home
