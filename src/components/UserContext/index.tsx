import React, { useEffect, useState, createContext, useContext } from "react";
import { Session, User } from "@supabase/supabase-js";
import { client } from "src/libs/SupabaseClient";

export const UserContext = createContext<{
  user: User | null;
  session: Session | null;
}>({
  user: null,
  session: null,
});

export const UserContextProvider = (props: any) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = client.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = client.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener!.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider.");
  }
  return context;
};
