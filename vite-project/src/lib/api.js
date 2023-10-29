import axios from 'axios'
import { store } from '/src/store'

export const instance = axios.create({
  baseURL: 'https://localhost:3001',
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data && error.response.data.message)
      error.message = error.response.data.message

    return Promise.reject(error)
  },
)

export const authInstance = () => {
  const state = store.getState()
  const authToken = state.user.authToken
  instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  return instance
}

const adminProductGet = ({ id }) => {
  return authInstance().get(`/admin/product/${id}`)
}

const adminProductList = () => {
  return authInstance().get(`/admin/product/list`)
}

const adminProductCreate = ({ name, description }) => {
  return authInstance().post(`/admin/product/create`, {
    name,
    description,
  })
}

const adminProductUpdate = ({ id, name, description }) => {
  return authInstance().post(`/admin/product/update/${id}`, {
    name,
    description,
  })
}

const adminProductDelete = ({ id }) => {
  return authInstance().post(`/admin/product/delete/${id}`)
}

const userProductGet = ({ id }) => {
  return authInstance().get(`/product/${id}`)
}

const userProductList = () => {
  return authInstance().get(`/product/list`)
}

const api = {
  admin: {
    product: {
      get: adminProductGet,
      list: adminProductList,
      create: adminProductCreate,
      update: adminProductUpdate,
      delete: adminProductDelete,
    },
  },
  user: {
    product: {
      get: userProductGet,
      list: userProductList,
    },
  },
}

export default api
