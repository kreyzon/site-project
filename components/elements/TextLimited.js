import React from "react"
function abbreviateText(text="", limit=1) {
  if (text.length < limit) {
    return text
  }
  return text.substring(0, limit).concat("...")
}

export default function TextLimited({ element="p", text, limit=90 }) {
  return React.createElement(element, {}, abbreviateText(text, limit))
}