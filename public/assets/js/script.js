document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const devourBtn = document.querySelectorAll(".devour");

  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");

        const burgerDevoured = {
          devoured: true,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(burgerDevoured),
        }).then((response) => {
          if (response.ok) {
            console.log(`changed  to: ${id}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  const createBurger = document.getElementById("create-form");

  if (createBurger) {
    createBurger.addEventListener("submit", (e) => {
      e.preventDefault();

      const newBurger = {
        burger_name: document.getElementById("newBurger").value.trim(),
      };

      console.log(newBurger);

      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newBurger),
      }).then((response) => {
        console.log(response);

        document.getElementById("newBurger").value = "";

        console.log("Created a new burger!");
        location.reload("/");
      });
    });
  }
});
