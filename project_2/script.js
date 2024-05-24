const form = document.querySelector("form");
const URL = "https://66506ad1ec9b4a4a6031fff5.mockapi.io/DISCO";
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // console.log(e.target.username);
    // console.log(e.target.password);

    try {
        const data = { Name: e.target.username.value, Password: e.target.password.value };
        //!post axios
        const response = await axios.post(URL, data);
        addMember();
        e.target.username.value = ''
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }



});
const users = document.querySelector("#users")
let counter = 0;
async function addMember() {
    counter++;
    //!Get axios
    const { data } = await axios.get(`${URL}/${counter}`)
    // console.log(data);
    const li = document.createElement("li");

    li.addEventListener("dblclick", handleDelete)


    const span = document.createElement("span");
    li.textContent = "-" + data.Name;
    span.textContent = data.id;
    li.prepend(span)
    users.append(li)
}


async function handleDelete(e) {

    const id = e.target.children[0].innerText;
    console.log(id);
    try {
        //!Delete
        const { data } = await axios.delete(`${URL}/${id}`);
        console.log(data);
        e.target.remove();
    } catch (error) {
        console.log(error);
    }

}

//!CRUD
// axios.get(url)

// axios.post()

// axios.put()
// axios.patch()

//axios.delete()
