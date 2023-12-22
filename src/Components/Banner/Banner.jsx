const Banner = () => {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[70vh] lg:items-center">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-3xl font-extrabold leading-3">
              Effortless task management for a more
              <span className="sm:block uppercase text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#198F25] via-[#22C55E] to-[#3DDEBF] mt-6">
                productive you.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Your tasks, your rules. Experience the freedom to manage your
              schedule, your way, with Task Master.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-[#198F25] bg-[#198F25] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Let&apos;s Explore
              </a>

              <a
                className="block w-full rounded border border-[#198F25] px-12 py-3 text-sm font-medium text-white hover:bg-[#198F25] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
