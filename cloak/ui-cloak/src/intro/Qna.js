import React, { useState } from 'react';
import {IoAddSharp} from 'react-icons/io5';



const Qna = () => {
  const [showAnswers, setShowAnswers] = useState([]);

  const toggleAnswer = (index) => {
    const updatedShowAnswers = [...showAnswers];
    updatedShowAnswers[index] = !updatedShowAnswers[index];
    setShowAnswers(updatedShowAnswers);
  };

  return (
    <div className='p-5 py-10 flex flex-col items-center justify-center bg-[#FF5757]'>
      <h1 className='montserrat-subheading text-2xl mb-6 text-white border-b pb-2 border-gray-200'>FAQ</h1>
      <div className='xl:p-14 xl:px-s20 bg-[#FFF7F7] lg:w-[900px] p-5 rounded-md shadow-lg flex flex-col
       items-start justify-center'>
        <h4 onClick={() => toggleAnswer(0)}
        className='text-left justify-between w-full hover:text-gray-400
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-500 gap-16'
        >1: How does cloak ensure the
         privacy and confidentiality of financial transactions?
         <span>
          <IoAddSharp color='#FF5757' className='lg:text-4xl text-3xl'/>
          </span></h4>
        {showAnswers[0] && <p 
        className='w-[90%] px-4  pb-5  montserrat-subheading  text-gray-400 text-left'
        >cloak employs secure secret addresses and a
          one-time public key mechanism, making it virtually impossible to
          trace or monitor transactions by anyone else. This ensures enhanced
          privacy and confidentiality.</p>}

        <h4 onClick={() => toggleAnswer(1)}
          className='text-left justify-between w-full hover:text-gray-400 lg:text-lg cursor-pointer flex items-center
          montserrat-subheading py-4 text-gray-500 gap-16'
        >2: What is a "stealth address" in
         cloak, and how does it enhance privacy?
         <span>
          <IoAddSharp color='#FF5757' className='lg:text-4xl text-3xl'/>
          </span></h4>
        {showAnswers[1] && <p
        className='w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left'
        >A "stealth address" is a unique and anonymous
          address exclusively linked to the intended recipient.
          It guarantees utmost privacy by making it difficult for
          anyone else to trace the recipient or monitor
          their transactions.</p>}

        <h4 onClick={() => toggleAnswer(2)}
          className='text-left justify-between w-full hover:text-gray-400 lg:text-lg cursor-pointer flex items-center
          montserrat-subheading py-4 text-gray-500 gap-16'
          >3: How do I generate a unique cloak 
        address?
        <span>
          <IoAddSharp color='#FF5757' className='lg:text-4xl text-3xl'/>
          </span>        
        </h4>
        {showAnswers[2] && <p
        className='w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left'
        >Simply click the "generate" button on our app,
          and a unique cloak address will be generated for you. Make
          sure to save the accompanying DRM key in a secure location for
          future use.</p>}

        <h4 onClick={() => toggleAnswer(3)}
          className='text-left justify-between w-full hover:text-gray-400 lg:text-lg cursor-pointer flex items-center
          montserrat-subheading py-4 text-gray-500 gap-16'        
        >4: Can I retrieve my private key after funds have been sent to my cloak's address?
         <span>
          <IoAddSharp color='#FF5757' className='lg:text-4xl text-3xl'/>
          </span>        
        </h4>
        {showAnswers[3] && <p
        className='w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left'
        >Yes, you can retrieve your private key by clicking 
          on the "match" button or by pasting your
          DontRevealMe key (optional) into our app. This will allow you
          to access the specific address where the
          funds have been sent.</p>}

        <h4 onClick={() => toggleAnswer(4)}
          className='text-left justify-between w-full hover:text-gray-400 lg:text-lg cursor-pointer flex items-center
          montserrat-subheading py-4 text-gray-500 gap-16'        
        >5: Is cloak suitable for users 
        with varying levels of technical expertise?
        <span>
          <IoAddSharp color='#FF5757' className='lg:text-4xl text-3xl'/>
          </span>        
        </h4>
        {showAnswers[4] && <p
        className='w-[90%] px-4  pb-5  montserrat-subheading text-gray-400 text-left'
        >Absolutely! cloak has been designed with
          a user-friendly interface, making it accessible and
          easy to use for individuals with different levels of
          technical knowledge. Our app provides a seamless and
          intuitive experience for all users.</p>}
      </div>
    </div>
  );
};

export default Qna;