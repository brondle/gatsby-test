import React, { useState } from "react"

export default function WorkHeader(props) {
  console.log('header props: ', props)
  let open = props.headerState
  function handleChange(val) {
    props.onClick(!val);
  }
  return <div className={`header work-header ${ open ? "open" : "closed" }`}>
    <a onClick= {handleChange} className={`icon-show-hide ${open ? "hide-header": "show-header"}`}></a>
  { props.previous && <div><a className="previous" href={props.previous}>Previous</a></div>}
  <div className="info"><h1><a href="/">{props.headerText}</a></h1>
    {props.subHead && <h2> {props.subHead} </h2>}
    {props.subPara && <p> {props.subPara} </p>}</div>
  {props.next &&<div><a className="next" href={props.next}>Next</a></div>}
     </div>
}

WorkHeader.defaultProps = {
  open: true
}
