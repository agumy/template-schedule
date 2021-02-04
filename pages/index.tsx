import Head from 'next/head'

import { DayCalendar } from '../components/organisms/DayCalendar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Schedule Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full">
        <DayCalendar />
      </div>
    </>
  )
}
