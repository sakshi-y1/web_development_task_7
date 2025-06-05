function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const container = document.getElementById("user-container");
            container.innerHTML = ""; 

            users.forEach(user => { 
                const userDiv = document.createElement("div");
                userDiv.className = "user-card";
                userDiv.innerHTML = `
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.city}, ${user.address.street}</p>
                `;
                container.appendChild(userDiv);
            });
        })
        .catch(error => { 
            console.error("Error fetching user data:", error);
            document.getElementById("user-container").innerHTML = "<p>Failed to load user data. Check network connection.</p>";
        });
}


document.getElementById("reload").addEventListener("click", fetchUsers);

// Initial fetch
fetchUsers();