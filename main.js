const addressText = document.getElementById("address");
const addressBtn = document.getElementById("addressBtn");

addressBtn.addEventListener("click", generateAddress)

generateAddress()

async function generateAddress(){
    const res = await fetch(
        'https://randomuser.me/api/?results=5'
    )
    const data = await res.json();
    console.log(data)
     let address = ''
    // if (data.address == undefined) {
    // address = 
    // } else {
    //     address = data.address
    // }
    addressText.innerHTML = "Name is: " + data.results[0].name.first + " " + data.results[0].name.last + " | Address is: "  + data.results[0].location.street.number + "  "  + data.results[0].location.street.name + " | Phone Number is: "  + data.results[0].phone + " | Age is: "  + data.results[0].dob.age + " | Gender: "  + data.results[0].gender;
    
}