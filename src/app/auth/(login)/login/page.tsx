import Image from "next/image";
import background from "@/public/images/auth/background.png";
import LogInForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="loginwrapper bg-background flex items-center min-h-screen overflow-hidden w-full">
      <div className="flex w-full  justify-center lg:justify-start overflow-y-hidden">
        <div className=" lg:basis-1/2 w-full  flex justify-start items-center relative  lg:pr-12 xl:pr-20 2xl:pr-[110px] px-5">
          <div className="w-full md:w-[440px] xl:w-[570px]  px-5 py-7 md:p-10 lg:p-16  bg-card rounded-xl">
            <LogInForm />
          </div>
        </div>
        <Image src={background} alt="image" className="" priority={true} />
      </div>
    </div>
  );
};

export default LoginPage;
