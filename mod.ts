import {
    loadPlugin,
    importFromPlugin,
} from "https://deno.land/x/calcite@2.3/calcite.ts";

await loadPlugin("deno_digest_plugin", "file://target/debug/");

export const multiply = importFromPlugin('multiply') as (a: number, b: number) => number
export const welcome = importFromPlugin('welcome') as (name: string) => string
