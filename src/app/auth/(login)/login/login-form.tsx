"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import logo from "@/public/images/logo/logo-white.png";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Loader2, Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/src/components/ui/checkbox";
import googleIcon from "@/public/images/auth/google.png";
import facebook from "@/public/images/auth/facebook.png";
import twitter from "@/public/images/auth/twitter.png";
import GithubIcon from "@/public/images/auth/github.png";
import { SiteLogo } from "@/src/components/svg";
import { useMediaQuery } from "@/src/hooks/use-media-query";

const schema = z.object({
  email: z.string().email({ message: "Insira um email válido" }),
  password: z
    .string()
    .min(4, { message: "Senha deve ter no mínimo 4 caracteres" }),
});
const LogInForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = React.useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "dashtail@codeshaper.net",
      password: "password",
    },
  });
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data: any) => {
    startTransition(async () => {
      let response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.ok) {
        toast.success("Login Successful");
        window.location.assign("/dashboard");
        reset();
      } else if (response?.error) {
        toast.error(response?.error);
      }
    });
  };
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="w-full max-w-[600px] ">
        <Link href="/dashboard" className="inline-block">
          <Image
            src={logo}
            alt="logo"
            className=""
            priority={true}
            width={370}
            height={80}
          />
        </Link>
        <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-50">
          Login
        </div>
        <div className="2xl:text-lg text-base text-default-50 mt-2 leading-6">
          Entre agora no sistema oficial do Grupo Foco
        </div>
        <div className="2xl:text-lg text-base text-default-100 mt-2 leading-6 ">
          Se quiser conhecer mais pode{" "}
          <Link href="/" className="italic text-primary-500 underline">
            Clicar aqui agora!
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 2xl:mt-7">
          <div className="relative">
            <Input
              removeWrapper
              type="email"
              id="email"
              size={!isDesktop2xl ? "xl" : "lg"}
              placeholder="email@example.com"
              disabled={isPending}
              {...register("email")}
              className={cn(
                "peer",
                {
                  "border-destructive": errors.email,
                },
                " border-t-0 border-l-0 border-r-0 rounded-none border-zinc-200  px-6"
              )}
            />

            <Label
              htmlFor="email"
              className="rounded-md absolute text-base duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]   px-6 peer-focus:px-2
               peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-zinc-50"
            >
              Email
            </Label>
            <Mail
              className="absolute w-6 h-6 duration-300 transform  scale-75  z-10  peer-focus:px-1 top-3
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 text-zinc-50"
            />
          </div>
          {errors.email && (
            <div className=" text-destructive mt-2">{errors.email.message}</div>
          )}
          <div className="relative mt-6">
            <Input
              removeWrapper
              type={passwordType === "password" ? "password" : "text"}
              id="password"
              size={!isDesktop2xl ? "xl" : "lg"}
              placeholder=" "
              disabled={isPending}
              {...register("password")}
              className={cn(
                "peer",
                {
                  "border-destructive": errors.password,
                },
                " border-t-0 border-l-0 border-r-0 rounded-none border-zinc-200 px-6"
              )}
            />
            <Label
              htmlFor="password"
              className={cn(
                "rounded-md absolute text-base text-zinc-50  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]   bg-background  px-6 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
                {
                  " text-sm ": isDesktop2xl,
                }
              )}
            >
              Senha
            </Label>
            <Lock
              className="absolute w-6 h-6 duration-300 transform  scale-75  z-10  peer-focus:px-1 top-3
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 text-zinc-50"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-4 h-4 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-4 h-4 text-default-400"
                />
              )}
            </div>
          </div>

          {errors.password && (
            <div className=" text-destructive mt-2">
              {errors.password.message}
            </div>
          )}

          <div className="mt-5  mb-6 flex flex-wrap gap-2">
            <div className="flex-1 flex  items-center gap-1.5 ">
              <Checkbox
                size="sm"
                className="border-default-300 mt-[1px]"
                id="isRemebered"
              />
              <Label
                htmlFor="isRemebered"
                className="text-sm text-zinc-300 cursor-pointer whitespace-nowrap"
              >
                Lembrar de mim
              </Label>
            </div>
            <Link
              href="/auth/forgot4"
              className="flex-none text-sm text-primary-500"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Button
            className="w-full bg-primary-500"
            disabled={isPending}
            size={!isDesktop2xl ? "lg" : "md"}
          >
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isPending ? "Loading..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-6 text-center text-base text-zinc-200">
          Ainda não possui conta?{" "}
          <Link href="/auth/register4" className="text-primary-500">
            {" "}
            Cadastre-se{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
