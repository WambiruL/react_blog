import { useState } from "react";
const Home = () => {


    // let name= "Mario";
    const[name, setName]=useState('mario'); //setName is the name that will replace Mario
    const[age, setAge]=useState(25);
    const handleClick= (e)=>{
        console.log("Hello World", e);
        setName('luigi');
        setAge(30)
        //when the button is clicked it will change the name Mario to Luigi
    }

    return (
        //use state hook makes a value reactive
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>

    );
}
export default Home;