const byLogin="https://app-dev-350.backend.bywms.rhenus.com:21600/api/platform/login";

console.log("test")

fetch(byLogin, {
    method:"POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        Access-Control-Allow-Origin: "https://app-dev-350.backend.bywms.rhenus.com:21600/api/platform/login"
    },
    body: JSON.stringify({
        userId: "adrian.derlatka",
        password: "N@dk0m1s@rz",
    }),
}
)
