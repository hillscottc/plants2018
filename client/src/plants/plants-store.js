// import querystring from 'querystring'
// import { checkHttpResp } from '../utils.js'

// const API_HOST = process.env.REACT_APP_API_HOST || 'https://sch-datahub.herokuapp.com'

export function searchPlants ({common, family, symbol, sci, limit = 10, offset = 0}) {
  const payload = {common, family, symbol, sci, limit, offset}

  const fetchArgs = {
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(payload)
  }
  return fetch('/api/plants/', fetchArgs) // eslint-disable-line no-undef
    // .then(checkHttpResp)
    .then((response) => response.json())
    .then((json) => {
      const {data, pagination} = json
      return { data, pagination }
    })
}
