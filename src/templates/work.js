import React from "react"
import Layout from "../components/layout.js"
import ArtistData from "../../static/data/work_info.json"

const Work = props => {
  let html = props.pageContext.content
  let i=0
  let index
  let workInfo = ArtistData.works.filter(work => {
    let url = work.url
    if (props.pageContext.url == url) {
      index = i;
      return true;
    }
    i++;
  })[0]
  let prev = index - 1
  let next = index + 1
  console.log('prev', prev)
  console.log('artist: ', workInfo)
  return (
    <div className="work"><Layout header= { workInfo.name } previous={prev >= 0 ? `/works/${ArtistData.works[prev].url}/view` : null } next={next < ArtistData.works.length ? `/works/${ArtistData.works[next].url}/view` : null} headerType='work-header' subHead = { workInfo.artist }></Layout> <iframe style={{width:"100%",height:"100vh"}} srcDoc={html}></iframe></div>
  )
}
export default Work

//export const query = graphql`
//  query($path: String!) {
//  allFile(filter: {absolutePath: {eq: $path}}) {
//    edges {
//      node {
//        id
//        absolutePath
//        internal {
//          content
//        }
//      }
//    }
//  }
//}`
