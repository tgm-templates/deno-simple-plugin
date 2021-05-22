const pluginName = "@pluginName@";

function loadPlugin(pluginName: string) {
    let filenameSuffix = ".so";
    let filenamePrefix = "lib";

    if (Deno.build.os === "windows") {
        filenameSuffix = ".dll";
        filenamePrefix = "";
    }
    if (Deno.build.os === "darwin") {
        filenameSuffix = ".dylib";
    }
    const filename = `./target/release/${filenamePrefix}${pluginName}${filenameSuffix}`;
    const pluginRid = Deno.openPlugin(filename);
    console.log(`Plugin rid: ${pluginRid}`);
}

loadPlugin(pluginName);

// @ts-ignore
const core = Deno.core;

export function multiply(a: number, b: number): number {
    const result = core.opSync(
        "op_multiply_sync",
        {a, b}
    );
    return result as number;
}
