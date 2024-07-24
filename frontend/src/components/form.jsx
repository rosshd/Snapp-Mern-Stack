import React from "react";
import axios from "axios";

export default function Form() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c58db3f-3b81-4a9d-ae61-0e44d9c3f357");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully, Please wait 0-3 days for a response in your inbox.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
      return (
        <div className="md:w-[50dvw] w-[75dvw] flex flex-col justify-center self-center rounded-lg">
          <form onSubmit={onSubmit} className='md:w-[50dvw] w-[75dvw] py-6 flex flex-col justify-center self-center gap-3 px-4 rounded-lg drop-shadow-lg
          dark:to-zinc-800 dark:from-zinc-950 to-zinc-200 from-zinc-400 bg-gradient-to-br dark:bg-opacity-25 border-2 border-zinc-800'>
            <input placeholder='Name' type="text" name="name" className='rounded-br-xl rounded-tl-md border-2 border-zinc-800 drop-shadow-lg dark:border-none dark:bg-zinc-700 dark:text-zinc-200 shadow-sm shadow-zinc-400'></input>
            <input placeholder='Email' type="email" name="email" className=' rounded-br-xl dark:bg-zinc-700 border-2 border-zinc-800 drop-shadow-lg dark:border-none dark:text-zinc-200 shadow-sm shadow-zinc-400'/>
            <textarea placeholder='Message/Request' name="message" className='md:min-h-[40vh] min-h-[50vh] border-2 border-zinc-800 drop-shadow-lg dark:border-none rounded-br-xl dark:bg-zinc-700 dark:text-zinc-200 shadow-sm shadow-zinc-400'></textarea>
            <button type="submit" className='w-fit hover:dark:bg-zinc-600 hover:scale-105 px-4 bg-zinc-200 self-center rounded-br-xl dark:bg-zinc-700 border-2 border-zinc-800 drop-shadow-lg dark:border-none dark:text-zinc-50 shadow-sm shadow-zinc-400'>Submit Form</button>
          </form>
          <span>{result}</span>
        </div>
          
      );
}