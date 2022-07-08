// mendapatkan icon dari fetchs
// apikey icon flaticon

// convert fetch
let headerslist = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI1MTQ5MjgzNCIsInVpcCI6IjEwLjQzLjEuMTciLCJleHAiOjE2NTczMjI0NjEsInVuYW1lIjoidXNlcjUxNDkyODM0IiwicnBtIjoyNDAwLCJwcmVtaXVtIjpmYWxzZSwiYXBpa2V5IjoiMzFmNDlmMGQ3NGVjNTFjNTIyZTQwZmU2Nzc5ZTVjOWI3NTg1ZTQ2MCIsInNjb3BlIjpbIm93bmVkLnJlYWQiXSwiZGxpbWl0Ijo1MDAsImFwaWRsaW1pdCI6dHJ1ZSwiZExpbWl0UmVuZXdEYXRlIjoiMjAyMi0wOC0wNiJ9.69VUdutlv1ZTNPsPb2JuOihSj_eWDQcnbF3eMv3SYjI",
};
let code = async () => {
  let url = "https://api.flaticon.com/v3/item/icon/7958418";
  try {
    await fetch(url, {
      method: "GET",
      headers: headerslist,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const [key, value] of Object.entries(data)) {
          let emptyHTML = "";
          let html = `<div class="user">
                        <img src="${value.images["64"]}" alt="" />
                        <h2 class="text-dark">${value.description}</h2>
                        <div class="namaproduk"></div>
                      </div>`;
          emptyHTML += html;
          document.querySelector("#rosel").innerHTML = s;
        }
      });
  } catch (error) {
    alert(error.message);
  }
};
code();
// render icon to api flaticon

// }https://api.flaticon.com/v3/app/authentication
