import background from "@/public/images/logo/logo_bg.png";
import LogInForm from "./login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="loginwrapper bg-background flex items-center justify-center overflow-y-hidden overflow-hidden w-full">
      <div className="flex w-full h-full justify-center items-center lg:justify-start overflow-y-hidden">
        <div className=" lg:basis-1/2 w-full lg:min-w-[600px] flex justify-start items-center relative lg:pr-12 xl:pr-20 2xl:pr-[110px] px-5">
          <LogInForm />
        </div>
        <div className="bg-gradient-to-r from-primary-500 to-black w-screen h-screen lg:flex  hidden">
          <Image
            src={background}
            alt="background"
            quality={100}
            priority
            className="absolute right-0 top-0 bottom-0"
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
