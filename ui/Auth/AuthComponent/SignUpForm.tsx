import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import GoogleAuthButton from "../GoogleAuthButton";
export const SignUpForm = ({ logo }: any) => {
  // const pathname = usePathname()
  const params = useSearchParams().toString();
  // console.log(params)
  const renderStep1 = () => {
    return (
      <React.Fragment>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link href="/" className="flex items-center p-8">
            <Image
              src={logo}
              className="h-8 mr-3 invert w-auto"
              alt="Crib Logo"
              width={145}
              height={100}
              priority
            />
          </Link>
          <div className="w-full  rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0 bg-black border-zinc-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Register a new account
              </h1>
              <GoogleAuthButton />
              <form
                className="space-y-4 md:space-y-6"
                action="/auth/sign-up"
                method="post"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    //  onChange={(e) => setEmail(e.target.value)}
                    //  value={email}
                    id="email"
                    className=" border   sm:text-sm rounded-md focus:ring-red-300 focus:border-zinc-800 block w-full p-2.5 bg-zinc-700 border-zinc-800 placeholder-zinc-400 text-white "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    //  onChange={(e) => setPassword(e.target.value)}
                    //  value={password}
                    placeholder="••••••••"
                    className=" border   sm:text-sm rounded-md focus:ring-red-300 focus:border-zinc-800 block w-full p-2.5 bg-zinc-700 border-zinc-800 placeholder-zinc-400 text-white "
                    required
                  />
                </div>

                <button
                  formAction="/auth/sign-up"
                  type="submit"
                  className="w-full text-black font-medium bg-red-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-md text-sm px-5 py-2.5 text-center "
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-zinc-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-zinc-300 hover:underline "
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderConfirmForm = () => {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center p-8">
          <Image
            src={logo}
            className="h-8 mr-3 invert w-auto"
            alt="Crib Logo"
            width={145}
            height={100}
            priority
          />
        </Link>
        <div className="w-full  rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0 bg-black border-zinc-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <p className="text-base font-medium leading-tight text-center tracking-tight  md:text-lg text-white">
              Please check your inbox and confirm your email.
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className=" bg-zinc-950 w-screen ">
      {params.startsWith("confirm") ? renderConfirmForm() : renderStep1()}
    </section>
  );
};
