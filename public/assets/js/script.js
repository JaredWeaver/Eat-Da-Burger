document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const devourBtn = document.querySelectorAll('.devour');
  
    // Set up the event listener for the create button
    if (devourBtn) {
      devourBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          console.log(e);
          console.log(id)

          const burgerDevoured = {
            devoured: true
          }
  
        //   fetch(`/api/burgers/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     },

        //     body: JSON.stringify(burgerDevoured),

        //   }).then((response) => {
        //     console.log(response);
        //     if (response.ok) {
        //       console.log(`changed  to: ${id}`);
        //       location.reload('/');
        //     } else {
        //       alert('something went wrong!');
        //     }
        //   });
        });
      });
    }
  
    
  });
  