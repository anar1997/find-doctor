import React from 'react'

const BlankRegister = () => {
  return (
    <div className='register'>
        <form>
            <div>
                <p className='register-title'>
                    <b>Register</b>
                </p> 
                <hr className='register-hr'/>
                <div>
                    <div>
                        <input type='text' name='first_name' className='custom-input' placeholder='First Name' autoFocus="true" required id='id_first_name'/>      
                    </div>
                </div>
                <div>
                    <div>
                        <input type='text' name='last_name' className='custom-input' placeholder='Last Name' autoFocus="true" required id='id_last_name'/>      
                    </div>
                </div>
                <div>
                    <div>
                        <input type='email' name='email' className='custom-input' placeholder='Email' autoFocus="true" required id='id_email'/>      
                    </div>
                </div>
                <div>
                    <div>
                        <input type='password' name='password' className='custom-input' placeholder='Password' autoFocus="true" required id='id_password'/>      
                    </div>
                </div>
                <div>
                    <div>
                        <input type='password' name='password2' className='custom-input' placeholder='Re-Type Password' autoFocus="true" required id='id_password2'/>      
                    </div>
                </div>
                <div className='radio-group'>
                    <input type='radio' name='gender' value='male' className='custom-input-radio' id='id_gender_0' required/>
                    <label htmlFor='id_gender_0'>Male</label>
                </div>
                <div className='radio-group'>
                    <input type='radio' name='gender' value='male' className='custom-input-radio' id='id_gender_1' required/>
                    <label htmlFor='id_gender_1'>Female</label>
                </div>
                <div className='radio-group'>
                    <input type='radio' name='gender' value='male' className='custom-input-radio' id='id_gender_2' required/>
                    <label htmlFor='id_gender_2'>Unspecified</label>
                </div>
                <div>
                    <input type="submit" value='Sign Up' className='sign'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default BlankRegister