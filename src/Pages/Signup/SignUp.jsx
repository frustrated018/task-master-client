import { FaTasks } from "react-icons/fa";
import verticalBg from "../../assets/verticalbg.svg";

const description = (
  <>
    <a className="block text-white" href="/">
      <span className="sr-only">Home</span>
      <FaTasks size={40} />
    </a>

    <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
      Welcome to Task Master!
    </h2>

    <p className="mt-4 leading-relaxed text-white/90">
      Welcome to Task Master! Elevate your productivity with our intuitive task
      management platform. Sign up today to organize your activities, set
      priorities, and achieve your goals effortlessly. Join a community
      committed to maximizing efficiency and success—one task at a time.
    </p>
  </>
);

const SignUp = () => {
  return (
    <>
      <section className="bg-[#111827]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src={verticalBg}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              {description}
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                {description}
              </div>

              <form action="#" className="mt-8">
                <h2 className="text-5xl text-center font-bold mb-8 text-white">
                  Sign Up
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <section className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="first_name"
                        className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="last_name"
                        className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                      />
                    </div>
                  </section>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                    />
                  </div>

                  <section className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="passwordConfirmation"
                        className="block text-sm font-medium text-white"
                      >
                        Password Confirmation
                      </label>
                      <input
                        type="password"
                        id="passwordConfirmation"
                        name="password_confirmation"
                        className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                      />
                    </div>
                  </section>

                  <div>
                    <label
                      htmlFor="marketingAccept"
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id="marketingAccept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                      />
                      <span className="ml-2 text-sm text-white">
                        I want to receive emails about events, product updates,
                        and company announcements.
                      </span>
                    </label>
                  </div>

                  <div>
                    <p className="text-sm text-white">
                      By creating an account, you agree to our{" "}
                      <a href="#" className="text-white underline">
                        terms and conditions{" "}
                      </a>
                      and{" "}
                      <a href="#" className="text-white underline">
                        {" "}
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <button className="inline-block w-full py-3 rounded-md border border-[#3DDEBF] bg-[#3DDEBF] text-base text-black transition hover:bg-transparent hover:text-[#3DDEBF] focus:outline-none focus:ring active:text-[#25dab6] font-bold">
                      Create an account
                    </button>
                  </div>

                  <div className="mt-4 text-base text-white">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-white underline hover:text-[#21C45D]"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default SignUp;
