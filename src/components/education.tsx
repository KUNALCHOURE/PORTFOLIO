import { div } from 'framer-motion/client';
import React from 'react'

export default function Education() {

    const education=[
        {
            Collegename:"Ramdeobaba University",
            Branch:"Data science",
}
    ];
  return (
    <div className='min-h-screen '>
        <div className="flex flex-col justify-center items-center gap-8">
            <span className='sm:text-3xl  md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600'> Education </span>

           <div className="flex justify-center ">
              { education.map((e,idx)=>(
                 <div key={idx}>
                    <h1>{e.Collegename}</h1>
                      
                 </div>
              )
            )

              
                }
           </div>
        </div>
       
    </div>
  )
}
