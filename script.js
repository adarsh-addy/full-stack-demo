let btn = document.querySelector(".btn1");
btn.addEventListener("click", async function (e) {
  e.preventDefault();

  let id = document.querySelector("input[name='id']").value;
  let name = document.querySelector("input[name='name']").value;
  let age = document.querySelector("input[name='age']").value;
  let email = document.querySelector("input[name='email']").value;

  let resp = await axios.post("/backend/save", {
    id,
    name,
    age,
    email,
  });

  console.log(resp.data);
});

let btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", async function (e) {
  e.preventDefault();

  let id = document.querySelector("input[name='id_up']").value;
  let name = document.querySelector("input[name='name_up']").value;
  let age = document.querySelector("input[name='age_up']").value;
  let email = document.querySelector("input[name='email_up']").value;

  let resp = await axios.patch("/backend/update", {
    id,
    name,
    age,
    email,
  });

  console.log(resp.data);
  console.log(id, name, age, email);
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", async function (e) {
  e.preventDefault();

  let tbody = document.querySelector("tbody");

  let resp = await axios.get("/backend/show");
  console.log(resp.data);
  let student = resp.data.records;
  console.log(student);

  tbody.innerHTML = [];
  for (let st of student) {
    let tbl = ` <tr>
            <td>${st.id}</td>
            <td>${st.name}</td>  
            <td>${st.age}</td>
            <td>${st.email}</td>
            
        </tr>`;

    tbody.innerHTML += tbl;
  }
});

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", async function (e) {
  e.preventDefault();

  let tbody = document.querySelector("tbody");

  let resp = await axios.get("/backend/ascend");

  let student = resp.data.records;

  tbody.innerHTML = [];
  for (let st of student) {
    let tbl = ` <tr>
                <td>${st.id}</td>
                <td>${st.name}</td>  
                <td>${st.age}</td>
                <td>${st.email}</td>
                
            </tr>`;

    tbody.innerHTML += tbl;
  }

  console.log(resp.data);
});

let btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", async function (e) {
  e.preventDefault();

  let tbody = document.querySelector("tbody");

  let resp = await axios.get("/backend/desc");

  let student = resp.data.records;

  tbody.innerHTML = [];
  for (let st of student) {
    let tbl = ` <tr>
                <td>${st.id}</td>
                <td>${st.name}</td>  
                <td>${st.age}</td>
                <td>${st.email}</td>
                
            </tr>`;

    tbody.innerHTML += tbl;
  }

  console.log(resp.data);
});

let btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", async function (e) {
  e.preventDefault();

  let id = document.querySelector("input[name='id_del']").value;

  let resp = await axios.delete("/backend/del", {
    data: { id },
  });

  console.log(resp.data);
  console.log(id);
});
