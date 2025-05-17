import React from 'react'

export function Contact() {
  return (
    <div className='min-h-screen'>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
           <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600'>Contact Me</h2>


          <div className="container flex flex-col gap-10  items-center  mt-10 border-2 border-purple-600 rounded-lg p-5 w-1/2 h-1/2">
            <div className="">
                <h3 className='text-3xl'>Connect with me</h3>

            </div>
            <form action="">
            <div className="flex flex-col gap-5 justify-center">
                
                    <div className="input border-2 rounded-lg p-2 w-full h-12">
                        <input type="email" name="your email" id="" placeholder='Enter your email' className='w-full h-full border-none  outline-none' />
                    </div>
                    <div className="input">
                        <input type="text" name="your name" id="" placeholder='Enter your name' />
                    </div>
                    <div className="input">
                        <textarea name="your message" id="" placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                    <button type="submit">Send</button>
                    </div>
               
            </div>
            </form>
          </div>
    </div>
    
    </div>
  )
}
