const App = () => {

  const Products = [
    {ID:10102,Name:"Watch",Price:1500,Category:"unisex"},
    {ID:10108,Name:"Hairdryer",Price:2300,Category:"Electronics"},
    {ID:10102,Name:"Lipstick",Price:999,Category:"Cosmetic"},
    {ID:10102,Name:"serum",Price:3000,Category:"Skincare"}
       
  ]
  return (
    <>
    <div className = "bg-purple-700  h-100 flex gap-10 justify-center items-center">
      {Products.map((e,i)=>(
        <div className = "bg-gray-400 p-20 h-50 w-50 text-center rounded-2xl"key = {i}>
          <p>{e.ID}</p>
         <p>{e.Name}</p>
         <p>{e.Product}</p>
         <p>{e.Category}</p>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default App