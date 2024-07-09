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
          <form onSubmit={onSubmit} className='md:w-[50dvw] w-[75dvw] py-6 flex flex-col justify-center self-center gap-3 px-4 rounded-lg drop-shadow-lg
          dark:bg-zinc-800 bg-zinc-50 dark:bg-opacity-25 border-2 border-zinc-800'>
            <input placeholder='Name' type="text" name="name" className='rounded-br-xl rounded-tl-md border-2 border-zinc-800 drop-shadow-lg dark:border-none dark:bg-zinc-700 dark:text-zinc-200 shadow-sm shadow-zinc-400'></input>
            <input placeholder='Email' type="email" name="email" className=' rounded-br-xl dark:bg-zinc-700 border-2 border-zinc-800 drop-shadow-lg dark:border-none dark:text-zinc-200 shadow-sm shadow-zinc-400'/>
            <textarea placeholder='Message/Request' name="message" className='md:min-h-[40vh] min-h-[50vh] border-2 border-zinc-800 drop-shadow-lg dark:border-none rounded-br-xl dark:bg-zinc-700 dark:text-zinc-200 shadow-sm shadow-zinc-400'></textarea>
            <button type="submit" className='w-fit hover:dark:bg-zinc-600 hover:scale-105 px-4 bg-zinc-200 self-center rounded-br-xl dark:bg-zinc-700 border-2 border-zinc-800 drop-shadow-lg dark:border-none dark:text-zinc-50 shadow-sm shadow-zinc-400'>Submit Form</button>
          </form>
      );
}

export default form