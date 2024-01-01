import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs]= useState(null);
    const [isPending, setIsPending]= useState(true); //places a lading message
    const [error, setError]= useState(null);
    // const handleDelete=(id)=>{
    //     const newBlogs= blogs.filter(blog=>blog.id !==id);
    //     setBlogs(newBlogs);
    // };

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs') //fetches the blogs from the json server
            
            .then(res =>{
                console.log(res);
                if(!res.ok){  //if response does not even an 'okay' status, theor the error
                    throw Error('Could not fetch the data for that resource'); //throws the error
                }

                return res.json();
            })
            .then(data=> {
                console.log(data);
                setBlogs(data);
                setIsPending(false); 
                setError(null);
            })
            .catch(err =>{
                setIsPending(false);
                setError(err.message); //catches the error
                //used for handling fetch errors
            })
        }, 1000); //will take one second to fetch the data
    },[]); //changes for every render on the DOM


    // let name= "Mario";
    // const[name, setName]=useState('mario'); //setName is the name that will replace Mario
    // const[age, setAge]=useState(25);
    // const handleClick= (e)=>{
    //     console.log("Hello World", e);
        // setName('luigi');
        // setAge(30)
        //when the button is clicked it will change the name Mario to Luigi
    

    return (
        //use state hook makes a value reactive
        <div className="home">
            {/* use conditional rendering on all of them */}

            {error && <div>{error}</div>}   {/*if we have the value for error, it will output the error */}
            
            {isPending && <div> Loading...</div>} {/*if the pending is true, the loading message will appear */}
            
            {/* props are used to pass data from the parent component to the child component. Parent-Home. Child-BlogList */}
            
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}  {/*if we have the value for blogs, it will redirect to the bloglist prop for display */}
            
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs!"></BlogList> used to filter a certain author's blog */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
        </div>

    );
}
export default Home;

// Use json server--> npx json-server --watch data/db.json --port 8000

/* Endpoints

/blogs        GET      Fetch  Fetch all blogs
/blogs/{id}   GET      Fetch   Fetch a single blog
/blogs        POST     Add a new blog
/blogs/{id)   DELETE   Delete a blog
*/