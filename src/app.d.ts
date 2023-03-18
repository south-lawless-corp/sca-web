// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
    interface Platform {
      env?: {
        POCKETBASE: string;
        POCKETBASE_ID: string;
        POCKETBASE_PW: string;
      };
    }
  }
}
export {};