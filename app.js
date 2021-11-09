import axios from "axios"


const  getData= async(user_id,)=>{
const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
const {data:post}=await axios
("https://jsonplaceholder.typicode.com/posts?userId="+user_id)


const newData = { user, post };
  console.log(newData);

}
export default getData

