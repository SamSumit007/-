import { useState } from "react";
//import { axios } from "axios";

const Addrestuarant = ({ toggleDisplay }) => {

    const [data, setData] = useState([
        {
            name: "",
            price: "",
            address: "",
            img: "",
            votes: ""
        }
     ] )
       
    const handleChange = (e)=> {
        let {className, value} = e.target;

        setData({...data, [className] : value});
    }


    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            let res= await fetch(" http://localhost:8000/AddRestaurant",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)

        })
        let data=await res.json();
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    
    }

    


    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text" onChange={handleChange} className="name" value={data.name} placeholder="Name"  />
            <br />
            <input type="number" onChange={handleChange} className="price" value={data.price} placeholder="Price" />
            <br />

            <input type="text" onChange={handleChange} className="address" value={data.address} placeholder="Address" />
            <br />

            <input type="number" onChange={handleChange} className="votes" value={data.votes} placeholder="Votes" />
            <br />

            <input type="text" onChange={handleChange} className="img" value={data.img} placeholder="Image Url" />
            <br />

            <input type="submit" />
            </form>

           
        </div>
    )
}


export {Addrestuarant};