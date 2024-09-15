import { Client, Account, Databases } from 'node-appwrite';
import { APPWRITE_KEY } from '$env/static/private';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT } from '$env/static/public';

export const SESSION_COOKIE = 'leaderbored-session';

let adminClientInstance = null;
let clientInstance = null;

export function createAdminClient() {
    if (!adminClientInstance) {
        adminClientInstance = new Client()
            .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
            .setProject(PUBLIC_APPWRITE_PROJECT)
            .setKey(APPWRITE_KEY); // Set the Appwrite API key!
    }

    // Return the services we want to use.
    return {
        get account() {
            return new Account(adminClientInstance);
        },

        get database() {
            return new Databases(adminClientInstance);
        },
    };
}

export function createSessionClient(event) {
    if (!clientInstance) {
        clientInstance = new Client()
            .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
            .setProject(PUBLIC_APPWRITE_PROJECT);
    }

    // Extract our custom domain's session cookie from the request
    const session = event.cookies.get(SESSION_COOKIE);
    if (!session) {
        throw new Error("No user session");
    }

    client.setSession(session);

    // Return the services we want to use.
    return {
        get account() {
            return new Account(clientInstance);
        }
    };
}
