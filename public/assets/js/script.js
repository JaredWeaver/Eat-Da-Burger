document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const devourBtn = document.querySelectorAll(".devour");

  // Set up the event listener for the create button
  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        console.log(e);
        console.log(id);

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
          console.log(response);
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

  const createBurger = document.getElementById("newBurger");

  if (createBurger) {
    createBurger.addEventListener("submit", (e) => {
      e.preventDefault();

      const newBurger = {
        burger_name: document.getElementById("newBurger").value.trim(),
      };

      console.log(newBurger)

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
       response(location.reload());
      });
    });
  }
});
