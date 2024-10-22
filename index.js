const menuLinks = [
  { text: "2025'Carnival", href: "/about" },
  {
    text: "Trim",
    href: "#",
  },

  {
    text: "Colors",
    href: "#",
  },
  {
    text: "Powertrain",
    href: "#",
  },
  {
    text: "Packages",
    href: "#",
  },
  {
    text: "Accessories",
    href: "#",
  },
  {
    text: "Summary",
    href: "#",
  },
];

let body = document.querySelector("body");
/////////////////////////////////////tried and works well, but  it not good for my this case, put it as footer.
const foot = document.querySelector("footer");
foot.classList.add("flex-ctr");

const mainpic = document.createElement("section");
mainpic.classList.add("flex");
mainpic.style.backgroundColor = "var(--main-pic-bg)";
mainpic.style.width = "60%";
mainpic.style.height = "200px";
mainpic.innerHTML = "";
const h1 = document.createElement("h1");
h1.textContent = "js creates footer here";
body.appendChild(foot).appendChild(mainpic).appendChild(h1);

const sidebar = document.createElement("section");
sidebar.classList.add("flex");
sidebar.style.backgroundColor = "#var(--main-pic-bg)";
sidebar.style.width = "40%";
sidebar.style.height = "200px";
sidebar.innerHTML = "";
body.appendChild(foot).appendChild(sidebar);
const carTrim = document.createElement("div");
carTrim.classList.add("flex");
carTrim.style.height = "100px";
carTrim.innerHTML = "js creates footer here";
sidebar.appendChild(carTrim);
const reqQuote = document.createElement("div");
reqQuote.classList.add("flex");
reqQuote.style.height = "80px";
reqQuote.innerHTML = "but I dont want to use for the case.";
sidebar.appendChild(reqQuote);
////////////////////////////////tried and works well, but  it not good for my this case.

const orderMenu = document.getElementById("order-menu");
console.log(orderMenu)
orderMenu.style.backgroundColor = "var(--top-menu-bg)";
// orderMenu.style.height = "100%";
// orderMenu.style.margin = "20px 130px";
orderMenu.classList.add("flex-ctr");

menuLinks.forEach((menus) => {
  const topA = document.createElement("a");
  topA.textContent = `
      ${menus.text}
      `;
  topA.setAttribute("href", `${menus.href}`);
  orderMenu.appendChild(topA);
});

let orderMenuLinks = Array.from(document.querySelectorAll("a"));
orderMenu.addEventListener("click", (e) => {
  if (e.target.tagName !== "a") {
    e.preventDefault();
  }
  // e.preventDefault();
  // if (!topMenuLinks.includes(e.target)) return; ///REF
  const previousSelection = orderMenuLinks.find((element) => {
    //REF CONTAINS !!!!!!!!!
    return element.classList.contains("active");
  });
  // Remove active class from all links
  orderMenuLinks.forEach((link) => {
    link.classList.remove("active");
    if (previousSelection === e.target) {
      /////REF If current selection is similar to previous selection remove the active class
      e.target.classList.remove("active");
    } else {
      //  add the active class
      e.target.classList.add("active");
    }
  });
});

//validation
const form = document.getElementById("request");
const name = form.elements["username"];
const email = form.elements["email"];
const password = form.elements["password"];
const passwordCheck = form.elements["passwordCheck"];

form.addEventListener("Register", validate);

// The big validation function.
// While this may seem like a lot of functions we
// need to build, most will be very simple!
function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }
  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }
  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }
  alert(`Name: ${nameVal}
Email: ${emailVal}
Password:${passwordVal}`);
  return true;
}

const successMessage = document.getElementById("successMessage");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  // if (){
  // ??????????
  form.reset(); // Clear all form fields
  successMessage.style.display = "block"; // Show the success message
  // }
});

// Password Validation
function validatePassword() {
  if (password.value === name.value) {
    alert("Dont use name in password.");
    password.focus();
    return false;
  }
  return password.value;
}

function validatePasswordCheck() {
  if (passwordCheck.value !== password.value) {
    alert("Please keep your password same.");
    password.focus();
    return false;
  }
  return passwordCheck.value;
}

function validateAndConvertUsername(username) {
  // Convert to lowercase
  const lowercaseUsername = username.toLowerCase();
  // Check if the username is valid (add your validation rules here)
  const isValid = /^(?=.*[a-z]{2})(?!.*\W)(?!.* ).{4,}$/.test(
    lowercaseUsername
  );
  if (isValid) {
    return lowercaseUsername;
  } else {
    return null; // Or throw an error, depending on your error handling strategy
  }
}
function validateAndConvertEmail(email) {
  // Convert to lowercase
  const lowercaseEmail = email.toLowerCase();
  // Check if the username is valid (add your validation rules here)
  const isValid = /^(?!.*[example.com])(?!.*[A-Z])$/.test(lowercaseEmail);
  if (isValid) {
    return lowercaseEmail;
  } else {
    return null; // Or throw an error, depending on your error handling strategy
  }
}

let text = document.getElementById("contactinfo").firstChild.innerHTML;

// Check accepted cookies   WORKS
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
if (!getCookie("cookiesAccepted")) {
  // Display the cookie consent banner
  const banner = document.createElement("div");
  banner.innerHTML = `
    <div class="cookie-banner">
      <p>Welcome to KIA, this website uses cookies to improve your experience. By clicking "Accept", you consent to the use of cookies.</p>
      <button id="acceptCookies">Accept</button>
    </div>
  `;
  let cookies = document.getElementById("cookies");
  body.appendChild(cookies).appendChild(banner);
  // Handle the "Accept" button click
  document.getElementById("acceptCookies").addEventListener("click", () => {
    // Set a cookie to remember the user's consent
    document.cookie =
      "cookiesAccepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    banner.remove(); // Remove the banner
  });
}

//chose accessories// firstChild
const accessory1 = document.getElementById("accessory1");
accessory1.addEventListener("click", function () {
  let text = document.getElementById("mySelect").firstChild.text;
  document.getElementById("demo1").innerHTML = text;
});
const accessory2 = document.getElementById("accessory2");
accessory2.addEventListener("click", function () {
  let text = document.querySelector("#mySelect > :nth-child(2)").text;
  document.getElementById("demo2").innerHTML = text;
});
const accessory3 = document.getElementById("accessory3");
accessory3.addEventListener("click", function () {
  let text = document.querySelector("#mySelect > :nth-child(3)").text;
  document.getElementById("demo3").innerHTML = text;
});
const accessory4 = document.getElementById("accessory4");
accessory4.addEventListener("click", function () {
  let text = document.getElementById("mySelect").lastChild.text;
  document.getElementById("demo4").innerHTML = text;
});

//DOM manipilation
// Write content to the new window
const requote = document.getElementById("requote");
requote.addEventListener("click", function () {
  let myWindow = window.open(
    "",
    "MsgWindow",
    "toolbar=no, scrollbars=yes, resizable=yes, top=70, left=400, width=500,height=600"
  );
  myWindow.document.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>KIA</title>
      <style>
        body {
          background-color: white;
          font-family: Arial, sans-serif;
        }
        h1, h2{
          color: black;
          text-align: center;
        }    
.form-container {
  display: flex;
  justify-content: center;
  align-items: center; 
}
.form-container input[type="text"],
.form-container input[type="email"],
.form-container input[type="password"] {
  width: 350px;
  padding: 22px 22px 22px 10px;
  margin: 5px 0px;
  outline: 1px solid #888;
  border: 0px solid #0000;
}
.form-container input[type="text"]:focus,
.form-container input[type="email"]:focus,
.form-container input[type="password"]:focus {
  outline: 3px solid #d20000;
}
.form-container input[type="submit"] {
  font-weight: bold;
  padding: 10px;
  border: none;
  background: #797978;
  color: #ffffff;
}
.form-container input[type="submit"]:hover {
  background: #e7e7e7;
  color: #797978;
}
      </style>
    </head>
    <body>
    <h1>Request A Quote</h1>
      <h2>Your Contact Information</h2>
      <div class="form-container">         
        
          
            <form id="request">
              <input
                name="username"
                type="text"
                placeholder="Full name"
                required
                pattern="/^(?=.*[a-z]{2})(?!.*\W)(?!.* ).{4,}$/"
                title="username must contain at least two unique characters and cannot contain any special characters or whitespace"
              />
              <br /><br />
    
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                pattern="/^(?!.*[example.com])(?!.*[A-Z])$/"
                title="Email must not be from the domain example.com."
              />
              </span
              ><br /><br />
    
              <input
                name="password"
                type="text"
                placeholder="Phone"
                required
                pattern="/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[password]{A-Za-z})(?=.*\W)(?!.* ).{12,}$/"
                title="Passwords must be at least 12 characters long.
    Passwords must have at least one uppercase and one lowercase letter.
    must contain at least one number.
    must contain at least one special character.
    cannot contain the word password (uppercase, lowercase, or mixed).
    cannot contain the username."
              />
              <br /><br />
    
              <input
                name="passwordCheck"
                type="text"
                placeholder="Address"
                required
              />
              <br /><br />
    
              <div class="flex-row">
                
                <input type="submit" value="Submit Request" />
                <!-- onclick="createItem()" -->
                <div id="successMessage" style="display: none">
                  Form submitted successfully!
                </div>
              </div>
            </form>
          </div>
    </body>
  </html>
`);
});
// Close the document stream
myWindow.document.close();




// clone tried didnt works

if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "Trim";
  td[1].textContent = "EXL";

  tbody.appendChild(clone);

  // Clone the new row and insert it into the table
  const clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "Color";
  td[1].textContent = "Green";

  tbody.appendChild(clone2);
} else {

}

// // clone tried didnt works
// const ordersummary = document.getElementById("ordersummary");

// // A builder function to make the
// // created DOM structures consistent.
// function createPost(title, content) {
//   // Using an HTML template clone
//   const postTemplate = document.getElementById("postTemplate");
//   const clone = postTemplate.content.cloneNode(true);

//   // We can use selectors to find different nodes
//   // within the template clone itself.
//   const heading = clone.getElementById("clonet");
//   const body = clone.getElementById("clonep");

//   heading.textContent = title;
//   body.innerHTML = content;

//   return clone;
// }

// // Now, we can use the function to build consistent
// // post elements using custom data. We'll be pulling
// // from the JSON Placeholder API for convenience.
// (async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   posts.forEach((post) => {
//     ordersummary.appendChild(createPost(post.title, post.body));
//   });
// })();
