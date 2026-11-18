

console.log("connected")

const user={
    name:"raju",
    age:26,
    statu:false,
    salary:50000
}


const token="dfkhdfafkjbeqiufbqekjfieuqfe"
localStorage.setItem("token",token)

localStorage.setItem("user",JSON.stringify(user))

const user1=JSON.parse(localStorage.getItem("user"))
console.log(user1)

// localStorage.removeItem("token")
// localStorage.removeItem("user")