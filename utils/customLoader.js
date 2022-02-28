// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  const NODE_ENV = process.env.ENV || process.env.NODE_ENV || 'development';
  const isProd = NODE_ENV === 'production'
  return isProd ? '/site-dashboard'+src : src
}

export default customLoader