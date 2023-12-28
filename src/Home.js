import { useState } from "react";
import BlogList from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs]= useState([
        {title: 'My new Website', body: 'lorem ipsum...', author:'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author:'luigi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author:'yoshi', id: 3}
    ]);

    const handleDelete=(id)=>{
        const newBlogs= blogs.filter(blog=>blog.id !==id);
        setBlogs(newBlogs);
    }


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
            {/* props are used to pass data from the parent component to the child component. Parent-Home. Child-BlogList */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}></BlogList>
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs!"></BlogList>{/* used to filter a certain author's blog */}

            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
        </div>

    );
}
export default Home;