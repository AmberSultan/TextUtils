import React from 'react'

export default function About(props) {
  return (
  <>
    <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    
      <h1>About Us</h1>
      <div className="container">
      <p>Welcome to TextUtils, a powerful text processing tool designed to streamline your workflow and enhance your text-related tasks. 
      Whether you're a writer, editor, student, or professional,TextUtils is crafted to meet your needs with its robust features and user-friendly interface.</p></div>
    <h3>Benefits</h3>
    <div className="container">
    <p>Save time and effort with TextUtils intelligent algorithms . Tailored for students, our text utility empowers you to work effectively and efficiently.</p></div>
    <h3>Support and Updates</h3>
    <div className="container">
    <p>
We are committed to providing regular updates and improvements. Reach out to our support team  for any assistance or inquiries.
</p></div>
<h3 className=" my-2 mx-7">
Thank you for choosing TextUtils to enhance your text processing experience."</h3>
</div>
    </>
  )
}
