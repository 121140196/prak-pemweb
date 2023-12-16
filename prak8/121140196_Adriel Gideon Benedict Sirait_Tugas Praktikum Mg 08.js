//Adriel Gideon Benedict Sirait
//121140196
//RC

let data = [
    { id: 1, name: "Adriel Gideon Benedict Sirait", email: "adriel.121140196@student.itera.ac.id" },
    { id: 2, name: "Adriel Gideon Benedict Sirait", email: "adriel.121140196@student.itera.ac.id" }
];

function displayData() {
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<p><strong>Name:</strong> ${item.name}</p>
                          <p><strong>Email:</strong> ${item.email}</p>
                          <button onclick="editData(${item.id})">Edit</button>
                          <button onclick="deleteData(${item.id})">Delete</button>`;
        dataContainer.appendChild(card);
    });
}

function showForm() {
    const formContainer = document.getElementById("formContainer");
    formContainer.style.display = "block";
}

function saveData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const id = data.length + 1;

    data.push({ id, name, email });
    displayData();
    clearForm();
}

function editData(id) {
    const selectedData = data.find(item => item.id === id);

    document.getElementById("name").value = selectedData.name;
    document.getElementById("email").value = selectedData.email;

    deleteData(id);

    showForm();
}

function deleteData(id) {
    data = data.filter(item => item.id !== id);
    displayData();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("formContainer").style.display = "none";
}

displayData();
