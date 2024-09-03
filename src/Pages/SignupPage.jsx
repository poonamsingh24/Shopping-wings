import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import { toast } from "sonner";
import GoogleButton from "../components/GoogleButton";
import GithubProviderButton from "../components/GithubProviderButton";

export const signupPage = () => {
  const { signup, currentUser, logInWithGoogle, logInWithGithub } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      const res = await signup(email, password);
      if (res) {
        toast.success("Registration Successfull");
      }
      navigate("/login");
    } catch (error) {
      toast.error("Somthing went wrong please try again");
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    } else {
      navigate("/signup");
    }
  }, []);

  return (
    <Container className={"max-w-md mx-auto shadow-md rounded my-20 pb-5"}>
      <h1 className='text-center mt-6 mb-3'>Sign up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5  p-7 '
      >
        <input
          type='email'
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email Address",
            },
          })}
          placeholder='Email'
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type='password'
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Must be 5 or more characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be 20 or more characters long",
            },
          })}
          placeholder='Password'
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Button
          varient='seccondary'
          type='submit'
          className='w-full hover:opacity-90'
        >
          Register
        </Button>
      </form>
      <div className='flex items-center px-7'>
        <span className='w-full h-0.5 bg-slate-200 mr-3'></span>
        <span className='text-sm text-slate-400'>OR</span>
        <span className='w-full h-0.5 bg-slate-200 ml-3'></span>
      </div>
      <div className='px-7 py-5 '>
        <GoogleButton lable={"Signup With Google "} onClick={logInWithGoogle} />
        <GithubProviderButton
          lable={"signin With Google"}
          onClick={logInWithGithub}
        />
      </div>
    </Container>
  );
};

export default signupPage;
