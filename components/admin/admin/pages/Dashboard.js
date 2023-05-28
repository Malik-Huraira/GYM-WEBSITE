import { useEffect, useState } from "react";
import { getCustomerListApi, deleteData } from "../../../../Service/api"
import { Link } from 'react-router-dom';
import "../../../../styles/Product.css"
const Dashboard = () => {

  const [CustomerList, setCustomerList] = useState([{}]);

  useEffect(() => {
    getCustomerList();
  }, [])


  const getCustomerList = async () => {
    const response = await getCustomerListApi();
    setCustomerList(response.data)
    console.log(CustomerList)
  }
  const handleDelete = async (id) => {
    await deleteData(id);
    CustomerList();
  }
  return (
  <div>
      <section className="section-container">

        {
          CustomerList.map((data) => (
            <div className="card-container"  key={data.id}>
              <div className="card-img-container">
                <img src={data.img} />
              </div >
              <div className="card-info-con">
                <h6>USERNAME :{data.username}</h6>
                <h6>PASSWORD :{data.password}</h6>
                <h6>CGPA :{data.cgpa}</h6>
                <div>
                  <Link to={`/admin/dashboard/${data._id}`}><button style={{ borderRadius: 8, padding:5 }} >Edit</button></Link>
                  <button style={{ borderRadius: 8, marginLeft: 100, padding: 5 }} onClick={() => handleDelete(data._id)}>Delete</button>
                </div>
                

              </div>
            </div>
          ))
        }
      </section>
  </div>
  )
}

export default Dashboard;