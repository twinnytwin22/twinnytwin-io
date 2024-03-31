import { Database } from "@/types/Database";
import { BrowserCookieAuthStorageAdapter } from "@supabase/auth-helpers-shared";
import { createClient } from "@supabase/supabase-js";
import { supabaseSRkey, supabaseUrl } from "./providers/supabase/routerHandler";

export const redirectUrl = (location: Location) => `${location.origin}/api/auth/callback`;
export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url + '/api/auth/callback'
}


export const supabaseAuth = createClient<Database>(supabaseUrl, supabaseSRkey, {
  auth: {
    flowType: "pkce",
    storage: new BrowserCookieAuthStorageAdapter(),
    // storageKey: 'auth',

    //  persistSession: true,
    //detectSessionInUrl: true,
    //  autoRefreshToken: true
  },
});


export const CURRENCY = "usd";
// Set your amount limits: Use float for decimal currencies and
// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
export const MIN_AMOUNT = 10.0;
export const MAX_AMOUNT = 5000.0;
export const AMOUNT_STEP = 5.0;
export const shipping = 7.99;
export const grandTotal = (totalPrice: number) => {
  return (totalPrice + shipping).toFixed(2); // Parse to float
};
