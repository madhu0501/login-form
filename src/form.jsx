// import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useState } from "react";

const Form = () => {
     // const [name, setname] = useState()
     const [fullname, setfullname] = useState({
          fname: "",
          lname: "",
          mail: ""
     })
     const [error, seterror] = useState({});
     const [flag1, setflag1] = useState(false)

     const inputevent = (event) => {
          const value = event.target.value;
          const name = event.target.name;
          setfullname((pre) => {
               return {
                    ...pre,
                    [name]: value,

               }

               // if(name==="fname"){
               //      return{
               //           fname:value,
               //           lname:pre.lname
               //      }
               // }
               // else if(name==="lname"){
               //      return{
               //           fname:pre.fname,
               //           lname:value
               //      }
               // }   
          })
     }


     useEffect((flag1) => {
          // console.log(error)
          if (Object.keys(error).length === 0 && flag1) {
               // console.log(fullname)
               alert("successfully submitted")

          }
     }, [error])

     const onsubmit = (event) => {
          event.preventDefault()
          setflag1(!flag1)

          seterror(Validatefn(fullname))

          setfullname((pre) => {
               return {
                    fname: "",
                    lname: "",
                    mail: "",
                    password: ""

               }
          })
          // console.log(fullname)
     }

     const Validatefn = (values) => {
          const errors = {}
          // const regex = 0
          if ((!fullname.fname) || (!fullname.lname)) {
               errors.fname = "first name are required"
               errors.lname = "last name required"
          }
          if (!fullname.mail) {
               errors.mail = "mail requeried"
          }
          if (fullname.password.length < 5) {
               errors.password = "password should be 5 characters"
          }
          return errors
     }


     return (
          <>
               <div className="cont">
                    <div className="container">

                         <form onSubmit={onsubmit}>

                              {/* <h1>Hello {name} </h1> */}
                              <div className="forms">
                                   <table>
                                        <tbody>

                                             <tr>
                                                  <td>
                                                       <label>First Name :</label>
                                                  </td>
                                                  <td>
                                                       <input type="text" placeholder="enter name" value={fullname.fname}
                                                            name="fname"
                                                            onChange={inputevent}
                                                            style={{ margin: "10px", Display: "block" }}
                                                       />
                                                  </td>
                                                  {/* <br/> */}
                                             </tr>
                                             <tr>
                                                  <td></td>
                                                  <td>
                                                       <p>{error.fname}</p>
                                                  </td>
                                             </tr>
                                             <tr>

                                                  <td>
                                                       <label>Last Name :</label>
                                                  </td>
                                                  <td>

                                                       <input type="text" placeholder="enter name" value={fullname.lname}
                                                            name="lname"
                                                            onChange={inputevent}
                                                            style={{ margin: "10px" }}
                                                       />
                                                  </td>
                                             </tr>
                                             <tr><td></td>
                                                  <td>
                                                       <p>{error.lname}</p>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <label>Email :</label>
                                                  </td>
                                                  <td>
                                                       <input type="email" placeholder="enter you mail" value={fullname.mail}
                                                            name="mail"
                                                            onChange={inputevent}
                                                            style={{ margin: "10px" }}
                                                       />
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td></td>
                                                  <td>
                                                       <p>{error.mail}</p>
                                                  </td>
                                             </tr>

                                             <tr>
                                                  <td>

                                                       <label>Password :</label>
                                                  </td>
                                                  <td>
                                                       <input type="password" placeholder="Enter Password" value={fullname.password}
                                                            name="password"
                                                            onChange={inputevent}
                                                            style={{ margin: "10px" }}
                                                       />
                                                  </td>
                                             </tr>
                                             <tr>
                                             <td></td>
                                             <p>{error.password}</p>
                                             </tr>



                                        </tbody>
                                   </table>
                              </div>

                              <button type="submit">submit</button>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default Form