export async function load({ locals }) {
    if (!locals.user) return;

    return {
        user: locals.user
    };
}
