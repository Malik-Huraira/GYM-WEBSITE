import React from 'react'
import "./Setting.css"
function Setting() {
  return (
    <div className='setting-container-admin'>
      <section className='section-1-setting-admin'>
        <h3>Change Password</h3>
        <div className='input-container-admin-setting'>
          <label className='label-setting-admin'>Old Password</label>
          <input className='input-setting-admin' type={"password"} placeholder="Enter old Password" />
        </div>
        <div className='input-container-admin-setting'>
          <label className='label-setting-admin'>Enter new Password</label>
          <input className='input-setting-admin' type={"password"} placeholder="Enter new Password" />
        </div>
        <div className='input-container-admin-setting'>
          <label className='label-setting-admin'>Confirm new Password</label>
          <input className='input-setting-admin' type={"password"} placeholder="Confirm new Password" />
        </div>
      <button className='btn-pass-change-admin'>Change Password</button>
      </section>
      <section className='section-1-setting-admin'>
        <h3>Change Email</h3>
        <div className='input-container-admin-setting'>
          <label className='label-setting-admin'>Old Email</label>
          <input className='input-setting-admin' type={"email"} placeholder="Enter old Email" />
        </div>
        <div className='input-container-admin-setting'>
          <label className='label-setting-admin'>Enter new Email</label>
          <input className='input-setting-admin' type={"email"} placeholder="Enter new Email" />
        </div>
        <div className='input-container-admin-setting'>
          <label className='label-setting-admin'>Confirm new Email</label>
          <input className='input-setting-admin' type={"email"} placeholder="Confirm new Email" />
        </div>
      <button className='btn-pass-change-admin'>Change Email</button>
      </section>

    </div>
  )
}

export default Setting