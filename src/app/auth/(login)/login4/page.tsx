import background from "@/public/images/logo/logo_bg.png";
import LogInForm from "./login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="loginwrapper bg-background flex items-center justify-center overflow-y-hidden h-screen overflow-hidden w-full">
      <div className="flex w-full h-full justify-center items-center lg:justify-start overflow-y-hidden">
        <div className=" lg:basis-1/2 w-full lg:min-w-[600px] flex justify-start items-center relative lg:pr-12 xl:pr-20 2xl:pr-[110px] px-5">
          <LogInForm />
        </div>
        <div className="bg-gradient-to-r from-[#8f1220] to-black w-screen h-screen lg:flex  hidden">
          <Image
            src={background}
            alt="background"
            quality={100}
            priority
            className="absolute right-0 h-full object-contain w-max top-1/2 -translate-y-1/2"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
