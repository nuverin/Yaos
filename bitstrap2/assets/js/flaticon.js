// mendapatkan icon dari fetchs
// apikey icon flaticon

// convert fetch
let headerslist = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI1MTQ5MjgzNCIsInVpcCI6IjEwLjQzLjEuNzQiLCJleHAiOjE2NTczMDIyNDUsInVuYW1lIjoidXNlcjUxNDkyODM0IiwicnBtIjoyNDAwLCJwcmVtaXVtIjpmYWxzZSwiYXBpa2V5IjoiMzFmNDlmMGQ3NGVjNTFjNTIyZTQwZmU2Nzc5ZTVjOWI3NTg1ZTQ2MCIsInNjb3BlIjpbIm93bmVkLnJlYWQiXSwiZGxpbWl0Ijo1MDAsImFwaWRsaW1pdCI6dHJ1ZSwiZExpbWl0UmVuZXdEYXRlIjoiMjAyMi0wOC0wNiJ9.74K3c-XbQNmNfjpcsC1XnRjpMumgWDGhr7n4_WNBybs",
};
let code = async () => {
  let url = "https://api.flaticon.com/v3/item/icon/3163173";
  try {
    await fetch(url, {
      method: "GET",
      headers: headerslist,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let html = "";
        Object.entries(data).forEach((user) => {
          let i = user["1"];
          let s = "";
          let html = `<div class="user">
                        <img src="${i.images["64"]}" alt="" />
                        <h2 class="text-dark">${i.description}</h2>
                        <div class="namaproduk"></div>
                      </div>`;
          s += html;
          document.querySelector("#rosel").innerHTML = s;
        });
      });
  } catch (error) {
    alert(error.message);
  }
};
code();
// render icon to api flaticon

// }https://api.flaticon.com/v3/app/authentication
