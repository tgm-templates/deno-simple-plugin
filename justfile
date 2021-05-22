# build with debug mode
build:
  cargo build

release:
  cargo build --release

demo: build
  deno run --unstable --allow-plugin demo.ts
