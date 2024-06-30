import React from 'react'

const form = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    
      return (
          <form onSubmit={onSubmit}>
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <textarea name="message"></textarea>
            <button type="submit">Submit Form</button>
          </form>
      );
}

export default form