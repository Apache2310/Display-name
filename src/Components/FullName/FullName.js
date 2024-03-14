// import React, {useState} from "react";

// const FullName = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [fullName, setFullName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(firstName && lastName){
//             const fullName = `${firstName} ${lastName}`;
//             setFullName(fullName);
//         }else{
//             alert("Please fill the mandatory fields");
//         }
//     };

//     return(
//         <div>
//             <h1>Full Name Display</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     First Name:
//                     <input
//                     type="text" 
//                     value={firstName}  
//                     onChange={(e) => setFirstName(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                    Last Name:
//                    <input
//                      type="text"
//                      value={lastName}
//                      onChange={(e)=>setLastName(e.target.value)}
//                     />
//                </label>
//                <br />
//                <button  type='submit'>Submit</button>
//                 {fullName && <p>Full Name: {fullName}</p>}
//             </form>
//         </div>
//     );
// }
// export default FullName;

import React, { useState } from 'react';

const NameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() !== '' && lastName.trim() !== '') {
            setFullName(`${firstName} ${lastName}`);
            setSubmitted(true);
        }
    };

    return (
        <div>
            <h2>Full Name Display</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {submitted && <p>Full Name: {fullName}</p>}
        </div>
    );
};

export default NameForm;
