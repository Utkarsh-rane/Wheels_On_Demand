// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect, useContext } from 'react'
// import './Adminhome.css'
// import Details from './Details'
// import NavBar2 from '../NavBar/Navbar2/NavBar2'
// import UserContext from '../../Session/Session'; 



// const UserKyc = () => {

//     // const [allDetails, setDetails] = useState([])
//     // const {value,setValue}=useContext(UserContext)
//     // useEffect(() => {
//     //     getDetails()
//     // } , [])

//     // const getDetails = () => {
//     //     const url = 'http://localhost:8080'
//     //     axios.get(url + '/getusers').then((response) => {

//     //         const result = response.data
//     //         if (result.status === 'success') {
//     //             setDetails(result.data)   
//     //         }
//     //         else {
//     //             alert('error occured while getting details')
//     //         }
//     //     })

//     // }

//     return (
//         <div>  
//             {/* <NavBar2 />
//             <div className="bg-colo" style={{backgroundImage:'D:\project\AprojectMaterial\image front End\backimage.jpeg'}}>
                    
//                     <div style={{display:'flex'}}> */}
//                         {/* <HeaderAdmin /> */}
//                         {/* <div className="user-table">
//                             <h2><center>All Customer Details</center></h2>
//                             <div>
//                                 <Details items={allDetails}  ></Details>
//                             </div>
//                         </div>
//                     </div>
//             </div> */}
//         </div>
//     )
// }

// export default UserKyc

import React from 'react';
import './Adminhome.css';
import NavBar2 from '../NavBar/Navbar2/NavBar2';

const UserKyc = () => {
    return (
        <div>
            <NavBar2 />
            <div className="user-table">
                <h2>
                    <center>All KYC Details</center>
                </h2>
                <div className="table-container">
                    <table className="table table-striped table-responsive table-user">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>ID Card</th>
                                <th>RC Book</th>
                                <th>Car Insurance</th>
                                <th>Driving License</th>
                                <th>Car Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ID Card Placeholder</td>
                                <td>RC Book Placeholder</td>
                                <td>Car Insurance Placeholder</td>
                                <td>Driving License Placeholder</td>
                                <td>ABC123</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>ID Card Placeholder</td>
                                <td>RC Book Placeholder</td>
                                <td>Car Insurance Placeholder</td>
                                <td>Driving License Placeholder</td>
                                <td>XYZ789</td>
                            </tr>
                            {/* Add more placeholder rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserKyc;

