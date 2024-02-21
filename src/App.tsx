import React, { useState } from 'react'
import aboutUsBg from "../../assets/home/aboutUsBg.png"
// import { avatar1 } from "../src/assets/avatar1.jpg";
import avatar from "../src/assets/avatar1.jpg"
import eye from '../src/assets/eye.png'
import crossedEye from '../src/assets/crossed-eye.png'


interface AboutUsInfoProps {
    item: {
      id: number;
      title: string;
      body: string;
      img: string;
    };
};


const App = () => { 
  const [isStories, setIsStories] = useState(true);
  const [visible, setVisible] = useState(false)

    const handleStoryClick = () => setIsStories((prev) => !prev)

    const handlePassVisibility = () => {
      setVisible(!visible)
    }


  return (
    <div className="bg-[#ff0d3c99] p-">
        <div
          className="flex-co h-[50vh] flex items-end justify-center w-full bg-cover bg-center relative"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 13, 60, 0.6)), url(${avatar}) center center/cover no-repeat`,
            backgroundPosition: 'center',
          }}
        >
          {/* Your content here */}
                    <div className="text-white text-center absolute bottom-10 md:left-20 left-5">
                <h2 className=" md:text-[3rem] text-[1.5rem] font-bold  tracking-wides font-inter">You're welcome</h2>
                <p className='font-inter px-[1.25rem] text-sm md:text-normal'>Let's get you set for login</p>
            </div>
        </div>

        <div className="bg-white rounded-t-xl h-[50vh] w-full text-black p-6">
          {/* <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex justify-center items-center  gap-20 font-sans">
                <p className={`${isStories && "font-bold"} cursor-pointer`} onClick={handleStoryClick}>Stories</p>
                <p className={`${!isStories && "font-bold"} cursor-pointer`} onClick={handleStoryClick}>Services</p>
            </div>

            <div className="bg-white flex rounded transition-all duration-500 w-[6rem]">
                <div className={`${isStories ? "bg-[#9C2D7A]" : "bg-transparent" }  w-1/2 h-[5px] rounded`}></div>
                <div className={`${isStories ? "bg-transparent" : "bg-[#9C2D7A]" } w-1/2 h-[5px] rounded` } ></div>
            </div>
          </div> */}


          <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className={`${isStories && "font-bold text-[#9C2D7A]"} text-[#9C2D7A] cursor-pointer`} onClick={handleStoryClick}>Client</p>
            <div className={`${isStories ? "bg-[#9C2D7A]" : "bg-transparent" }  w-full h-[5px] rounded`}></div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <p className={`${!isStories && "font-bold text-[#9C2D7A]"} text-[#9C2D7A] cursor-pointer`} onClick={handleStoryClick}>Professional</p>
            <div className={`${isStories ? "bg-transparent" : "bg-[#9C2D7A]" } w-full h-[5px] rounded` } ></div>
          </div>
          </div>


          {
            isStories ? (
              <>  
                <form action="" className="mt-10" >
                <div className="mb-4">
                    <label htmlFor="" className="block">Email</label>
                    <input
                        className='w-full py-3 px-3 outline-none    rounded-lg placeholder:text-[#3E3737]'
                        type="text"
                        id="name"
                        autoFocus
                        placeholder="Enter client email"
                       
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="" className="block">Password</label>
                    {/* <input
                        className='w-full md:w-[70%] py-3 px-3 border border-[#A29D9D]  rounded-lg placeholder:text-[#3E3737]'
                        type="email"
                        id="email"
                        placeholder="Enter password"
                        
                    /> */}

                {/* </div> */}
                <div className="bg-white py- flex items-center justify-between rounded-lg w-full ">
                <input
                        className=' py-3 outline-none px-3  rounded-lg placeholder:text-[#3E3737]'
                        type={visible ? "text" : "password"}
                        id="password"
                        placeholder="Enter client password"
                        
                    />
                  
                  <img onClick={handlePassVisibility} className='absolut top-[60%] right-[28vw] z-[100] mr-3  translate-y-[%] ' src={visible ? crossedEye : eye} alt='lock' />
      
                </div>
                </div>

                <div className="flex justify-end">Forgot Password</div>

                <button className="py-3 px-4 bg-[#9C2D7A] text-white font-bold w-full rounded-lg mt-6">Login</button>
            </form>
              </>
            )
            :
            (
              <>
                <form action="" className="mt-10" >
                <div className="mb-4">
                    <label htmlFor="" className="block">Email</label>
                    <input
                        className='w-full py-3 px-3 outline-none   rounded-lg placeholder:text-[#3E3737]'
                        type="text"
                        id="name"
                        autoFocus
                        placeholder="Enter email"
                       
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="" className="block">Password</label>
                    {/* <input
                        className='w-full md:w-[70%] py-3 px-3 border border-[#A29D9D]  rounded-lg placeholder:text-[#3E3737]'
                        type="email"
                        id="email"
                        placeholder="Enter password"
                        
                    /> */}

                {/* </div> */}
                <div className="bg-white py- flex items-center justify-between rounded-lg w-full ">
                <input
                        className=' py-3 outline-none px-3 borde border-[#A29D9D]  rounded-lg placeholder:text-[#3E3737]'
                        type={visible ? "text" : "password"}
                        id="password"
                        placeholder="Enter password"
                        
                    />
                  
                  <img onClick={handlePassVisibility} className='absolut top-[60%] right-[28vw] z-[100] mr-3  translate-y-[%] ' src={visible ? crossedEye : eye} alt='lock' />
      
                </div>
                </div>

                <div className="flex justify-end">Forgot Password</div>

                <button className="py-3 px-4 bg-[#9C2D7A] text-white font-bold w-full rounded-lg mt-6">Login</button>
            </form>
              </>
            )
          }

            <div className="flex items-center justify-center mb-32">
              New User? <p className="text-[#9C2D7A] cursor-pointer ml-3">Sign Up</p>
            </div>

        </div>

       


      </div>
  )
}

export default App


// const AboutUsInfo: React.FC<AboutUsInfoProps> = ({item}) => {
//     const { id, title, body, img  } = item;
    
//     return (
//         <div className={`flex items-center justify-center w-full flex-col gap-10 mb-10 ${id % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//             <div className="w-full md:w-1/2">
//                 <h3 className='text-center text-lg font-bold mb-4'>{title}</h3>
//                 <p className='text-justify text-[.9rem]'>{body}</p>
//             </div>

//             <div className="w-full md:w-1/2">
//                 <img src={img} alt="" className='w-full md:h-[20rem] bg-cover bg-center object-cove ' />
//             </div>
//         </div>
//     );
// };
