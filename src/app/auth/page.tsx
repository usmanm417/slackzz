import { BsSlack } from "react-icons/bs";
import { RxGithubLogo } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';


import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import React from 'react'
import { Form, useForm } from "react-hook-form";
import { z } from "zod";


const AuthPage = () => {
  const formSchema = z.object({
    email: z.string().email().min(2, {message: 'Email must be at least 2 characters long'}),
  })

  const form = useForm<z.infer<typeof formSchema>>();

  return (
    <div className = 'min-h-screen p-5 grid text-center place-content-center bg-white'>
      <div className='max-w-[450px]'>
        <div className="flex justify-center items-center gap-3 mb-4">
          <BsSlack size={30} />
          <Typography text='Slackzz' variant='h2'/>
        </div>

        <Typography 
          text='Sign in to your Slackzz'
          variant='h2'
          className='mb-3'
        />

        <Typography 
          text='We suggest using the email address that you use at work'
          variant='p'
          className='opacity-90 mb-7'
        />

        <div className='flex flex-col space-y-4'>
          <Button variant='outline' className='py-6 border-2 flex space-x-3'>
            <FcGoogle size={30}/>
            <Typography
              className='text-xl'
              text='Sign in with Github'
              variant='p'
            />
          </Button>
          <Button variant='outline' className='py-6 border-2 flex space-x-3'>
            <RxGithubLogo size={30}/>
            <Typography
              className='text-xl'
              text='Sign in with Github'
              variant='p'
            />
          </Button>
        </div>

        <div className="flex items-center my-6">
          <div className='mr-[10px] flex-1 border-t bg-neutral-300' />
          <Typography
            text='OR' variant='p'/>
          <div className='ml-[10px] flex-1 border-t bg-neutral-300' />

          {/* FORM */}
          <Form></Form>
        </div>
      </div>
    </div>
  )
}

export default AuthPage