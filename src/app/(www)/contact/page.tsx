"use client";
import { faqs } from "@/data";
import useSendEmail from "@/utils/useSendEmail";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { sendEmail, isLoading, error, result } = useSendEmail();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail({ name, email, message });
  };

  return (
    <main>
      <section className='relative py-12 h-[30rem] bg-black grid place-content-center pt-[170px]'>
        <Image
          className='absolute inset-0 opacity-20 object-center w-full h-full object-cover'
          src={`/img/contact.jpg`}
          alt='Contact Background'
          width={1440}
          height={525}
        />
        <div className='relative container text-white'>
          <div className='max-w-xl text-center space-y-6'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
              Contact Us
            </h1>
            <p className='font-light lg:text-lg'>
              Reach Out for Collaboration, Opportunities, and Partnerships:
              Let&apos;s Shape the Future of Music Together
            </p>
          </div>
        </div>
      </section>
      <section className='relative py-20 md:py-24 lg:py-28 bg-primary'>
        <div className='container'>
          <div className='grid md:grid-cols-3'>
            <div className='flex space-x-3'>
              <MailIcon />
              <div>
                <h6 className='font-semibold text-lg xl:text-2xl'>Email</h6>
                <p className='mt-2 lg:text-lg'><Link href={"mailto:info@thebithq.com"}>info@thebithq.com</Link></p>
              </div>
            </div>
            <div className='flex space-x-3'>
              <PhoneIcon />
              <div>
                <h6 className='font-semibold text-lg xl:text-2xl'>Phone</h6>
                <p className='mt-2 lg:text-lg'>
                  <Link href={"telto:+447456446467"}>+447456446467</Link>
                </p>
              </div>
            </div>
            <div className='flex space-x-3'>
              <MapPinIcon />
              <div>
                <h6 className='font-semibold text-lg xl:text-2xl'>Office</h6>
                <p className='mt-2 lg:text-lg'>London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative py-20'>
        <div className='container'>
          <div className='grid items-center lg:grid-cols-2'>
            <div className='relative hidden lg:block'>
              <Image
                src={`/img/subscribe.png`}
                alt='Subscribe Image'
                width={500}
                height={522}
              />
              <Image
                className='absolute inset-0 -z-1 -rotate-12'
                src={`/img/subscribe.png`}
                alt='Subscribe Image'
                width={500}
                height={522}
              />
            </div>
            <div>
              <h5 className='font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2'>
                Contact Us
              </h5>
              <p>
                Got questions, enquires or feedback? We’d love to hear from you!
                Just fill out the form below
              </p>

              <form className='space-y-4 mt-6' onSubmit={handleSubmit}>
                <div className='form-control w-full'>
                  <label className='pb-1 label'>Name</label>
                  <input
                    type='text'
                    required
                    placeholder='Enter your name'
                    value={result == null ? name : ""}
                    onChange={(e) => setName(e.target.value)}
                    className='input input-bordered w-full border-zinc-400 rounded-md'
                  />
                </div>
                <div className='form-control w-full'>
                  <label className='pb-1 label'>Email</label>
                  <input
                    type='email'
                    required
                    placeholder='Enter your email'
                    value={result == null ? email : ""}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input input-bordered w-full border-zinc-400 rounded-md'
                  />
                </div>
                <div className='form-control w-full'>
                  <label className='pb-1 label'>Message</label>
                  <textarea
                    required
                    className='textarea textarea-bordered border-zinc-400 rounded-md'
                    placeholder='type your message here'
                    value={result == null ? message : ""}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className='form-control'>
                  <label className='pb-1 label items-center justify-start space-x-3 cursor-pointer'>
                    <input
                      required
                      type='checkbox'
                      className='w-4 h-4'
                      onChange={(e) => setCheck(e.target.checked!)}
                      checked={result == null ? check : false}
                    />
                    <span className='label-text text-zinc-700'>
                      I accept the{" "}
                      <Link className='!lowercase' href={`#`}>
                        Terms and Conditions.
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  className='btn btn-primary btn-block lg:btn-wide'
                  type='submit'
                  disabled={isLoading || !check}
                >
                  Submit
                </button>
                <div className='W-full block mt-[15px]'>
                  {isLoading && <p>Sending message...</p>}
                  {result && <p>Message Sent successfully!</p>}
                  {error && <p>Error: {error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='container'>
          <div className='text-center mb-10'>
            <h1 className='text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
              FAQs
            </h1>
            <p className='text-zinc-800 font-light mt-1 lg:text-lg'>
              Here are some frequently asked qustions
            </p>
          </div>

          {faqs.map(({ id, title, desc }) => (
            <div
              key={id}
              tabIndex={0}
              className='collapse collapse-arrow border-y -mt-px rounded-none border-base-300'
            >
              <div className='collapse-title pl-0 pr-6 font-semibold text-zinc-700'>
                {title}
              </div>
              <div className='collapse-content pl-0 pr-10'>
                <p className='font-light text-zinc-600'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
