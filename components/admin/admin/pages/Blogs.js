import React from 'react'

function Blogs() {
  return (
   
    <div className='col-md-6 position-absolute start-50 translate-middle-x mt-5'>
      <form>
        <label className="mb-2">Exercise</label>
        <input type="text" className='form-control mb-3' name='text' />
       
        <label className="mb-2">Nutrients Tip</label>
        <input type="text" className='form-control mb-9' name='Name' />

        <label className="mb-2">Goals</label>
        <input type="text" className='form-control mb-3' name='Goals' />

        <label className="mb-2">Tip and Tricks</label>
        <input type="text" className='form-control mb-3' name='Tip and Tricks' />

        <button className='btn btn-primary form-control'> BuyNow</button>
      </form>
 
      
    </div>
  )
}

export default Blogs
