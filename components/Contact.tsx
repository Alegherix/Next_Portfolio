import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactProps {}

interface IFormInput {
  name: string;
  mail: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({}) => {
  const { register, handleSubmit, watch, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <>
      <div className="my-64 flex items-center flex-col">
        <h2 className="text-3xl font-bold mb-6">Get in touch with me</h2>
        <form
          className="flex flex-col max-w-4xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-28 mb-10">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="p-1 rounded-sm"
                name="name"
                ref={register({ required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="mail">
                Mail
              </label>
              <input
                className="p-1 rounded-sm"
                name="mail"
                ref={register({ required: true })}
              />
              {errors.mail && <span>This field is required</span>}
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
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            className="mt-6 border-2 border-ocean rounded-md text-teeth px-4 py-2 w-28 self-end hover:bg-drapes transition ease-out duration-200"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
