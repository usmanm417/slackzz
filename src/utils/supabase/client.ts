'use client'

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

/* CODE EXPLAINED:
So in order for us to use supabase, we need to make something called a client
A client is basically something that talks to supabase for us and is the one handling the apis.
Like it is the thing that is executing the apis and retrieving and pushing data from/to supabase.
So we need to create a client that we can use to talk to supabase. Think of the client as a person.
The url is the name of the person, and the anon key is the persons social security number.
Those two things are how supabase knows its an authenticated user - ie a real person interacting with supabase
So first step is to import the createBrowserclient from supabase - this is found in the documentation on supabases website.
This is the link - https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=environment&environment=client&queryGroups=framework&framework=nextjs
then after that, we need to create an instance of the client. think back to 1331, "clients" is basically like a class,
we need to create an actual instance of the class. Saying client is like saying human, we need to actually create a person,
that is what the line 4 is doing. It is instantiating a client object with the url and anon key from the .env file. 
This can also be found on the link provided.
The name/way to call on/use the instance of the client is with the variable name - supabaseBrowserClient

so from now on out, when we need to do anything with the browser, we now have a client that will handle the pushes and pulls. 
*/