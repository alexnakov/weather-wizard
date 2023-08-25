import { getCityInfo } from "./utils"

describe('get latitude and longitude of a city', () => {
  it('gives back specific values when input is London', async () => {
    const data = await getCityInfo('london')
    expect(data).toEqual({
      country: "GB", name: "London", lat: 51.5085, lon: -0.1257,
    })
  })

  it('same for madrid', async () => {
    const data = await getCityInfo('madrid')
    expect(data).toEqual({
      country: "ES", name: "Madrid", lat: 40.4165, lon: -3.7026,
    })
  })
})