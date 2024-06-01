const URL = "https://66506ad1ec9b4a4a6031fff5.mockapi.io/DISCO";

const list = document.querySelector(".person-list");

async function addPerson() {
    const response = await axios.get(URL);
    console.log(response.data);
    response.data.forEach(element => {
        const li = document.createElement("li");

        li.style.display = "flex"
        li.style.justifyContent = "baseline";
        li.style.flexDirection = "column";
        li.style.alignItems = "center";

        li.setAttribute("data-toggle", "modal")
        li.setAttribute("data-target", "#exampleModal")

        li.addEventListener("dblclick", deleteMember);



        const id = document.createElement("p");
        const name = document.createElement("p");
        const role = document.createElement("p");

        id.textContent = element.id;
        name.textContent = element.username;
        role.textContent = element.role;

        li.append(id, name, role);
        list.append(li);






        li.children[1].addEventListener("click", (e) => {
            const editForm = document.querySelector("#editForm");

            let id = e.target.parentElement.children[0].textContent;
            console.log(id);

            editForm.addEventListener("submit", async (e) => {
                e.preventDefault();

                const data = {
                    username: e.target.username.value,
                    role: e.target.role.value
                }
                e.target.username.value = ""
                e.target.role.value = ""
                // console.log(data);

                try {
                    const response = await axios.put(`${URL}/${id}`, data);
                    console.log(response.status);
                    alert("Member edited successfully")
                    window.location.reload();
                } catch (error) {
                    console.log(error);
                }
            })

        })

    });
}

addPerson();



async function deleteMember(e) {
    let id;
    if (e.target.children[0]) {
        id = e.target.children[0].textContent;//!
    }
    try {
        const response = await axios.delete(`${URL}/${id}`);
        console.log(response.status);
        e.target.remove();
    } catch (error) {

    }
    // console.dir(e.target);
    console.log(id);
}