"use client";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
const formSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(5),
  passwordConfirm: z.string(),
}).refine((data) => {
  return data.password === data.passwordConfirm
}, {
  message: "Passwords do not match",
  path: ["passwordConfirm"]
})
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: ""
    }
  });

  const handleSubmit = () => {

  }
  return (
    <main className="flex gap-8 flex-col items-center bg-neutral-100 w-full h-auto  p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md border-2 p-4 rounded shadow-sm bg-white border-slate-100 w-full'>
          <h1 className='text-center text-xl mb-4 text-slate-700 font-bold'>Login</h1>
          <img className="mx-auto mb-4" src="icons/logo.svg" alt="company logo" />
          <div className='flex flex-col gap-4'>
            <FormField control={form.control} name='emailAddress' render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder='Email Address' type='email' {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
            />
            <FormField control={form.control} name='password' render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='Password' type='password' {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
            />
            <FormField control={form.control} name='passwordConfirm' render={({ field }) => {
              return (<FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder='Confirm Password' type='password' {...field} />
                </FormControl>
              </FormItem>
              );
            }}
            />
            <a href="">Forgot Password?</a>
            <Button type='submit' className='max-w-md w-full flex flex-col  gap-4'>Login</Button>
            <Link className="text-center" href="/signup">Not Registered Yet? <span className='text-cyan-700'>Create an Account</span></Link>

          </div>
        </form>
      </Form>
    </main>
  )
}
