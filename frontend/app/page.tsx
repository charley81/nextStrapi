import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextjs & Strapi'
}

export default async function Home() {
  return (
    <main className="">
      <h1>nextStrapi</h1>
    </main>
  )
}
