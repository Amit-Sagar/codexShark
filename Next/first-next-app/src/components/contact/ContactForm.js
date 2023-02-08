import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ContactForm = () => {
  return (
    <div className="flex flex-col bg-slate-200 rounded-lg mt-7 w-[500px] p-12">
      <form className="flex flex-col">
        <div>
          <div>
            <Input label="First Name" placeholder="First name" />
            <Input label="Last Name" placeholder="Last name" />
          </div>
        </div>
        <Input type="email" label="Your Email" placeholder="Your email" />
        <div className="flex flex-col mt-6">
          <label htmlFor="" className="text-black">Your Query</label>
          <textarea
            cols="10"
            rows="5"
            placeholder="Mention your query"
            className="focus:border-white focus:ring-0 focus:outline-none"
          />
        </div>
      </form>
      <Button className="mt-6 text-sm font-medium rounded-lg">Submit</Button>
    </div>
  );
};

export default ContactForm;
