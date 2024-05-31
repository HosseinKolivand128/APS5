const URL = "https://66506ad1ec9b4a4a6031fff5.mockapi.io/DISCO"

const list = document.querySelector(".person-list");
async function addPersons(params) {
    const response = await axios.get(URL);
    response.data.forEach(element => {
        const li = document.createElement("li");
        li.style.display = "flex"
        li.style.justifyContent = "space-between"

        li.setAttribute("data-toggle", "modal")
        li.setAttribute("data-target", "#exampleModal")

        li.addEventListener("dblclick", deleteMember)


        li.addEventListener("click", (event1) => {
            const editForm = document.querySelector("#editForm");
            const id = event1.target.children[0].textContent;
            console.log(id);
            editForm.addEventListener("submit", async (e) => {
                e.preventDefault()

                const data = { Username: e.target.Username.value, Role: e.target.Role.value }
                e.target.Username.value = "";
                e.target.Role.value = ""
                console.log(data);
                try {
                    const response = await axios.put(`https://66506ad1ec9b4a4a6031fff5.mockapi.io/DISCO/${id}`, data);
                    console.log(response);
                    e.target.remove();
                    alert("Member edited seccussfully")
                } catch (error) {
                    console.log(error);
                }
            })

        })

        const name = document.createElement("p")
        name.textContent = element.Username
        const id = document.createElement("p");
        id.textContent = element.id
        const role = document.createElement("p");
        role.textContent = element.Role

        li.append(id, name, role)
        list.append(li)


    });
}
addPersons();

const deleteMember = async (e) => {
    // console.log(e.target.children[0].textContent);
    const id = e.target.children[0].textContent;
    try {
        const response = await axios.delete(`https://66506ad1ec9b4a4a6031fff5.mockapi.io/DISCO/${id}`);
        console.log(response);
        e.target.remove();
        alert("Member deleted seccussfully")
    } catch (error) {
        console.log(error);
    }

}


