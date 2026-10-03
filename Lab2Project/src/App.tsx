import { useState } from 'react'
import './App.css'
import listings from './data/data.ts'
import ListingContainer from "./components/listingContainer";

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Resorts Lite</h1>
           <ListingContainer data={listings} />
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
