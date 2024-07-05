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
          <form onSubmit={onSubmit} className='md:w-[50dvw] w-[75dvw] h-[70vh] md:h-[60vh] flex flex-col justify-center self-center gap-3 px-4 rounded-lg
          bg-zinc-700 bg-opacity-10'>
            <input placeholder='Name' type="text" name="name" className='rounded-br-xl rounded-tl-md bg-zinc-700 text-zinc-200 shadow-sm shadow-zinc-400'></input>
            <input placeholder='Email' type="email" name="email" className=' rounded-br-xl bg-zinc-700 text-zinc-200 shadow-sm shadow-zinc-400'/>
            <textarea placeholder='Message/Request' name="message" className='md:min-h-[40vh] min-h-[50vh] rounded-br-xl bg-zinc-700 text-zinc-200 shadow-sm shadow-zinc-400'></textarea>
            <button type="submit" className='w-fit px-4 self-center rounded-br-xl bg-zinc-700 text-zinc-50 shadow-sm shadow-zinc-400'>Submit Form</button>
          </form>
      );
}

export default form