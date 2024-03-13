import React, {useState} from "react";

const FullName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /^[a-zA-Z\s]*$/;
        if(!firstName.trim( ) || !lastName.trim()) {
            alert("Please fill the mandatory fields.");
        }else if(!regex.test(firstName) || !regex.test(lastName)){
            alert("Invalid entry! Please enter only letters and spaces.")
        } else{
            const fullName = ` ${firstName} ${lastName}`; 
            setFullName(fullName);
        }
    };

    return(
        <div>
            <h1>Full Name Display</h1>
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
                     onChange={(e)=>setLastName(e.target.value)}
                    />
               </label>
               <br />
               <button  type='submit'>Submit</button>
               {fullName && <h3>{fullName}</h3>}
            </form>
        </div>
    );
}
export default FullName;