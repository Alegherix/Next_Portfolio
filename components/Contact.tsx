import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface ContactProps {}

interface IFormInput {
  name: string;
  mail: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({}) => {
  const [mail, setMail] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMail(false);
    }, 7000);
  }, [mail]);

  const {
    register,
    handleSubmit,
    watch,
    errors,
    reset,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    const res = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    reset();
    setMail(true);
    setMessage(text);
  };

  return (
    <>
      <div className="my-36 flex items-center flex-col px-6">
        <h2 className="text-5xl font-bold mb-3 text-center">
          Get in touch with me
        </h2>
        <div className="h-1 w-3/4 md:w-101 bg-teeth mx-auto mb-4"></div>
        <p className="mb-8 text-lg">
          Have a question, don't hesitate to send me an email.
        </p>
        <form
          id="contact"
          className="flex flex-col w-10/12 max-w-screen-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3 mb-4 md:flex-row md:gap-10 md:mb-10">
            <div className="flex flex-col w-full">
              <label className="mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="p-1 rounded-sm"
                name="name"
                id="name"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="error">This field is required</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2" htmlFor="mail">
                Mail
              </label>
              <input
                className="p-1 rounded-sm"
                name="mail"
                id="mail"
                ref={register({ required: true })}
              />
              {errors.mail && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="rounded-md p-1"
              ref={register({ required: true })}
              rows={10}
              name="message"
              id="message"
            />
            {errors.message && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="div flex w-full justify-between mt-6">
            <button className="btn justify-self-center" type="submit">
              Send
            </button>
            {mail && <p className="text-xl">{message}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
