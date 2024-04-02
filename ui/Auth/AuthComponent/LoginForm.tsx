import Image from "next/image";
import Link from "next/link";
import GoogleAuthButton from "../GoogleAuthButton";
export const LoginForm = ({ logo }: any) => {
  return (
    <section className=" bg-zinc-950 w-screen ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="hidden items-center p-8">
          <Image
            src={logo}
            className="h-8 mr-3 invert w-auto"
            alt="Crib Logo"
            width={145}
            height={100}
            priority
          />
        </Link>
        <div className="w-full rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0 bg-black border-zinc-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-owners font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Sign in to your account
            </h1>
            <GoogleAuthButton />
            <form
              className="space-y-4 md:space-y-6"
              action="/auth/login"
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
                  className=" border sm:text-sm rounded-md  block w-full p-2.5 bg-zinc-900 border-zinc-800 placeholder-zinc-400 text-white focus:ring-red-300 focus:border-red-300"
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
                  className=" border sm:text-sm rounded-md  block w-full p-2.5 bg-zinc-900 border-zinc-800 placeholder-zinc-400 text-white focus:ring-red-300 focus:border-red-300"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border  rounded focus:ring-3 focus:ring-primary-300 bg-zinc-700 border-zinc-800 focus:ring-red-300 ring-offset-zinc-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className=" text-zinc-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium  text-zinc-300 hover:underline text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                formAction={"/auth/login"}
                //  onClick={() =>signInWithEmail(email, password)}
                type="submit"
                className="w-full font-owners font-bold text-white  bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-md text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light  text-zinc-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/register"
                  className="font-owners font-bold text-zinc-300 hover:underline text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
