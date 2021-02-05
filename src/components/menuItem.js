import React from "react"

export default function Menu(props) {
  let item = props.item
  return (<div className="menu-item"><a href={"/works/" + item.url + "/view"}><img className="preview-image" src={`/img/${item.url}.png`} />{item.name} </a> <p>{item.artist}</p></div>
    )
  }
