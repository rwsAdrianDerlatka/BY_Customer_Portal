const byLogin="https://app-dev-350.backend.bywms.rhenus.com:21600/api/platform/login";

console.log("test")

fetch(byLogin, {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        userId: "adrian.derlatka",
        password: "N@dk0m1s@rz",
    }),
}
)