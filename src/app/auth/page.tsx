"use client"

import { BsSlack } from "react-icons/bs";
import { RxGithubLogo } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineAutoAwesome } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Typography from '@/components/ui/typography';
import { Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/*General Format Structure of Page file:
1. Imports
2. start a function that is the name of the page --> const AuthPage = () => {...}
3. in the funtion, first start building out a form schema using zod
4. in that function, have a return statement that returns the html of the page
5. outside the function, return the function name --> export default AuthPage;
*/

/* General Notes:
- Use the Typography component to add text to the page
- Import certain structures from shadcn to build the page like buttons, inputs, etc.
- Use the Form component from shadcn to build out the form
- use zod to build out the form schema
*/

const AuthPage = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

  const formSchema = z.object({
    email: z.string().email().min(2, {message: 'Email must be at least 2 characters long'}),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
          -- Create a Button tag. first thing is to put classes in the first tag. in the center
          this is where you build out the components - like any images/text you want in the button, then
          close the button --
          <Button 
            disabled={isAuthenticating}
            variant='outline' 
            className='py-6 border-2 flex space-x-3'
          >
            <FcGoogle size={30}/>
            <Typography
              className='text-xl'
              text='Sign in with Github'
              variant='p'
            />
          </Button>
          
          <Button 
            disabled={isAuthenticating}
            variant='outline' 
            className='py-6 border-2 flex space-x-3'
          >
            <RxGithubLogo size={30}/>
            <Typography
              className='text-xl'
              text='Sign in with Github'
              variant='p'
            />
          </Button>
        </div>

        <div>
          <div className="flex items-center my-6">
            <div className='mr-[10px] flex-1 border-t bg-neutral-300' />
            <Typography text='OR' variant='p'/>
            <div className='ml-[10px] flex-1 border-t bg-neutral-300' />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <fieldset disabled={isAuthenticating}>
                  <FormField 
                    control={form.control} 
                    name='email'
                    render={({field}) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='name@work-email.com' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    variant="secondary" 
                    className='bg-primary-dark hover:bg-primary-dark/90 w-full my-5 text-white'
                    type='submit'
                    >
                      <Typography text='Sign in With Email' variant='p' />
                  </Button>

                  <div className='px-5 py-4 bg-gray-100 rounded-sm'>
                  <div className='text-gray-500 flex items-center space-x-3'>
                    <MdOutlineAutoAwesome />
                    <Typography
                      text='We will email you a magic link for a password-free sign-in'
                      variant='p'
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;