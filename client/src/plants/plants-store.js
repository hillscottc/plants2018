export async function searchPlants ({common, family, symbol, sci, limit = 10, offset = 0}) {
  const fetchArgs = {
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({common, family, symbol, sci, limit, offset})
  }
  const response = await fetch('/api/plants/', fetchArgs) // eslint-disable-line no-undef
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  const {data, pagination} = body
  return { data, pagination }
}
