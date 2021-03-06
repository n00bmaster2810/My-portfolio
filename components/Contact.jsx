import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    if (!name || name.length <= 3) {
      alert("Please fill a valid name|");
      return;
    }
    if (!message) {
      alert("Please fill a valid message|");
      return;
    }
    if (
      !email ||
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("Please enter a valid email address!");
      return;
    }

    console.log(data);
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      console.log(submitted);
      console.log(res);
      alert("Message sent");
    });
  };

  return (
    <div id="contact">
      <div className="flex flex-col  md:flex-col lg:flex-row md:p-8 rounded-md items-center" id="about">
        <div className="w-full md:w-4/4 flex flex-col justify-between items-center lg:w-2/4 p-2 md:p-6 ">
          <p className="text-5xl tracking-widest font-semibold text-gradient my-5">Contact Me</p>
          <form className="w-full h-full rounded-lg shadow-xl flex flex-col p-9 bg-slate-500">
            <label htmlFor="name" className="font-light mt-8 text-gray-50">
              Full name
            </label>
            <input
              type="text"
              className="bg-transparent text-black border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent text-black border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
            />
            <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-transparent text-black border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
            ></textarea>
            <btn
              className="w-2/5 md:w-1/5 mx-auto bg-sky-500 hover:bg-sky-900 mt-4 cursor-pointer rounded-full px-4 py-2 flex justify-center items-center"
              variant="contained"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Send
              <AiOutlineSend className="ml-2"/>
            </btn>
          </form>
        </div>
        <div className="w-full  md:w-3/4 lg:w-2/4 md:mx-auto p-6 md:p-6">
          <div>
            <img alt="about-me picture" src="\contact.jpg" className="rounded-2xl filter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
