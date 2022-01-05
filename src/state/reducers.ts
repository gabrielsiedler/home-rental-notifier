import productReducer from './product/reducers'

export default ({ auth, product }, action) => ({
  product: productReducer(product, action),
})
