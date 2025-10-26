function validateForm() {
        let name = document.forms["contact-form"]["Name"].value;
        let email = document.forms["contact-form"]["Email"].value;
        let message = document.forms["contact-form"]["Message"].value;

        document.getElementById("result").innerHTML = `Name: ${name}<br>
      Email: ${email}<br>
      Message: ${message}`;

        return false;
      }

      function toggleMenu() {
        const menuItems = document.getElementById("nav-menu");
        console.log(menuItems.style);
        if (menuItems.style.height === "") {
          menuItems.style.height = "200px";
        } else {
          menuItems.style.height = "";
        }
      }