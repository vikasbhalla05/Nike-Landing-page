import React from 'react'
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from "./sections/index"
import Nav from './components/Nav'

const App = () => (
  <main className='relative'>
    <Nav/>
    <section className='xl:padding-l wide:padding-x padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='padding bg-pale-blue'>
      <CustomerReviews />
    </section>
    <section className='padding-x sp:py-32 py-6 w-full'>
      <Subscribe />
    </section>
    <section className='padding-x bg-black padding-t pb-8'>
      <Footer />
    </section>

  </main>
)

export default App