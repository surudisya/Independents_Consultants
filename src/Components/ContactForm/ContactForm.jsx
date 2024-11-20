// import React from 'react'
// import { ValidationError, useForm } from '@formspree/react';


// // import linkedin from '../../images/linkedin__logo.png'
// // import github  from '../../images/github__logo.png'
// // import logo from '../../images/favicon.png'



// const ContactForm = () => {
    
//     const [state, handleSubmit, reset] = useForm('https://formspree.io/f/mjkvbqwv');

//    if (state.succeeded) {
//        return <div className='feedback__message'>
//                 <h2 className="head-text feedback__text">
//                         😊 Thanks for your feedback! 🎉
//                 </h2>
//            </div>;
//   }


//   <div className='footer' id='contact'>
//   <div className='contact__container contact'>
//   <header>

//           <h1 className="skills__head-text">Contact</h1>
//               <p className='contact__paragraph'>Feel free to contact me by submitting the form below
//               and I will get back to you as soon as possible.
//               </p>
//   </header>
                        
//       {/* <div>

//       <form onSubmit={handleSubmit} className="">

//       <input
//           id="name"
//           type="name"                    
//           name="username"
//           className="input input-text"
//           placeholder="Name"
//           required />

//       <ValidationError 
//           prefix="Name" 
//           field="name"
//           errors={state.errors} />


//       <input
//           id="email"
//           type="email" 
//           name="email"
//           className="input input-text"
//           placeholder="Email"
//           required />

//       <ValidationError 
//           prefix="Email" 
//           field="email"
//           errors={state.errors}/>

//       <textarea
//           id="message"
//           name="message"
//           className="input-text textarea"
//           placeholder="Leave Your Comments Here..."
//           cols="5"
//           rows="10"
//           required />

//       <ValidationError 
//           prefix="Message" 
//           field="message"
//           errors={state.errors} />
          
//       <button className="btn input-submit" type="submit" disabled={state.submitting}>Send Mail</button>
//   </form>
// </div>  */}
 
//   </div>

// </div>

// }

// export default ContactForm

import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

import './ContactForm.css'

import instagram from '../../assets/insta.webp'
import linkedin  from '../../assets/linkdein.png'
import logo from '../../assets/Logo2.png'
import fb from  '../../assets/facebook.png'

function ContactForm() {



    const [state, handleSubmit] = useForm("https://formspree.io/f/mjkvbqwv");
   if (state.succeeded) {
       return <div className='feedback__message'>
                <h2 className="head-text feedback__text">
                        😊 Thanks for your feedback! 🎉
                </h2>
           </div>;
  }
    return (
      
        <div className='footer block block--dark' id='contact'>
            <div className='contact__container contact container'>
            <header>
                
                    <h3 className="skills__head-text">Contact</h3>
                    
                    
            
                        <p className='contact__paragraph'>Feel free to contact me by submitting the form below
                        and I will get back to you as soon as possible.
                        </p>
                  
            </header>

           
                                            
                <div className=''>
    
                <form onSubmit={handleSubmit} className="">
 
                <input
                    id="name"
                    type="name"                    
                    name="username"
                    className="input input-text"
                    placeholder="Name"
                    required />
    
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors} />


                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="input input-text"
                    placeholder="Email"
                    required />
      
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}/>
       
                <textarea
                    id="message"
                    name="message"
                    className="input-text textarea"
                    placeholder="Comments Here..."
                    cols="5"
                    rows="10"
                    required />
      
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors} />
                    
                <button className="btn btn--primary input-submit" type="submit" disabled={state.submitting}>Send Mail</button>
            </form>
        </div> 
        
            
            <div className='social__platform'>
             
                    <h2 className='social__platform__heading'>Find me on these online spaces!</h2>
                    
                  
                    <div className='social__icon'>
                        <a href="https://www.linkedin.com/in/visvanathan-dhanushan-048973253" target='_blank' ><img src={linkedin} alt="linkedin" className='icon icon--linkedin'/></a> 
                        <a href="https://github.com/DhanuV18" target='_blank' ><img src={instagram} alt="linkedin" className='icon icon--github'/></a>     
                        {/* <a href="https://github.com/DhanuV18" target='_blank' ><img src={fb} alt="linkedin" className='icon icon--github'/></a>        */}

                    </div>
               
            </div>  

                <div className="copyright">
                  
                        <img src={logo} alt="" className='footer__logo'/>
                  
                <p className="copyright__paragraph">Copyright 2024. Designed & coded by Independent Consultants</p>          
            </div>
            </div>

</div>



        
        
  )
}

export default ContactForm











      




   