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
          <form onSubmit={onSubmit} className='md:w-[50dvw] w-[75dvw] h-[80vhvh] md:h-[75vh] flex flex-col justify-center self-center gap-3 p-8 drop-shadow-2xl rounded-bl-sm rounded-br-3xl '>
            <input placeholder='Name' type="text" name="name" className='rounded-br-xl rounded-tl-md border-2 border-orange-300 bg-gray-50'></input>
            <input placeholder='YourEmail@email.com' type="email" name="email" className=' rounded-br-xl border-2 border-orange-300 bg-gray-50'/>
            <textarea placeholder='Request' name="message" className='md:min-h-[40vh] min-h-50vh rounded-br-xl border-2 border-orange-300 bg-gray-50'></textarea>
            <button type="submit" className='w-fit px-4 shadow-xl self-center rounded-br-xl border-2 border-orange-300 bg-gray-50'>Submit Form</button>
          </form>
      );
}

export default form