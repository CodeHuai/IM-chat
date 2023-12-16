import axios from "axios"
const cancelTokens = {}

export const addPending = (config) => {
  const requestKey = getRequestKey(config)
  if (cancelTokens[requestKey]) {
    cancelTokens[requestKey].cancel('cancel request')
  }
  const source = axios.CancelToken.source()
  cancelTokens[requestKey] = source
  config.cancelToken = source.token
}

export const deletePending = (res) => {
  const requestKey = getRequestKey(res.config)
  if (cancelTokens[requestKey]) {
    delete cancelTokens[requestKey]
  }
}

const getRequestKey = (config = {}) => {
  return config.url + config.method + JSON.stringify(config.params, config.data)
}