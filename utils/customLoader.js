// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default customLoader