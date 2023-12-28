import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs]= useState([
        {title: 'My new Website', body: 'lorem ipsum...', author:'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author:'luigi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author:'yoshi', id: 3}
    ]);


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
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>

                </div>

            ))}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
        </div>

    );
}
export default Home;