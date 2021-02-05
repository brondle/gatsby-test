import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
import about from "../../static/data/about.json"
let artists = ArtistData.works
export default function About() {
  return <Layout header="Generative Unfoldings" subPara="Consequntur et in dolores accusamus ex iure a. Libero distinctio est atque et voluptates autem. Repellendus distinctio et a voluptatem ut iste ut pariatur. Dolor eum dolor non animi adipisci. Ut non tempora voluptate ut non magnam hic et. Et consectetur necessitatibus voluptas dolorem ut non aut voluptatem. <a href='about'>About.</a>">
    <div className="about" dangerouslySetInnerHTML={{__html: about.about}}>

    </div>
    <Footer className="footer"></Footer>
    </Layout>
}
