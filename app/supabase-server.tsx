import {
  createRouteHandlerClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";
import { supabaseAdmin } from "../lib/providers/supabase/supabase-lib-admin";

export const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient({ cookies: () => cookieStore });
});

export const supabaseRouteHandler = cache(() => {
  const cookieStore = cookies();
  return createRouteHandlerClient({ cookies: () => cookieStore });
});

export const createFormType = async (newFormType: string) => {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabaseAdmin
    .from("form_types")
    .insert([{ type: newFormType }])
    .select()
    .maybeSingle();
  if (error) {
    console.log(error);
  }
  return data;
};

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getUserDetails() {

  const supabase = createServerSupabaseClient();
  try {
    const { data: userDetails } = await supabase
      .from("users")
      .select("*")
      .single();
    return userDetails;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getSubscription() {

  const supabase = createServerSupabaseClient();
  try {
    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*, prices(*, products(*))")
      .in("status", ["trialing", "active"])
      .maybeSingle()
      .throwOnError();
    return subscription;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export const getActiveProductsWithPrices = async () => {

  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, prices(*)")
    .eq("active", true)
    .eq("prices.active", true)
    .order("metadata->index")
    .order("unit_amount", { foreignTable: "prices" });

  if (error) {
    console.log(error.message);
  }
  return data ?? [];
};
