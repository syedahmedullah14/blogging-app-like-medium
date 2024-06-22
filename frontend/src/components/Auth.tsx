import { SignupInput } from "@syedahmedullahjaser/zod-inference-medium-blog"
import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Link } from "react-router-dom"
export const Auth = ({type}: {type: "signup" | "signin"}) => {

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  })

  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div>
          <div className="text-4xl font-extrabold">
                Create an account
            </div>
            <div className="text-slate-500 mt-3 mb-3">
                {type === "signin" ? "Dont have an account:?" : "Already have an account?"}
                <Link className="pl-2 underline" to={"/signin"}>
                  {type === "signin" ? "Sign Up" : "Sign In"}
                </Link>
            </div>

            <LabelledInput label="Name" placeholder="Syed Jaser" onChange={(e) =>{
              setPostInputs({
                ...postInputs,
                name: e.target.value
              })
            }}/>

            <LabelledInput label="Username" placeholder="syedjaser" onChange={(e) =>{
              setPostInputs({
                ...postInputs,
                name: e.target.value
              })
            }}/>

            <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) =>{
              setPostInputs({
                ...postInputs,
                name: e.target.value
              })
            }}/>

          <button type="button" className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>

          </div>
        </div>
    </div>
    
  )
}

interface LabelledInputType{
  label: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
  return <div>

      <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">{label}</label>
      <input onChange={onChange} type={type || "text"} id="first_name" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        
        </div>
}

export default Auth