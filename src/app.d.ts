import type { Models } from "node-appwrite";

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user: Models.User<Models.Preferences> | undefined;
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};

