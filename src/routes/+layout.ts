import { createBrowserClient, createServerClient, isBrowser } from "@supabase/ssr"
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"
import type { LayoutLoad } from "./$types"
import { user } from "$lib/stores"

let storeValue;
const unsubscribe = user.subscribe(value => { storeValue = value });

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    depends("supabase:auth")

    const supabase = isBrowser()
        ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
        })
        : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
            cookies: {
                getAll() {
                    return data.cookies
                },
            },
        })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (session != undefined) {
        const username = (await supabase
            .from("users")
            .select()
            .eq("id", session?.user.id)
            .single()).data.username;
      
        user.set({ id: session?.user.id, username: username, flair: "" });
    }

    unsubscribe();
    return { supabase, session }
}

