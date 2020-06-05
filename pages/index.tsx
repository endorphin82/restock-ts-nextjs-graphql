// import { useRouter } from 'next/router'
import { useCategoryByName } from '../components/Category/queries/__generated__/CategoryByName'
import Link from 'next/link'

export default function Category() {
  // const router = useRouter()
  // const { id } = router.query
  const categoryName = 'jordan'
  const { data, loading, error } = useCategoryByName({ variables: { name: String(categoryName) } })
  if (loading) {
    return (<div>Loading...</div>)
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  const { categoryByName } = data
  return (
    <>
      <h1>Products in category: {categoryByName.name}</h1>
      {
        categoryByName?.products?.map((product, ind) => {
          return (
            <div key={`${ind}+${product.id}`}>
              <div>
                {product.name}
              </div>
              <div>
                ${product.price}
              </div>
              <img src={`icons/${product.icon}`}/>
              <Link href={`/product/${product.url}`}>
                <a href={`/product/${product.url}`}>{product.url}</a>
              </Link>
            </div>
          )
        })
      }
    </>
  )
}