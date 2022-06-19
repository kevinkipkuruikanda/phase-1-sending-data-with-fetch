// Add your code here
async function submitData(name, email) {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
            }),
        });
        const object = await response.json();
        document.body.innerHTML = object["id"];
    } catch (error) {
        document.body.innerHTML = error.message;
    }
  }
  