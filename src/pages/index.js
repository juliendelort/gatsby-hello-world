import React from "react"
import Layout from './components/Layout'

export default function Home() {
  React.useEffect(() => {
    fetch(`https://pacific-brook-53088.herokuapp.com/recognitions`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log({ resultData });
      }) // set data for the number of stars
  }, []);
  return <Layout>
    <h2>Main page!</h2>
  </Layout>
}
