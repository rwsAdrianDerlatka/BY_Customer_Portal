console.log("test")

fetch("https://app-dev-350.backend.bywms.rhenus.com:21600/api/platform/login", {
    method:"POST",
    mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({
        userId: "adrian.derlatka",
        password: "N@dk0m1s@rz",
    }),
}
)