import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function SignupComponent({ setSignup }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = []
  for(let i=1;i<=31;i++) day.push(i);
  var currentDate = new Date();

 var Currentyear = currentDate.getFullYear();
  let years =[];
  for(let i=1990;i<=Currentyear;i++) years.push(i)
// for()
  return (
    <div className="bg-white rounded-md max-w-[500px] p-4 shadow-xl">
      <div className="border-b-2 border-gray-300 p-3 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[1.5rem]">Signup</h1>
          <p>it's quick and easy</p>
        </div>
        <button onClick={() => setSignup(false)}>
          <IoMdClose className="text-xl" />
        </button>
      </div>
      <form action="" className="flex flex-col p-5 gap-3">
        <div className="flex gap-3 ">
          <input
            type="text"
            name=""
            
            className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-64 h-12 "
            placeholder="firstName"
          />
          <input
            type="text"
            name=""
            
            className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-64 h-12 "
            placeholder="sureName"
          />
        </div>
        <input
          type="text"
          name=""
          
          className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-full h-12 "
          placeholder="Email"
        />

        <input
          type="passwrod"
          name=""
          
          className="px-3 shadow-sm border border-[#00000015]  rounded-md focus:border-blue-600 outline-none w-full h-12 "
          placeholder="password"
        />
        <div className="  w-full flex flex-col p-2 gap-2 ">
          <h1 className="w-full flex items-center gap-1">
            Date of birth
            <CiCircleInfo className="mt-[.13rem]" />
          </h1>
          <div className="flex gap-4 items center justify-evenly ">
            <select
              name=""
              className="w-32 h-10 rounded-md border-2 border-gray-300 shadow-sm"
            >
             
             {day.map((val,index) => {
                return <option key={index}>{val}</option>;
              })}              
            </select>
            <select
              name=""
              
              className="w-32 h-10 rounded-md border-2 border-gray-300 shadow-sm"
            >
              {months.map((val,index) => {
                return <option key={index}>{val}</option>;
              })}
            </select>
            <select
              name=""
              
              className="w-32 h-10 rounded-md border-2 border-gray-300 shadow-sm"
            >
              {years.map((val,index)=><option key={index}>{val}</option>)}
              
            </select>
          </div>
        </div>

        <div className=" w-full flex flex-col p-2 gap-1 ">
          <h1 className="w-full flex items-center gap-1">
            Gender
            <CiCircleInfo className="mt-[.13rem]" />
          </h1>
          <div className="flex gap-4 items center justify-evenly ">
            <span className="w-32 h-10 rounded-md flex items-center border-2 border-gray-300 justify-between p-3 ">
              <h1>female</h1>
              <input type="radio" name="gender"  />
            </span>

            <span className="w-32 h-10 rounded-md flex items-center border-2 border-gray-300 justify-between p-3 ">
              <h1>male</h1>
              <input type="radio" name="gender"  value="other" />
            </span>

            <span className="w-32 h-10 rounded-md flex items-center border-2 border-gray-300 justify-between p-3 ">
              <h1>other</h1>
              <input type="radio" name="gender"  value="other" />
            </span>
          </div>
        </div>
      </form>
      <p className="text-[.8rem]">
        People who use our service may have uploaded your contact information to
        Buzzbox. Learn more. By clicking Sign Up, you agree to our Terms,
        Privacy Policy and Cookies Policy. You may receive SMS notifications
        from us and can opt out at any time.
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <button className="w-40 border-2 h-10 border-gray-300 font-bold text-white bg-green-600 rounded-md">
          SIGNUP
        </button>
        <h1 className="text-blue-600">Already have an account</h1>
      </div>
    </div>
  );
}

export default SignupComponent;
