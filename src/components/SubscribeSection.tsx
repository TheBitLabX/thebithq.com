"use client";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import useSubscribe from "@/utils/useSubScribe";

export default function SubscribeSection() {
  const [email, setEmail] = useState<string>("");

  const { subscribe, isLoading, error, result } = useSubscribe();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    subscribe(email);
  };

  return (
    <section className='py-12'>
      <div className='container'>
        <div className='bg-[#FCFAF1] rounded-2xl grid lg:grid-cols-2 items-center p-6 md:p-12 lg:p-16'>
          <div>
            <h2 className='font-garet font-light text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-6 xl:leading-10'>
              Stay in the
              <span className='md:block mt-4 font-bold'>
                &nbsp;Artistic Loop
              </span>
            </h2>
            <div className='max-w-sm'>
              <p className='text-sm md:text-base lg:text-lg text-slate-800 xl:text-xl my-6'>
                Inspiration, Connection, and Exclusive Updates. Stay in the
                Artistic Loop. Be the First to Know.
              </p>

              <form
                className='flex items-center space-x-2'
                onSubmit={handleSubmit}
              >
                <div className='relative w-full'>
                  <input
                    type='text'
                    placeholder='Enter your email'
                    value={result !== null ? "" : email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input input-bordered placeholder:text-neutral-500 font-light rounded-3xl input-primary bg-[#FFF5C2] w-full pr-12 py-5'
                  />
                  <ArrowRightIcon className='absolute text-primary top-1/2 -translate-y-1/2 right-4' />
                </div>
                <button
                  className='btn btn-primary rounded-3xl text-base'
                  type='submit'
                  disabled={isLoading}
                >
                  Submit
                </button>
              </form>
              <p className='text-xs mt-3'>
                By clicking Join Now you&apos;re confirming that you agree with
                our&nbsp;
                <a href='#' className='link link-hover !text-xs text-blue-500'>
                  Terms and Conditions.
                </a>
              </p>
              <div className='W-full block mt-[15px]'>
                {isLoading && <p>Subscribing...</p>}
                {result && <p>Subscribed successfully!</p>}
                {error && <p>Error: {error}</p>}
              </div>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className='relative'>
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
          </div>
        </div>
      </div>
    </section>
  );
}
