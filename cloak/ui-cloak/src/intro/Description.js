import React from "react";
// import { MdOutlinePrivacyTip, MdSecurity, MdAlarmOn, MdThumbUpOffAlt } from "react-icons/md";
import descriptionimage from "../assets/cloakdescription.png";
import { MdOutlineSecurity, MdPrivacyTip } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";

const Description = () => {
  return (
<<<<<<< HEAD
    <div className="dark:bg-[#1d1d1d] dark:text-gray-100 p-10 px-8 montserrat-medium">
      <div className="flex items-start flex-col px-4">
        {/* Heading */}
        <h2 className="montserrat-heading font-semibold self-left text-3xl text-gray-600 dark:text-[#FF5757]">
          How it works ?
        </h2>

        {/* image */}
        <div className="flex flex-col xl:items-center xl:flex-row-reverse xl:justify-between">
          <div className="md:mx-auto p-4 py-10">
=======
    <div className=" montserrat-medium px-8 pb-10">
      <div className="flex flex-col items-start px-4">
        {/* Heading */}
        {/* <h2 className="montserrat-heading self-left text-3xl font-semibold  text-gray-600">
          How it works ?
        </h2> */}

        {/* image */}
        <div className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between">
          <div className="p-4 py-10 md:mx-auto">
>>>>>>> master
            <img
              className="w-[789px] rounded-[1rem] outline-none"
              src={descriptionimage}
              alt=""
            />
          </div>

          {/* paragraph */}
<<<<<<< HEAD
          <div class="xl:w-[40%] flex flex-col p-8 break-words montserrat-subheading">
            <ul class="list-disc list-inside space-y-6">
              <li className="mb-2 text-left text-gray-600 dark:text-gray-300 ">
                <span className="font-semibold text-gray-600 dark:text-gray-300 break-words">
                  Step 1 :{" "}
                </span>
                Generate a unique "cloak address" by clicking the generate
                button. The "DontRevealMe(DRM)" key generated will serve as your
                secret key, so be sure to save it in a secure location.
              </li>
              <li class="mb-2 text-left text-gray-600 dark:text-gray-300">
                <span class="font-semibold text-gray-600 dark:text-gray-300">
                  Step 2 :{" "}
                </span>{" "}
                Send the cloak address to the intended sender.
              </li>
              <li class="mb-2 text-left text-gray-600 dark:text-gray-300">
                <span class="font-semibold text-gray-600 dark:text-gray-300">
                  Step 3 :{" "}
                </span>{" "}
                The sender will create an address from your cloak address and
                send funds to it using the "send" button.
              </li>
              <li class="mb-2 text-left text-gray-600 dark:text-gray-300">
                <span class="font-semibold text-gray-600 dark:text-gray-300">
                  Step 4 :{" "}
                </span>{" "}
                After the funds have been sent, click on "match" or paste your
                DontRevealMe(DRM) key (optional) to retrieve your private key
                and access the specific address on which the funds have been
                sent.
              </li>
              <li class="mb-2 text-left text-gray-600 dark:text-gray-300">
                <span class="font-semibold text-gray-600 dark:text-gray-300">
                  Summary :{" "}
                </span>{" "}
                By following these steps, you can easily and securely transfer
=======
          <div class="montserrat-subheading flex flex-col break-words p-8 xl:w-[40%]">
            <ul class="list-inside list-disc space-y-6">
              <li className="mb-2 text-left text-gray-600">
                <span className="break-words font-semibold text-gray-600">
                  Step 1 :{" "}
                </span>
                Generate a unique "cloak address" by clicking the generate
                button. The "DRM" key generated will serve as your secret key,
                so be sure to save it in a secure location.
              </li>
              <li class="mb-2 text-left text-gray-600">
                <span class="font-semibold text-gray-600">Step 2 : </span> Send
                the cloak address to the intended sender.
              </li>
              <li class="mb-2 text-left text-gray-600">
                <span class="font-semibold text-gray-600">Step 3 : </span> The
                sender will create an address from your cloak address and send
                funds to it using the "send" button.
              </li>
              <li class="mb-2 text-left text-gray-600">
                <span class="font-semibold text-gray-600">Step 4 : </span> After
                the funds have been sent, click on "match" or paste your (DRM)
                key (optional) to retrieve your private key and access the
                specific address on which the funds have been sent.
              </li>
              <li class="mb-2 text-left text-gray-600">
                <span class="font-semibold text-gray-600">Summary : </span> By
                following these steps, you can easily and securely transfer
>>>>>>> master
                funds using our app. Should you have any queries or concerns,
                please do not hesitate to contact us by our discord for
                assistance..
              </li>
            </ul>
          </div>

          {/* properties */}
        </div>
      </div>

      {/* Features */}

      <div class="rounded-lg p-8">
        <div class="mx-auto">
<<<<<<< HEAD
          <h2 class="montserrat-heading text-gray-600 dark:text-[#FF5757] text-3xl font-semibold mb-2 mt-4 ">
            Features
          </h2>
          <div className="border-b w-[50%] pb-2 border-[#ff8080] dark:border-gray-200 mx-auto mb-4 "></div>
          <div class="sm:p-6 cursor-default mx-auto max-w-[1100px] px-15 p-6 grid grid-cols-2 gap-8">
            <div class="col-span-2 md:col-span-1 ">
              <div class="bg-[#fddede]  shadow-md hover:shadow-lg rounded-lg p-10 space-y-4 h-full ">
                <div className="flex space-x-2 items-center justify-center ">
                  <MdPrivacyTip color="#ff8080" className="text-xl mb-2 " />
                  <h3 class="montserrat-subheading text-xl text-gray-600 dark:text-gray-800 font-semibold mb-2">
                    Privacy
                  </h3>
                </div>
                <p class=" text-gray-400 dark:text-gray-600 font-semibold montserrat-heading">
=======
          <h2 class="montserrat-heading mb-2 mt-4 text-3xl font-semibold text-gray-600 ">
            Features
          </h2>
          <div className="mx-auto mb-4 border-b border-[#ff8080] pb-2 sm:w-[550px] "></div>
          <div class="px-15 mx-auto grid max-w-[1100px] cursor-default grid-cols-2 gap-8 p-6 sm:p-6">
            <div class="col-span-2 md:col-span-1 ">
              <div class="h-full  space-y-4 rounded-lg bg-[#fdf4f4] p-10 shadow-md hover:shadow-lg ">
                <div className="flex items-center justify-center space-x-2 ">
                  <MdPrivacyTip color="#ff8080" className="mb-2 text-xl " />
                  <h3 class="montserrat-subheading mb-2 text-xl font-semibold text-gray-600">
                    Privacy
                  </h3>
                </div>
                <p class=" montserrat-heading font-semibold text-gray-400">
>>>>>>> master
                  Cloak app prioritizes user privacy by generating a unique
                  cloak address for every transaction, thereby making it
                  difficult to track or trace the transaction history of a
                  particular user. Since the cloak address is not linked to any
                  personal information, it allows users to maintain anonymity
                  while transacting on the app. Moreover, users can choose to
                  keep their secret key private, which adds an extra layer of
                  privacy to their transactions. .
                </p>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
<<<<<<< HEAD
              <div class="bg-[#fddede] shadow-md hover:shadow-lg rounded-lg p-10 space-y-4 h-full">
                <div className="flex space-x-2 items-center justify-center">
                  <MdOutlineSecurity color="#ff8080" className="text-xl mb-2" />
                  <h3 class="montserrat-subheading text-xl text-gray-600 dark:text-gray-800 font-semibold mb-2">
                    Security
                  </h3>
                </div>
                <p class=" text-gray-400 dark:text-gray-600 font-semibold montserrat-heading">
=======
              <div class="h-full space-y-4 rounded-lg bg-[#fdf4f4] p-10 shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center space-x-2">
                  <MdOutlineSecurity color="#ff8080" className="mb-2 text-xl" />
                  <h3 class="montserrat-subheading mb-2 text-xl font-semibold text-gray-600">
                    Security
                  </h3>
                </div>
                <p class=" montserrat-heading font-semibold text-gray-400">
>>>>>>> master
                  Cloak app employs robust security measures to ensure that
                  users' funds and information are safe. The random number
                  generated during the cloak address creation serves as a secret
                  key, which only the user has access to. This secret key is
                  needed to access the private key associated with a particular
                  transaction, making it nearly impossible for anyone else to
                  access it. Additionally, the app uses encryption to protect
                  the user's data and funds from hackers or unauthorized
                  access..
                </p>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
<<<<<<< HEAD
              <div class="bg-[#fddede] shadow-md hover:shadow-lg rounded-lg p-10 space-y-4 h-full">
                <div className="flex space-x-2 items-center justify-center">
                  <AiOutlineTransaction
                    color="#ff8080"
                    className="text-xl mb-2"
                  />

                  <h3 class="montserrat-subheading text-xl text-gray-600 dark:text-gray-800 font-semibold mb-2">
                    Ease to use
                  </h3>
                </div>
                <p class="text-gray-400 dark:text-gray-600 font-semibold montserrat-heading">
=======
              <div class="h-full space-y-4 rounded-lg bg-[#fdf4f4] p-10 shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center space-x-2">
                  <AiOutlineTransaction
                    color="#ff8080"
                    className="mb-2 text-xl"
                  />

                  <h3 class="montserrat-subheading mb-2 text-xl font-semibold text-gray-600">
                    Ease to use
                  </h3>
                </div>
                <p class="montserrat-heading font-semibold text-gray-400">
>>>>>>> master
                  Cloak app is designed to be user-friendly, with a simple and
                  intuitive interface that allows users to generate, send, and
                  match cloak addresses in one click. The app's step-by-step
                  guide makes it easy for users to navigate and transact on the
                  platform. Moreover, the app provides real-time updates on the
                  status of a transaction, allowing users to track the progress
                  of their transactions in real-time..
                </p>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
<<<<<<< HEAD
              <div class="bg-[#fddede] shadow-md hover:shadow-lg rounded-lg p-10 space-y-4 h-full">
                <div className="flex space-x-2 items-center justify-center">
                  <BsCurrencyExchange
                    color="#ff8080"
                    className="text-xl mb-2"
                  />

                  <h3 class="montserrat-subheading text-xl text-gray-600 dark:text-gray-800 font-semibold mb-2">
                    Scalability
                  </h3>
                </div>
                <p class=" text-gray-400 dark:text-gray-600 font-semibold montserrat-heading">
=======
              <div class="h-full space-y-4 rounded-lg bg-[#fdf4f4] p-10 shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center space-x-2">
                  <BsCurrencyExchange
                    color="#ff8080"
                    className="mb-2 text-xl"
                  />

                  <h3 class="montserrat-subheading mb-2 text-xl font-semibold text-gray-600">
                    Scalability
                  </h3>
                </div>
                <p class=" montserrat-heading font-semibold text-gray-400">
>>>>>>> master
                  Cloak app allows for fast and seamless transactions, with
                  funds being sent and received almost instantly. This means
                  that users do not have to wait for an extended period to
                  access their funds or complete a transaction, making it an
                  ideal option for those who require quick and efficient
                  transactions..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
