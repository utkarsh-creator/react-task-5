import React, { useState } from 'react';

export function AgeCalculator () {
    const [age, setAge] = useState(null);
    const [date, setDate] = useState('');

    const setBirthdate = (event) => {
        setDate(event.target.value);
    }

    const calculateAge = () => {
        var today = new Date();
        var bdate = new Date(date);
        var ageYears = today.getFullYear() - bdate.getFullYear();
        var monthDiff = today.getMonth() - bdate.getMonth();
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < bdate.getDate())) {
            ageYears--;
        }
        setAge(ageYears);
    }
    return(
        <div className='container pt-5'>
            <h1 className='text-center mb-3 fw-bold'>Age Calculator</h1>
            <h6 className='text-center mb-2 fw-bold'>Enter your date of birth</h6>
            <div className='d-flex align-items-center flex-column'>
                <input type='date' style={{width: "30%"}} onChange={setBirthdate}></input>
                <button className='btn btn-primary mt-2' style={{width:"20%"}} onClick={calculateAge}>Calculate Age</button>    
            </div> 
            <div className='mt-4'>
                {age !== null && <p className='text-center fw-bold h5'>You are {age} years old.</p>}
            </div>
        </div>
    )
}