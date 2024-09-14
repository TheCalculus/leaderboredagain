import { redirect } from '@sveltejs/kit';


export async function load({ locals }) {
    if (!locals.user) {
        console.log("not logged in");
        return;
    }

    console.log("logged in");
}
