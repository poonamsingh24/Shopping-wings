import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-gray-950 text-gray-50 py-20 '>
      <Container>
        <div className=' mb-10 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-7'>
          <div>
            <Logo className={"text-gray-50"} />
            <p className='text-justify '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              ipsum in? Praesentium vel animi, cupiditate vero sapiente corrupti
              ullam nobis?
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <Link to='/category/men'>Men</Link>
            <Link to='/category/women'>Women</Link>
            <Link to='/category/kids'>Kids</Link>
            <Link to='/'>Terms & Condition</Link>
            <Link to='/'>FAQ</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link to=''>Career</Link>
            <Link to='/'>Join our team</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Terms & Condition</Link>
            <Link to='/'>Help</Link>
          </div>
          <div className='flex flex-col gap-5'>
            <div className=' flex gap-5'>
              <Link to='/'>
                <FaYoutube size={25} />
              </Link>
              <Link to='/'>
                <FaPinterest size={25} />
              </Link>
              <Link to='/'>
                <FaLinkedin size={25} />
              </Link>
              <Link to='/'>
                <FaWhatsapp size={25} />
              </Link>
            </div>
            <form>
              <lable htmlFor='join'> Join Now</lable>
              <input
                type='email'
                placeholder='Email'
                id='join'
                className='mt-3'
              />
              <input
                type='submit'
                value={"submit"}
                className='cursor-pointer text-gray-50 mt-3'
              />
            </form>
          </div>
        </div>
        <p className='text-left md:text-center mt-20  text-gray-500 '>
          Copyright 2022 . All rights reserved
        </p>
      </Container>
    </footer>
  );
}
