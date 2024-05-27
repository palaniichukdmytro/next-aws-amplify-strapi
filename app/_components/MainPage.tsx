async function getStrapiData(url: string) {
  const baseUrl = 'http://localhost:1337'
  try {
    const response = await fetch(`${baseUrl}${url}`)

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function MainPage() {
  const strapiData = await getStrapiData('/api/home-page')

  const { title, description } = strapiData.data

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}
