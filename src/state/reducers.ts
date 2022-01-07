import productReducer from './console/reducers'

export default ({ auth, product }, action) => ({
  product: productReducer(product, action),
})
