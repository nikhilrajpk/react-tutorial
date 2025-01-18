import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

const ProductList = [
  {id : 1, name : 'Laptop'},
  {id : 2, name : 'SmartPhone'},
  {id : 3, name : 'HeadPhone'},
  {id : 4, name : 'Keyboard'},
  {id : 5, name : 'Mouse'},
]

function App() {
  
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(ProductList)

  const filteredProducts = useMemo(()=>{
    console.log('filtering products')

    return products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [search, products])

  return (
    <div
    style={{padding:'20px', maxWidth:'400px', margin:'0 auto'}}
    >
      <h2>Product List</h2>
      <input type="text"
        value={search}
        placeholder='Search for a product'
        onChange={(e)=> setSearch(e.target.value)}
        style={{padding:'5px', width:'100%', marginBottom:'10px'}}
      />
    
    <ul>
      {
        filteredProducts.map((product)=>(
          <li key={product.id}>
            {product.name}
          </li>
        ))
      }
    </ul>
    </div>
  )
}

export default App
