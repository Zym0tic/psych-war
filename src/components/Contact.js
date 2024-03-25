import React, { useState } from 'react';
import { contactData } from '../data';
import { send } from 'emailjs-com';

const Contact = () => {
  const { title, info, form } = contactData;

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'HVMANE',
    message: '',
    reply_to: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when form is submitted

    send('service_98j0v1c', 'template_gjue3ls', toSend, 'zFjF65dKnY3EQpxPK')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="section pt-[160px] lg:pt-[220px]" name="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <div className="flex-1 font-bold">
            <h2 className="h2 max-w-[490px]">{title}</h2>
            {info.map((item, index) => {
              const { title, subtitle, email } = item;
              return (
                <div key={index}>
                  <div className="font-primary uppercase text-xl mb-3">
                    {title}
                  </div>
                  <div className="mb-6 text-accent">
                    {subtitle}
                  </div>
                  <div className="flex flex-col gap-y-3 mb-8">
                    <div className="flex items-center gap-[10px]">
                      <div>{email.icon}</div>
                      <div className="font-medium text-accent font-bold">{email.address}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center">
            {!formSubmitted ? ( // Render form if formSubmitted is false
              <form className="flex flex-col gap-y-10 w-full" onSubmit={onSubmit}>
                <input
                  className="border-b border-dark placeholder:text-accent bg-header italic trackingg-[0.06em] outline-none pb-4"
                  placeholder={form.name}
                  type="text"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  className="border-b border-dark placeholder:text-accent bg-header italic trackingg-[0.06em] outline-none pb-4"
                  placeholder={form.email}
                  type="text"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <input
                  className="border-b border-dark placeholder:text-accent bg-header italic trackingg-[0.06em] outline-none pb-4"
                  placeholder={form.message}
                  type="text"
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                />
                <button className="btn btn-sm btn-dark text-accent self-start">
                  {form.btnText}
                </button>
              </form>
            ) : (
              // Render message if formSubmitted is true
              <p>Message sent!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
