import Image from "next/image";
import Link from "next/link";

export default function Soon({ params }: { params: { slug: string } }) {
  return (
    <main>
      <section className="py-10 h-[70vh] grid place-content-center">
        <div className="container">
          <div className="max-w-2xl p-10 lg:p-14 xl:p-20 rounded-xl text-center mx-auto shadow-[9px_18px_76px_0px_rgba(65,_18,_251,_0.10)]">
            <h2 className="font-garet font-light text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-10">
              Bit<span className="inline-block capitalize">{params.slug}</span> is <br />
              <span className="md:block mt-4 font-bold">Coming Soon</span>
            </h2>
            <p className="mt-6">
              The page you’re looking for is either not available yet, or moved
              to another page
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
