import { useRouter } from "next/router";

 
 const ProfilePage= ()=>{
  const router = useRouter();
  const handlerDashboard = () => {
    router.push("/");
  };
  return(
  
    <div className="bg-gray-200 w-full h-screen">
      <div className="ml-20 mr-20">
      <div className="pt-5 pb-5">
        <p>OVERVIEW</p>
        <h1 className=" text-3xl text-[#0166FF]">User Profile</h1>
      </div>
      <div className="flex w-[3000px]">
      <div className="flex justify-center pl-[30px] pr-[20px] w-96 items-center rounded-2xl bg-[#F6F6F7]">
        <div className="flex flex-col items-start gap-2">
        <div className="avatar ml-16">
  <div className="w-24 items-center ml-12 rounded-full">
    <img src="dark.png" />
  </div>
</div>
        <div className="pt-2 items-center flex-col justify-center text-3xl pb-1">
        <p className="flex justify-center ml-16">B.Sierra Brooks</p>
        <h1 className="text-lg flex justify-center ml-16 text-[#0166FF]">Full stack developer</h1>
      </div>
          <div className="flex-col items-center justify-center ml-20 ">
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>

          </div>
      <div className=""><p className=" text-2xl my-3 text-[#0166FF]">Desciption</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Odio eaque, quidem, obcaecati quod dolorum sint alias,
       possimus illum assumenda eligendi cumque?
      </div>
      <button
              className="gap-5 mt-5 ml-20 rounded-md bg-[#0166FF] text-[#ffffff] py-3 px-4"
              onClick={handlerDashboard}
            >
              Back To Home
            </button>
        </div>
      </div>
      <div className="flex ml-20 w-[700px] pt-[29px] pb-[26px] pl-[30px] pr-[35px] items-center rounded-2xl bg-[#F6F6F7]">
        <div className="flex flex-col items-start gap-4">
          <div className=" border-b-2 w-full">
          <h1 className=" text-lg my-2 text-[#0166FF]">Account Details</h1>
          </div>
          <div className="w-[589px] h-[39px] flex gap-5 flex-shrink-0">
            <div className="mt-2">
            <p className="pl-2">First Name</p>
            <input
              placeholder="Your Name"
              className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            <div className="mt-2">
            <p className="pl-2">Last Name</p>
            <input
              placeholder="Your Last Name"
              className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
          </div>
          <div className="flex my-2">
          <div className="mr-5 mt-4">
            <p className="pl-2">Email</p>
            <input
              placeholder="Your Email"
              className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            <div className="mt-4">
            <p className="pl-2">Password</p>
            <input
              placeholder="Your Password"
              className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            </div>
            <div className="mr-1">
            <p className="pl-2 py-1">Address</p>
            <input
              placeholder="Your Address"
              className=" py-1 pl-4 pr-5 gap-3 w-[621px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            <div className="flex">
            <div className="mr-5 mt-4">
            <p className="pl-2">City</p>
            <input
              placeholder="City"
              className=" py-4 pl-4 pr-5 gap-3 w-[200px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            <div className="mr-5 mt-4">
            <p className="pl-2">State</p>
            <input
              placeholder="Choose State"
              className=" py-4 pl-4 pr-5 gap-3 w-[190px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            <div className="mr-5 mt-4">
            <p className="pl-2">Zip</p>
            <input
              placeholder="Zip"
              className=" py-4 pl-4 pr-5 gap-3 w-[190px] h-[38px] flex items-center border rounded-md"
            ></input>
            </div>
            </div>
          <div className=" h-[140px] gap-5">
            <textarea
              placeholder="Write a message"
              className="py-4 pl-4 pr-5 gap-3 w-[621px] h-[134px] flex items-start border rounded-md"
            ></textarea>
          </div>
          <div className=" py-3 px-4">
            <button className=" inline-flex flex-col justify-center items-center rounded-md bg-[#0166FF] text-[#ffffff] py-3 px-4">
              Update Account
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>
  )
} 

export default ProfilePage