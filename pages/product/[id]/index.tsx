import { useRouter } from 'next/router'
import { useProductByName } from '../../../components/Product/queries/__generated__/ProductByName'


export default function Album() {
  const router = useRouter()
  const { id } = router.query

  const { data, loading, error } = useProductByName({ variables: { name: String(id) } })
  if (loading) {
    return (<div>Loading...</div>)
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  const { productByName } = data
  console.log("ProductByName",productByName)
  return (
    <>
      <h1>Product: {productByName.id}</h1>
      <h2>{productByName.name}</h2>
      <h3>{productByName.description}</h3>
      <h3>{productByName.price}</h3>

      {productByName.images.map(image => {
        return <img src={`../images/${image.url}`} key={image.url} alt={image.url}/>
      })}
    </>
  )
}