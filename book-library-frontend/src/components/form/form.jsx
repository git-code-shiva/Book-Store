import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import './form.css';
const Form=()=>{

    const navigate = useNavigate();
    const [allData, setAllData] = useState({title:"", author:"",genre:"",year:""})
    // const [imageURL , setImageURL] = useState("");

    

    const handleValue=(e)=>{
        setAllData({...allData, [e.target.name]:e.target.value});

    }

   
        // useEffect(()=>{
        //     fetch('http://localhost:8081/createPost',{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //         "jwttoken":JSON.parse(
        //             localStorage.getItem('userData')
        //         ).token
        //     },
        //     body: JSON.stringify({
        //         title: allData.title,
        //         description: allData.description
        //     })
        // }).then(res=>res.json()).then(data=>{
        //     if(data.error){}
        //     else{
        //         navigate('/home')
        //     }
        // }).catch(err=>console.log(err))
        // },[allData.title])
        
        const handlePost = async (e) => {
            e.preventDefault();
          
            if (!allData.title || !allData.author || !allData.genre || !allData.year) {
              console.log("Please fill all the fields"); // Add this console log for frontend validation
              return;
            }
          
            try {
              const response = await axios.post("http://localhost:8081/createPost", {
                title: allData.title,
                author: allData.author,
                genre: allData.genre,
                year: allData.year,
              });
          
              if (response.data.error) {
                console.log(response.data.error);
              } else {
                navigate("/");
              }
            } catch (error) {
              console.log(error);
            }
          };
    
    return(
        <>
            <Header/>
            <div className="form_container">
            <div className="title">
                <div className="title_heading">Title</div>
                <textarea type="text" name="title" placeholder="Title" onChange={handleValue} />
            </div>
            <div className="desc">
                <div className="desc_heading">Author</div>
                <textarea type="text" name="author" placeholder="Author" onChange={handleValue} />
            </div>
            <div className="genre">
                <div className="genre_heading">Genre</div>
                <textarea type="text" name="genre" placeholder="Genre" onChange={handleValue} />
            </div>
            <div className="year">
                <div className="year_heading">Publication Year</div>
                <input className="year_class" type="number" name="year" placeholder="Publication Year" onChange={handleValue} />
            </div>

            <button className="form-btn" onClick={handlePost}>Add Book</button>
            </div>
        </>
    )
}
export default Form;