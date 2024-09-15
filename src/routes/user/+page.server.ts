import { SESSION_COOKIE, createAdminClient } from "$lib/server/appwrite";
import { ID, OAuthProvider } from "node-appwrite";

export const actions = {
    signup: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");
        const username = form.get("username");

        const { account } = createAdminClient();

        await account.create(ID.unique(), email, password, username);
        const session = await account.createEmailPasswordSession(email, password);

        cookies.set(SESSION_COOKIE, session.secret, {
            sameSite: "strict",
            expires: new Date(session.expire),
            secure: true,
            path: "/",
        });
    },
};
