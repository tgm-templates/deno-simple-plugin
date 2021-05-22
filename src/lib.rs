use std::borrow::Cow;
use std::cell::RefCell;
use std::rc::Rc;

use deno_core::error::bad_resource_id;
use deno_core::error::AnyError;
use deno_core::op_async;
use deno_core::op_sync;
use deno_core::Extension;
use deno_core::OpState;
use deno_core::Resource;
use deno_core::ResourceId;
use deno_core::ZeroCopyBuf;
use serde::Deserialize;

#[no_mangle]
pub fn init() -> Extension {
    Extension::builder()
        .ops(vec![
            ("op_multiply_sync", op_sync(op_multiply_sync)),
        ])
        .build()
}


#[derive(Debug, Deserialize)]
struct SumArgs {
    a: f32,
    b: f32,
}

fn op_multiply_sync(
    _state: &mut OpState,
    args: SumArgs,
    zero_copy: Option<ZeroCopyBuf>,
) -> Result<f32, AnyError> {
    println!("Hello from sync plugin op.");

    println!("args: {:?}", args);

    Ok(args.a + args.b)
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_multiply() {}
}
