const API_BASE = "http://localhost:8004";
async function api(endpoint, option = {}) {
  const res = await fetch(API_BASE + endpoint, {
    headers: { "cotent-Type": "application/json" },
    credentials: "include",
    ...option,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message);
  return data;
}

const signupform = document.getElementById("Signup");
console.log(signupform);

if (signupform) {
  signupform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    console.log(username)
    const Email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    try{
        await api("/api/users/signup",{
            method:"POST",
            body:JSON.stringify(username,Email,password)
        });
        console.log("signup successfully...");
        alert("succsessfuly");
    }catch(err){
        console.error(err.message)
    }
  });
}


