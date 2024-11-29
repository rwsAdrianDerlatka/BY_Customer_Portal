const byLogin="https://app-dev-350.backend.bywms.rhenus.com:21600/api/platform/login";

fetch(byLogin, {
    method:"POST",
    mode: "cors",
    "Access-Control-Allow-Origin": "https://app-dev-350.backend.bywms.rhenus.com:21600/api/platform/login", 
    headers: {
        "Content-Type": "application/json"          
    },
    body: JSON.stringify({
        userId: "adrian.derlatka",
        password: "N@dk0m1s@rz",
    }),
}
);

console.log("test");

