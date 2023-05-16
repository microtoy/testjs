(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    8312: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(1086)
        }
        ])
    },
    6619: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        let wasm;
        module = __webpack_require__.hmd(module);
        let lAudioContext = "undefined" != typeof AudioContext ? AudioContext : "undefined" != typeof webkitAudioContext ? webkitAudioContext : void 0
          , heap = Array(128).fill(void 0);
        function getObject(e) {
            return heap[e]
        }
        heap.push(void 0, null, !0, !1);
        let heap_next = heap.length;
        function dropObject(e) {
            e < 132 || (heap[e] = heap_next,
            heap_next = e)
        }
        function takeObject(e) {
            let t = getObject(e);
            return dropObject(e),
            t
        }
        let cachedTextDecoder = new TextDecoder("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        });
        cachedTextDecoder.decode();
        let cachedUint8Memory0 = null;
        function getUint8Memory0() {
            return (null === cachedUint8Memory0 || 0 === cachedUint8Memory0.byteLength) && (cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer)),
            cachedUint8Memory0
        }
        function getStringFromWasm0(e, t) {
            return cachedTextDecoder.decode(getUint8Memory0().subarray(e, e + t))
        }
        function addHeapObject(e) {
            heap_next === heap.length && heap.push(heap.length + 1);
            let t = heap_next;
            return heap_next = heap[t],
            heap[t] = e,
            t
        }
        function isLikeNone(e) {
            return null == e
        }
        let cachedFloat64Memory0 = null;
        function getFloat64Memory0() {
            return (null === cachedFloat64Memory0 || 0 === cachedFloat64Memory0.byteLength) && (cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer)),
            cachedFloat64Memory0
        }
        let cachedInt32Memory0 = null;
        function getInt32Memory0() {
            return (null === cachedInt32Memory0 || 0 === cachedInt32Memory0.byteLength) && (cachedInt32Memory0 = new Int32Array(wasm.memory.buffer)),
            cachedInt32Memory0
        }
        let WASM_VECTOR_LEN = 0
          , cachedTextEncoder = new TextEncoder("utf-8")
          , encodeString = "function" == typeof cachedTextEncoder.encodeInto ? function(e, t) {
            return cachedTextEncoder.encodeInto(e, t)
        }
        : function(e, t) {
            let n = cachedTextEncoder.encode(e);
            return t.set(n),
            {
                read: e.length,
                written: n.length
            }
        }
        ;
        function passStringToWasm0(e, t, n) {
            if (void 0 === n) {
                let n = cachedTextEncoder.encode(e)
                  , r = t(n.length);
                return getUint8Memory0().subarray(r, r + n.length).set(n),
                WASM_VECTOR_LEN = n.length,
                r
            }
            let r = e.length
              , a = t(r)
              , i = getUint8Memory0()
              , o = 0;
            for (; o < r; o++) {
                let t = e.charCodeAt(o);
                if (t > 127)
                    break;
                i[a + o] = t
            }
            if (o !== r) {
                0 !== o && (e = e.slice(o)),
                a = n(a, r, r = o + 3 * e.length);
                let t = getUint8Memory0().subarray(a + o, a + r)
                  , i = encodeString(e, t);
                o += i.written
            }
            return WASM_VECTOR_LEN = o,
            a
        }
        function debugString(e) {
            let t;
            let n = typeof e;
            if ("number" == n || "boolean" == n || null == e)
                return "".concat(e);
            if ("string" == n)
                return '"'.concat(e, '"');
            if ("symbol" == n) {
                let t = e.description;
                return null == t ? "Symbol" : "Symbol(".concat(t, ")")
            }
            if ("function" == n) {
                let t = e.name;
                return "string" == typeof t && t.length > 0 ? "Function(".concat(t, ")") : "Function"
            }
            if (Array.isArray(e)) {
                let t = e.length
                  , n = "[";
                t > 0 && (n += debugString(e[0]));
                for (let r = 1; r < t; r++)
                    n += ", " + debugString(e[r]);
                return n + "]"
            }
            let r = /\[object ([^\]]+)\]/.exec(toString.call(e));
            if (!(r.length > 1))
                return toString.call(e);
            if ("Object" == (t = r[1]))
                try {
                    return "Object(" + JSON.stringify(e) + ")"
                } catch (e) {
                    return "Object"
                }
            return e instanceof Error ? "".concat(e.name, ": ").concat(e.message, "\n").concat(e.stack) : t
        }
        function makeMutClosure(e, t, n, r) {
            let a = {
                a: e,
                b: t,
                cnt: 1,
                dtor: n
            }
              , i = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                a.cnt++;
                let i = a.a;
                a.a = 0;
                try {
                    return r(i, a.b, ...t)
                } finally {
                    0 == --a.cnt ? wasm.__wbindgen_export_2.get(a.dtor)(i, a.b) : a.a = i
                }
            };
            return i.original = a,
            i
        }
        function __wbg_adapter_34(e, t, n) {
            wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h294877d994ae5be8(e, t, addHeapObject(n))
        }
        function __wbg_adapter_45(e, t) {
            wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h83c645191a6f9d8a(e, t)
        }
        function __wbg_adapter_54(e, t) {
            wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc853a2ae00c43b9a(e, t)
        }
        function __wbg_adapter_57(e, t, n) {
            wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2cc8cd7c6fb61db8(e, t, addHeapObject(n))
        }
        function notDefined(e) {
            return ()=>{
                throw Error("".concat(e, " is not defined"))
            }
        }
        function handleError(e, t) {
            try {
                return e.apply(this, t)
            } catch (e) {
                wasm.__wbindgen_exn_store(addHeapObject(e))
            }
        }
        function getArrayU8FromWasm0(e, t) {
            return getUint8Memory0().subarray(e / 1, e / 1 + t)
        }
        let cachedFloat32Memory0 = null;
        function getFloat32Memory0() {
            return (null === cachedFloat32Memory0 || 0 === cachedFloat32Memory0.byteLength) && (cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer)),
            cachedFloat32Memory0
        }
        function getArrayF32FromWasm0(e, t) {
            return getFloat32Memory0().subarray(e / 4, e / 4 + t)
        }
        function getArrayI32FromWasm0(e, t) {
            return getInt32Memory0().subarray(e / 4, e / 4 + t)
        }
        let cachedUint32Memory0 = null;
        function getUint32Memory0() {
            return (null === cachedUint32Memory0 || 0 === cachedUint32Memory0.byteLength) && (cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer)),
            cachedUint32Memory0
        }
        function getArrayU32FromWasm0(e, t) {
            return getUint32Memory0().subarray(e / 4, e / 4 + t)
        }
        async function load(e, t) {
            if ("function" == typeof Response && e instanceof Response) {
                if ("function" == typeof WebAssembly.instantiateStreaming)
                    try {
                        return await WebAssembly.instantiateStreaming(e, t)
                    } catch (t) {
                        if ("application/wasm" != e.headers.get("Content-Type"))
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
                        else
                            throw t
                    }
                let n = await e.arrayBuffer();
                return await WebAssembly.instantiate(n, t)
            }
            {
                let n = await WebAssembly.instantiate(e, t);
                return n instanceof WebAssembly.Instance ? {
                    instance: n,
                    module: e
                } : n
            }
        }
        function getImports(post_death_stats, post_start_playing) {
            let imports = {};
            return imports.wbg = {},
            imports.wbg.__wbg_poststartplaying_50fd7a9ab997c51f = post_start_playing,
            imports.wbg.__wbg_postdeathstats_ee94906ed5a7c158 = function(e, t, n) {
                try {
                    post_death_stats(e, getStringFromWasm0(t, n))
                } finally {
                    wasm.__wbindgen_free(t, n)
                }
            }
            ,
            imports.wbg.__wbindgen_object_drop_ref = function(e) {
                takeObject(e)
            }
            ,
            imports.wbg.__wbindgen_string_new = function(e, t) {
                let n = getStringFromWasm0(e, t);
                return addHeapObject(n)
            }
            ,
            imports.wbg.__wbindgen_object_clone_ref = function(e) {
                let t = getObject(e);
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbindgen_cb_drop = function(e) {
                let t = takeObject(e).original;
                if (1 == t.cnt--)
                    return t.a = 0,
                    !0;
                let n = !1;
                return n
            }
            ,
            imports.wbg.__wbindgen_number_get = function(e, t) {
                let n = getObject(t)
                  , r = "number" == typeof n ? n : void 0;
                getFloat64Memory0()[e / 8 + 1] = isLikeNone(r) ? 0 : r,
                getInt32Memory0()[e / 4 + 0] = !isLikeNone(r)
            }
            ,
            imports.wbg.__wbindgen_is_null = function(e) {
                let t = null === getObject(e);
                return t
            }
            ,
            imports.wbg.__wbindgen_boolean_get = function(e) {
                let t = getObject(e)
                  , n = "boolean" == typeof t ? t ? 1 : 0 : 2;
                return n
            }
            ,
            imports.wbg.__wbindgen_string_get = function(e, t) {
                let n = getObject(t)
                  , r = "string" == typeof n ? n : void 0;
                var a = isLikeNone(r) ? 0 : passStringToWasm0(r, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , i = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = i,
                getInt32Memory0()[e / 4 + 0] = a
            }
            ,
            imports.wbg.__wbindgen_number_new = function(e) {
                let t = e;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_log_c9486ca5d8e2cbe8 = function(e, t) {
                try {
                    console.log(getStringFromWasm0(e, t))
                } finally {
                    wasm.__wbindgen_free(e, t)
                }
            }
            ,
            imports.wbg.__wbg_log_aba5996d9bde071f = function(e, t, n, r, a, i, o, _) {
                try {
                    console.log(getStringFromWasm0(e, t), getStringFromWasm0(n, r), getStringFromWasm0(a, i), getStringFromWasm0(o, _))
                } finally {
                    wasm.__wbindgen_free(e, t)
                }
            }
            ,
            imports.wbg.__wbg_mark_40e050a77cc39fea = function(e, t) {
                performance.mark(getStringFromWasm0(e, t))
            }
            ,
            imports.wbg.__wbg_measure_aa7a73f17813f708 = function() {
                return handleError(function(e, t, n, r) {
                    try {
                        performance.measure(getStringFromWasm0(e, t), getStringFromWasm0(n, r))
                    } finally {
                        wasm.__wbindgen_free(e, t),
                        wasm.__wbindgen_free(n, r)
                    }
                }, arguments)
            }
            ,
            imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
                let e = Error();
                return addHeapObject(e)
            }
            ,
            imports.wbg.__wbg_stack_658279fe44541cf6 = function(e, t) {
                let n = getObject(t).stack
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbg_error_f851667af71bcfc6 = function(e, t) {
                try {
                    console.error(getStringFromWasm0(e, t))
                } finally {
                    wasm.__wbindgen_free(e, t)
                }
            }
            ,
            imports.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function(e) {
                let t = getObject(e).crypto;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbindgen_is_object = function(e) {
                let t = getObject(e)
                  , n = "object" == typeof t && null !== t;
                return n
            }
            ,
            imports.wbg.__wbg_process_038c26bf42b093f8 = function(e) {
                let t = getObject(e).process;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_versions_ab37218d2f0b24a8 = function(e) {
                let t = getObject(e).versions;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_node_080f4b19d15bc1fe = function(e) {
                let t = getObject(e).node;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbindgen_is_string = function(e) {
                let t = "string" == typeof getObject(e);
                return t
            }
            ,
            imports.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function(e) {
                let t = getObject(e).msCrypto;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_require_78a3dcfbdba9cbce = function() {
                return handleError(function() {
                    let e = module.require;
                    return addHeapObject(e)
                }, arguments)
            }
            ,
            imports.wbg.__wbindgen_is_function = function(e) {
                let t = "function" == typeof getObject(e);
                return t
            }
            ,
            imports.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function() {
                return handleError(function(e, t) {
                    getObject(e).getRandomValues(getObject(t))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_randomFillSync_6894564c2c334c42 = function() {
                return handleError(function(e, t, n) {
                    getObject(e).randomFillSync(getArrayU8FromWasm0(t, n))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7 = function(e) {
                let t;
                try {
                    t = getObject(e)instanceof WebGL2RenderingContext
                } catch (e) {
                    t = !1
                }
                let n = t;
                return n
            }
            ,
            imports.wbg.__wbg_beginQuery_fb152d8d84f2b130 = function(e, t, n) {
                getObject(e).beginQuery(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindBufferRange_f2c529259df5358e = function(e, t, n, r, a, i) {
                getObject(e).bindBufferRange(t >>> 0, n >>> 0, getObject(r), a, i)
            }
            ,
            imports.wbg.__wbg_bindSampler_6eb88b542e5a410f = function(e, t, n) {
                getObject(e).bindSampler(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindVertexArray_8b71290041cb6746 = function(e, t) {
                getObject(e).bindVertexArray(getObject(t))
            }
            ,
            imports.wbg.__wbg_blitFramebuffer_86eee8a5763ded5e = function(e, t, n, r, a, i, o, _, c, s, l) {
                getObject(e).blitFramebuffer(t, n, r, a, i, o, _, c, s >>> 0, l >>> 0)
            }
            ,
            imports.wbg.__wbg_bufferData_573e61c49a480c4d = function(e, t, n, r) {
                getObject(e).bufferData(t >>> 0, n, r >>> 0)
            }
            ,
            imports.wbg.__wbg_bufferData_16f948547d74c866 = function(e, t, n, r) {
                getObject(e).bufferData(t >>> 0, getObject(n), r >>> 0)
            }
            ,
            imports.wbg.__wbg_bufferSubData_c7180c0b681078e8 = function(e, t, n, r) {
                getObject(e).bufferSubData(t >>> 0, n, getObject(r))
            }
            ,
            imports.wbg.__wbg_clearBufferfi_95daf829c568e58a = function(e, t, n, r, a) {
                getObject(e).clearBufferfi(t >>> 0, n, r, a)
            }
            ,
            imports.wbg.__wbg_clearBufferfv_b3c90fbed3b74920 = function(e, t, n, r, a) {
                getObject(e).clearBufferfv(t >>> 0, n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_clearBufferiv_fe2a00a8f8fb7322 = function(e, t, n, r, a) {
                getObject(e).clearBufferiv(t >>> 0, n, getArrayI32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_clearBufferuiv_a41730a8d84c6ac6 = function(e, t, n, r, a) {
                getObject(e).clearBufferuiv(t >>> 0, n, getArrayU32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_clientWaitSync_ae8f3712f85a57fb = function(e, t, n, r) {
                let a = getObject(e).clientWaitSync(getObject(t), n >>> 0, r >>> 0);
                return a
            }
            ,
            imports.wbg.__wbg_compressedTexSubImage2D_23b602b828848fb7 = function(e, t, n, r, a, i, o, _, c, s) {
                getObject(e).compressedTexSubImage2D(t >>> 0, n, r, a, i, o, _ >>> 0, c, s)
            }
            ,
            imports.wbg.__wbg_compressedTexSubImage2D_d6c95fc640a9f4de = function(e, t, n, r, a, i, o, _, c) {
                getObject(e).compressedTexSubImage2D(t >>> 0, n, r, a, i, o, _ >>> 0, getObject(c))
            }
            ,
            imports.wbg.__wbg_compressedTexSubImage3D_00b794917e65d559 = function(e, t, n, r, a, i, o, _, c, s, l, b) {
                getObject(e).compressedTexSubImage3D(t >>> 0, n, r, a, i, o, _, c, s >>> 0, l, b)
            }
            ,
            imports.wbg.__wbg_compressedTexSubImage3D_c9c7b42e0f7db586 = function(e, t, n, r, a, i, o, _, c, s, l) {
                getObject(e).compressedTexSubImage3D(t >>> 0, n, r, a, i, o, _, c, s >>> 0, getObject(l))
            }
            ,
            imports.wbg.__wbg_copyBufferSubData_c903618a0e0a9fca = function(e, t, n, r, a, i) {
                getObject(e).copyBufferSubData(t >>> 0, n >>> 0, r, a, i)
            }
            ,
            imports.wbg.__wbg_copyTexSubImage3D_88fc9e1c56d3e7db = function(e, t, n, r, a, i, o, _, c, s) {
                getObject(e).copyTexSubImage3D(t >>> 0, n, r, a, i, o, _, c, s)
            }
            ,
            imports.wbg.__wbg_createSampler_d1255ae3836b1bee = function(e) {
                let t = getObject(e).createSampler();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createVertexArray_de7292bbd7ea02dd = function(e) {
                let t = getObject(e).createVertexArray();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_deleteQuery_0981fb4d492e46a7 = function(e, t) {
                getObject(e).deleteQuery(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteSampler_6d832d1900eafbea = function(e, t) {
                getObject(e).deleteSampler(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteSync_f8f026807b7eee54 = function(e, t) {
                getObject(e).deleteSync(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteVertexArray_dc4f1b2e5ac93f24 = function(e, t) {
                getObject(e).deleteVertexArray(getObject(t))
            }
            ,
            imports.wbg.__wbg_drawArraysInstanced_1222b6236d008088 = function(e, t, n, r, a) {
                getObject(e).drawArraysInstanced(t >>> 0, n, r, a)
            }
            ,
            imports.wbg.__wbg_drawBuffers_3223f0aeb44f7057 = function(e, t) {
                getObject(e).drawBuffers(getObject(t))
            }
            ,
            imports.wbg.__wbg_drawElementsInstanced_b4714f8dd90fd2a8 = function(e, t, n, r, a, i) {
                getObject(e).drawElementsInstanced(t >>> 0, n, r >>> 0, a, i)
            }
            ,
            imports.wbg.__wbg_endQuery_726967da9d5d1ca7 = function(e, t) {
                getObject(e).endQuery(t >>> 0)
            }
            ,
            imports.wbg.__wbg_fenceSync_fb3e1185847ee462 = function(e, t, n) {
                let r = getObject(e).fenceSync(t >>> 0, n >>> 0);
                return isLikeNone(r) ? 0 : addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_framebufferTextureLayer_e644333b8ec36f9d = function(e, t, n, r, a, i) {
                getObject(e).framebufferTextureLayer(t >>> 0, n >>> 0, getObject(r), a, i)
            }
            ,
            imports.wbg.__wbg_getBufferSubData_cd8138c86821bca3 = function(e, t, n, r) {
                getObject(e).getBufferSubData(t >>> 0, n, getObject(r))
            }
            ,
            imports.wbg.__wbg_getIndexedParameter_5f5c79f6c05edd18 = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).getIndexedParameter(t >>> 0, n >>> 0);
                    return addHeapObject(r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_getQueryParameter_e0f43fb85f793bbe = function(e, t, n) {
                let r = getObject(e).getQueryParameter(getObject(t), n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getSyncParameter_b2f55318719e958c = function(e, t, n) {
                let r = getObject(e).getSyncParameter(getObject(t), n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getUniformBlockIndex_a05b0c144aa49817 = function(e, t, n, r) {
                let a = getObject(e).getUniformBlockIndex(getObject(t), getStringFromWasm0(n, r));
                return a
            }
            ,
            imports.wbg.__wbg_invalidateFramebuffer_696c3c456c34a207 = function() {
                return handleError(function(e, t, n) {
                    getObject(e).invalidateFramebuffer(t >>> 0, getObject(n))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_readBuffer_bade27c1171e00cf = function(e, t) {
                getObject(e).readBuffer(t >>> 0)
            }
            ,
            imports.wbg.__wbg_readPixels_493558abd28a3b61 = function() {
                return handleError(function(e, t, n, r, a, i, o, _) {
                    getObject(e).readPixels(t, n, r, a, i >>> 0, o >>> 0, getObject(_))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_readPixels_92102ee9fe1c81a0 = function() {
                return handleError(function(e, t, n, r, a, i, o, _) {
                    getObject(e).readPixels(t, n, r, a, i >>> 0, o >>> 0, _)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_renderbufferStorageMultisample_9cb173d2fd461513 = function(e, t, n, r, a, i) {
                getObject(e).renderbufferStorageMultisample(t >>> 0, n, r >>> 0, a, i)
            }
            ,
            imports.wbg.__wbg_samplerParameterf_38ca759dc5c40461 = function(e, t, n, r) {
                getObject(e).samplerParameterf(getObject(t), n >>> 0, r)
            }
            ,
            imports.wbg.__wbg_samplerParameteri_c631c02ceefc6dc1 = function(e, t, n, r) {
                getObject(e).samplerParameteri(getObject(t), n >>> 0, r)
            }
            ,
            imports.wbg.__wbg_texStorage2D_89c29252632da923 = function(e, t, n, r, a, i) {
                getObject(e).texStorage2D(t >>> 0, n, r >>> 0, a, i)
            }
            ,
            imports.wbg.__wbg_texStorage3D_3897fb6b91eb82d8 = function(e, t, n, r, a, i, o) {
                getObject(e).texStorage3D(t >>> 0, n, r >>> 0, a, i, o)
            }
            ,
            imports.wbg.__wbg_texSubImage2D_6a8b0f3381d734c3 = function() {
                return handleError(function(e, t, n, r, a, i, o, _, c, s) {
                    getObject(e).texSubImage2D(t >>> 0, n, r, a, i, o, _ >>> 0, c >>> 0, getObject(s))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_texSubImage2D_53b6a050a0b9b24e = function() {
                return handleError(function(e, t, n, r, a, i, o, _, c, s) {
                    getObject(e).texSubImage2D(t >>> 0, n, r, a, i, o, _ >>> 0, c >>> 0, s)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_texSubImage3D_84ef903e11598af0 = function() {
                return handleError(function(e, t, n, r, a, i, o, _, c, s, l, b) {
                    getObject(e).texSubImage3D(t >>> 0, n, r, a, i, o, _, c, s >>> 0, l >>> 0, b)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_texSubImage3D_1d82135e9ce965bf = function() {
                return handleError(function(e, t, n, r, a, i, o, _, c, s, l, b) {
                    getObject(e).texSubImage3D(t >>> 0, n, r, a, i, o, _, c, s >>> 0, l >>> 0, getObject(b))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_uniform2fv_ffd0b1d3c3a4070a = function(e, t, n, r) {
                getObject(e).uniform2fv(getObject(t), getArrayF32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform2iv_32329f9a4d491136 = function(e, t, n, r) {
                getObject(e).uniform2iv(getObject(t), getArrayI32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform3fv_bc831e48acb2c057 = function(e, t, n, r) {
                getObject(e).uniform3fv(getObject(t), getArrayF32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform3iv_100a284f5a3cbca5 = function(e, t, n, r) {
                getObject(e).uniform3iv(getObject(t), getArrayI32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform4fv_26d822da5c3fdb00 = function(e, t, n, r) {
                getObject(e).uniform4fv(getObject(t), getArrayF32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform4iv_7f03c41e6e49bbd6 = function(e, t, n, r) {
                getObject(e).uniform4iv(getObject(t), getArrayI32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniformBlockBinding_1971f4528d9c3043 = function(e, t, n, r) {
                getObject(e).uniformBlockBinding(getObject(t), n >>> 0, r >>> 0)
            }
            ,
            imports.wbg.__wbg_uniformMatrix2fv_5f1f56c7cbfb533f = function(e, t, n, r, a) {
                getObject(e).uniformMatrix2fv(getObject(t), 0 !== n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_uniformMatrix3fv_ae9271db8127a57b = function(e, t, n, r, a) {
                getObject(e).uniformMatrix3fv(getObject(t), 0 !== n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_uniformMatrix4fv_0f42d678a568ded9 = function(e, t, n, r, a) {
                getObject(e).uniformMatrix4fv(getObject(t), 0 !== n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_vertexAttribDivisor_77f020121066a4d9 = function(e, t, n) {
                getObject(e).vertexAttribDivisor(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_vertexAttribIPointer_b15ad1437a268cf5 = function(e, t, n, r, a, i) {
                getObject(e).vertexAttribIPointer(t >>> 0, n, r >>> 0, a, i)
            }
            ,
            imports.wbg.__wbg_activeTexture_0daf7c1698e49f00 = function(e, t) {
                getObject(e).activeTexture(t >>> 0)
            }
            ,
            imports.wbg.__wbg_attachShader_3038234860d2d59d = function(e, t, n) {
                getObject(e).attachShader(getObject(t), getObject(n))
            }
            ,
            imports.wbg.__wbg_bindBuffer_9cb064991696b79f = function(e, t, n) {
                getObject(e).bindBuffer(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindFramebuffer_0522db2a250c29f0 = function(e, t, n) {
                getObject(e).bindFramebuffer(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindRenderbuffer_1e4928d9bf839c02 = function(e, t, n) {
                getObject(e).bindRenderbuffer(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindTexture_0c284b1604ba527c = function(e, t, n) {
                getObject(e).bindTexture(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_blendColor_a17ddceb3534e0b3 = function(e, t, n, r, a) {
                getObject(e).blendColor(t, n, r, a)
            }
            ,
            imports.wbg.__wbg_blendEquation_b5d5be767bd3835a = function(e, t) {
                getObject(e).blendEquation(t >>> 0)
            }
            ,
            imports.wbg.__wbg_blendEquationSeparate_d2fa3b718ee3579f = function(e, t, n) {
                getObject(e).blendEquationSeparate(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_blendFunc_d456b0c766f8dbc9 = function(e, t, n) {
                getObject(e).blendFunc(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_blendFuncSeparate_9a7146974b3cd76d = function(e, t, n, r, a) {
                getObject(e).blendFuncSeparate(t >>> 0, n >>> 0, r >>> 0, a >>> 0)
            }
            ,
            imports.wbg.__wbg_colorMask_a7f067283ed312c9 = function(e, t, n, r, a) {
                getObject(e).colorMask(0 !== t, 0 !== n, 0 !== r, 0 !== a)
            }
            ,
            imports.wbg.__wbg_compileShader_af777dd3b15798b3 = function(e, t) {
                getObject(e).compileShader(getObject(t))
            }
            ,
            imports.wbg.__wbg_copyTexSubImage2D_47b14ff8459fd4c8 = function(e, t, n, r, a, i, o, _, c) {
                getObject(e).copyTexSubImage2D(t >>> 0, n, r, a, i, o, _, c)
            }
            ,
            imports.wbg.__wbg_createBuffer_5ed0554ab35780b5 = function(e) {
                let t = getObject(e).createBuffer();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createFramebuffer_86883935c13ddd59 = function(e) {
                let t = getObject(e).createFramebuffer();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createProgram_7d25c1dd3bb0ce39 = function(e) {
                let t = getObject(e).createProgram();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createRenderbuffer_b392324e044d389a = function(e) {
                let t = getObject(e).createRenderbuffer();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createShader_96339db58713e350 = function(e, t) {
                let n = getObject(e).createShader(t >>> 0);
                return isLikeNone(n) ? 0 : addHeapObject(n)
            }
            ,
            imports.wbg.__wbg_createTexture_c651f9e28d1ce9d2 = function(e) {
                let t = getObject(e).createTexture();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_cullFace_79e4ddbea13278b3 = function(e, t) {
                getObject(e).cullFace(t >>> 0)
            }
            ,
            imports.wbg.__wbg_deleteBuffer_cf67a696a7857b3f = function(e, t) {
                getObject(e).deleteBuffer(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteFramebuffer_f9c2bceeb5422d9d = function(e, t) {
                getObject(e).deleteFramebuffer(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteProgram_9c8fa1ef341cb01d = function(e, t) {
                getObject(e).deleteProgram(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteRenderbuffer_cad502ac8d1398f2 = function(e, t) {
                getObject(e).deleteRenderbuffer(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteShader_f48f72524f5ee3ed = function(e, t) {
                getObject(e).deleteShader(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteTexture_1b5f5e536e0d5545 = function(e, t) {
                getObject(e).deleteTexture(getObject(t))
            }
            ,
            imports.wbg.__wbg_depthFunc_2060ec3687ac1f95 = function(e, t) {
                getObject(e).depthFunc(t >>> 0)
            }
            ,
            imports.wbg.__wbg_depthMask_27d367443a80541d = function(e, t) {
                getObject(e).depthMask(0 !== t)
            }
            ,
            imports.wbg.__wbg_depthRange_7109c2393819a37b = function(e, t, n) {
                getObject(e).depthRange(t, n)
            }
            ,
            imports.wbg.__wbg_disable_3adb8645ea1d92d4 = function(e, t) {
                getObject(e).disable(t >>> 0)
            }
            ,
            imports.wbg.__wbg_disableVertexAttribArray_f469283fda607cee = function(e, t) {
                getObject(e).disableVertexAttribArray(t >>> 0)
            }
            ,
            imports.wbg.__wbg_drawArrays_84de8a2416396807 = function(e, t, n, r) {
                getObject(e).drawArrays(t >>> 0, n, r)
            }
            ,
            imports.wbg.__wbg_drawElements_dcb8df9c52e2bbd5 = function(e, t, n, r, a) {
                getObject(e).drawElements(t >>> 0, n, r >>> 0, a)
            }
            ,
            imports.wbg.__wbg_enable_1ac9f14a577b7c8b = function(e, t) {
                getObject(e).enable(t >>> 0)
            }
            ,
            imports.wbg.__wbg_enableVertexAttribArray_53139716d9c95dba = function(e, t) {
                getObject(e).enableVertexAttribArray(t >>> 0)
            }
            ,
            imports.wbg.__wbg_framebufferRenderbuffer_77bdb2f359a5728f = function(e, t, n, r, a) {
                getObject(e).framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, getObject(a))
            }
            ,
            imports.wbg.__wbg_framebufferTexture2D_885176f16a153fec = function(e, t, n, r, a, i) {
                getObject(e).framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, getObject(a), i)
            }
            ,
            imports.wbg.__wbg_frontFace_3d7784c56ffede8a = function(e, t) {
                getObject(e).frontFace(t >>> 0)
            }
            ,
            imports.wbg.__wbg_getActiveUniform_9c4ac7c1ccf5f894 = function(e, t, n) {
                let r = getObject(e).getActiveUniform(getObject(t), n >>> 0);
                return isLikeNone(r) ? 0 : addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getExtension_f0070583175271d4 = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).getExtension(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_getParameter_56d47f9b55e463d4 = function() {
                return handleError(function(e, t) {
                    let n = getObject(e).getParameter(t >>> 0);
                    return addHeapObject(n)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_getProgramInfoLog_7654794297967ac0 = function(e, t, n) {
                let r = getObject(t).getProgramInfoLog(getObject(n));
                var a = isLikeNone(r) ? 0 : passStringToWasm0(r, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , i = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = i,
                getInt32Memory0()[e / 4 + 0] = a
            }
            ,
            imports.wbg.__wbg_getProgramParameter_5b1a40917aa850f8 = function(e, t, n) {
                let r = getObject(e).getProgramParameter(getObject(t), n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getShaderInfoLog_915d0e8506c11159 = function(e, t, n) {
                let r = getObject(t).getShaderInfoLog(getObject(n));
                var a = isLikeNone(r) ? 0 : passStringToWasm0(r, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , i = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = i,
                getInt32Memory0()[e / 4 + 0] = a
            }
            ,
            imports.wbg.__wbg_getShaderParameter_f9240892c9e7a0a3 = function(e, t, n) {
                let r = getObject(e).getShaderParameter(getObject(t), n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getSupportedExtensions_7af8f7bbdd4d7b2c = function(e) {
                let t = getObject(e).getSupportedExtensions();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_getUniformLocation_c6caabb349b43da7 = function(e, t, n, r) {
                let a = getObject(e).getUniformLocation(getObject(t), getStringFromWasm0(n, r));
                return isLikeNone(a) ? 0 : addHeapObject(a)
            }
            ,
            imports.wbg.__wbg_linkProgram_2d5cc584654696b8 = function(e, t) {
                getObject(e).linkProgram(getObject(t))
            }
            ,
            imports.wbg.__wbg_pixelStorei_a0b83efc92cd29fe = function(e, t, n) {
                getObject(e).pixelStorei(t >>> 0, n)
            }
            ,
            imports.wbg.__wbg_polygonOffset_03d3955d5a1afa08 = function(e, t, n) {
                getObject(e).polygonOffset(t, n)
            }
            ,
            imports.wbg.__wbg_renderbufferStorage_2192d9cd09128339 = function(e, t, n, r, a) {
                getObject(e).renderbufferStorage(t >>> 0, n >>> 0, r, a)
            }
            ,
            imports.wbg.__wbg_scissor_2b084e0dc81d67f4 = function(e, t, n, r, a) {
                getObject(e).scissor(t, n, r, a)
            }
            ,
            imports.wbg.__wbg_shaderSource_57883245cdfb0dca = function(e, t, n, r) {
                getObject(e).shaderSource(getObject(t), getStringFromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_stencilFuncSeparate_3be68afd7ca6efcc = function(e, t, n, r, a) {
                getObject(e).stencilFuncSeparate(t >>> 0, n >>> 0, r, a >>> 0)
            }
            ,
            imports.wbg.__wbg_stencilMask_144b86d15d9fdbe6 = function(e, t) {
                getObject(e).stencilMask(t >>> 0)
            }
            ,
            imports.wbg.__wbg_stencilMaskSeparate_84a2494b967772c7 = function(e, t, n) {
                getObject(e).stencilMaskSeparate(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_stencilOpSeparate_1708aea1aea0dc48 = function(e, t, n, r, a) {
                getObject(e).stencilOpSeparate(t >>> 0, n >>> 0, r >>> 0, a >>> 0)
            }
            ,
            imports.wbg.__wbg_texParameteri_e0ce3810261e0864 = function(e, t, n, r) {
                getObject(e).texParameteri(t >>> 0, n >>> 0, r)
            }
            ,
            imports.wbg.__wbg_uniform1f_dcc6951bde745417 = function(e, t, n) {
                getObject(e).uniform1f(getObject(t), n)
            }
            ,
            imports.wbg.__wbg_uniform1i_4fdc6d6740375d22 = function(e, t, n) {
                getObject(e).uniform1i(getObject(t), n)
            }
            ,
            imports.wbg.__wbg_uniform4f_19b349303edb7836 = function(e, t, n, r, a, i) {
                getObject(e).uniform4f(getObject(t), n, r, a, i)
            }
            ,
            imports.wbg.__wbg_useProgram_2f4094faf45ecba1 = function(e, t) {
                getObject(e).useProgram(getObject(t))
            }
            ,
            imports.wbg.__wbg_vertexAttribPointer_ad370785358334f4 = function(e, t, n, r, a, i, o) {
                getObject(e).vertexAttribPointer(t >>> 0, n, r >>> 0, 0 !== a, i, o)
            }
            ,
            imports.wbg.__wbg_viewport_cc41e28a71c23915 = function(e, t, n, r, a) {
                getObject(e).viewport(t, n, r, a)
            }
            ,
            imports.wbg.__wbg_instanceof_Window_e266f02eee43b570 = function(e) {
                let t;
                try {
                    t = getObject(e)instanceof Window
                } catch (e) {
                    t = !1
                }
                let n = t;
                return n
            }
            ,
            imports.wbg.__wbg_document_950215a728589a2d = function(e) {
                let t = getObject(e).document;
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_navigator_b18e629f7f0b75fa = function(e) {
                let t = getObject(e).navigator;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_innerWidth_7e9d12e05bcb598e = function() {
                return handleError(function(e) {
                    let t = getObject(e).innerWidth;
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_innerHeight_3ef25a30618357e0 = function() {
                return handleError(function(e) {
                    let t = getObject(e).innerHeight;
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_devicePixelRatio_5f8f5cab76864090 = function(e) {
                let t = getObject(e).devicePixelRatio;
                return t
            }
            ,
            imports.wbg.__wbg_isSecureContext_c3e5510caacaa0ce = function(e) {
                let t = getObject(e).isSecureContext;
                return t
            }
            ,
            imports.wbg.__wbg_cancelAnimationFrame_d079cdb83bc43b26 = function() {
                return handleError(function(e, t) {
                    getObject(e).cancelAnimationFrame(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_matchMedia_967e50e4289050fa = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).matchMedia(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_requestAnimationFrame_afe426b568f84138 = function() {
                return handleError(function(e, t) {
                    let n = getObject(e).requestAnimationFrame(getObject(t));
                    return n
                }, arguments)
            }
            ,
            imports.wbg.__wbg_get_e6ae480a4b8df368 = function(e, t, n) {
                let r = getObject(e)[getStringFromWasm0(t, n)];
                return isLikeNone(r) ? 0 : addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_clearTimeout_b2b8af0f044e02e9 = function(e, t) {
                getObject(e).clearTimeout(t)
            }
            ,
            imports.wbg.__wbg_fetch_e8596d8a939a0853 = function(e, t, n) {
                let r = getObject(e).fetch(getStringFromWasm0(t, n));
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_setTimeout_6609c9aa64f32bfc = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).setTimeout(getObject(t), n);
                    return r
                }, arguments)
            }
            ,
            imports.wbg.__wbg_setbuffer_bad384d1628a8306 = function(e, t) {
                getObject(e).buffer = getObject(t)
            }
            ,
            imports.wbg.__wbg_setonended_15b13187aec41ac9 = function(e, t) {
                getObject(e).onended = getObject(t)
            }
            ,
            imports.wbg.__wbg_start_9169e040a16354b9 = function() {
                return handleError(function(e, t) {
                    getObject(e).start(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_charCode_504e79c3e550d1bb = function(e) {
                let t = getObject(e).charCode;
                return t
            }
            ,
            imports.wbg.__wbg_keyCode_b33194be2ceec53b = function(e) {
                let t = getObject(e).keyCode;
                return t
            }
            ,
            imports.wbg.__wbg_altKey_dff2a075455ac01b = function(e) {
                let t = getObject(e).altKey;
                return t
            }
            ,
            imports.wbg.__wbg_ctrlKey_993b558f853d64ce = function(e) {
                let t = getObject(e).ctrlKey;
                return t
            }
            ,
            imports.wbg.__wbg_shiftKey_31e62e9d172b26f0 = function(e) {
                let t = getObject(e).shiftKey;
                return t
            }
            ,
            imports.wbg.__wbg_metaKey_9f0f19692d0498bd = function(e) {
                let t = getObject(e).metaKey;
                return t
            }
            ,
            imports.wbg.__wbg_key_f0decac219aa904b = function(e, t) {
                let n = getObject(t).key
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbg_code_aed21120de275a12 = function(e, t) {
                let n = getObject(t).code
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbg_getModifierState_03b72700dbe33ad6 = function(e, t, n) {
                let r = getObject(e).getModifierState(getStringFromWasm0(t, n));
                return r
            }
            ,
            imports.wbg.__wbg_connect_77f2f818a74097e1 = function() {
                return handleError(function(e, t) {
                    let n = getObject(e).connect(getObject(t));
                    return addHeapObject(n)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_addEventListener_615d4590d38da1c9 = function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).addEventListener(getStringFromWasm0(t, n), getObject(r))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_addEventListener_cf5b03cd29763277 = function() {
                return handleError(function(e, t, n, r, a) {
                    getObject(e).addEventListener(getStringFromWasm0(t, n), getObject(r), getObject(a))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_removeEventListener_86fd19ed073cd1ed = function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).removeEventListener(getStringFromWasm0(t, n), getObject(r))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_parentElement_0e8c9afce5cb9d6e = function(e) {
                let t = getObject(e).parentElement;
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_appendChild_b8199dc1655c852d = function() {
                return handleError(function(e, t) {
                    let n = getObject(e).appendChild(getObject(t));
                    return addHeapObject(n)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_target_b629c177f9bee3da = function(e) {
                let t = getObject(e).target;
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_cancelBubble_c9a8182589205d54 = function(e) {
                let t = getObject(e).cancelBubble;
                return t
            }
            ,
            imports.wbg.__wbg_preventDefault_16b2170b12f56317 = function(e) {
                getObject(e).preventDefault()
            }
            ,
            imports.wbg.__wbg_stopPropagation_7647c9985222f9b0 = function(e) {
                getObject(e).stopPropagation()
            }
            ,
            imports.wbg.__wbg_getGamepads_4c461e89e0e20e75 = function() {
                return handleError(function(e) {
                    let t = getObject(e).getGamepads();
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_id_291975ef0fb03ce5 = function(e, t) {
                let n = getObject(t).id
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbg_index_648379aa28ee0be3 = function(e) {
                let t = getObject(e).index;
                return t
            }
            ,
            imports.wbg.__wbg_mapping_6ef03dc7a02c4bef = function(e) {
                let t = getObject(e).mapping;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_connected_149a005d845e67e2 = function(e) {
                let t = getObject(e).connected;
                return t
            }
            ,
            imports.wbg.__wbg_buttons_e33d9bb4a83e0700 = function(e) {
                let t = getObject(e).buttons;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_axes_81f7594079c3e88c = function(e) {
                let t = getObject(e).axes;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_matches_7b5ad9e6bb56f1f3 = function(e) {
                let t = getObject(e).matches;
                return t
            }
            ,
            imports.wbg.__wbg_addListener_dfc3f9e430149b14 = function() {
                return handleError(function(e, t) {
                    getObject(e).addListener(getObject(t))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_removeListener_6f811d2fb59768b9 = function() {
                return handleError(function(e, t) {
                    getObject(e).removeListener(getObject(t))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_size_5ce324b99223d189 = function(e) {
                let t = getObject(e).size;
                return t
            }
            ,
            imports.wbg.__wbg_type_979610383a4b7c57 = function(e) {
                let t = getObject(e).type;
                return t
            }
            ,
            imports.wbg.__wbg_name_1e6651aff4fe7a88 = function(e, t) {
                let n = getObject(t).name
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbg_drawArraysInstancedANGLE_403faa11d52ccf6d = function(e, t, n, r, a) {
                getObject(e).drawArraysInstancedANGLE(t >>> 0, n, r, a)
            }
            ,
            imports.wbg.__wbg_drawElementsInstancedANGLE_0230afc27cf9cec9 = function(e, t, n, r, a, i) {
                getObject(e).drawElementsInstancedANGLE(t >>> 0, n, r >>> 0, a, i)
            }
            ,
            imports.wbg.__wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b = function(e, t, n) {
                getObject(e).vertexAttribDivisorANGLE(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_copyToChannel_9babe9bf308bffc3 = function() {
                return handleError(function(e, t, n, r) {
                    getObject(e).copyToChannel(getArrayF32FromWasm0(t, n), r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_setProperty_21e2e7868b86a93e = function() {
                return handleError(function(e, t, n, r, a) {
                    getObject(e).setProperty(getStringFromWasm0(t, n), getStringFromWasm0(r, a))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_x_0938e87a3ff14a2e = function(e) {
                let t = getObject(e).x;
                return t
            }
            ,
            imports.wbg.__wbg_y_b881176a43492948 = function(e) {
                let t = getObject(e).y;
                return t
            }
            ,
            imports.wbg.__wbg_width_f0cbf7dcbbe056da = function(e) {
                let t = getObject(e).width;
                return t
            }
            ,
            imports.wbg.__wbg_height_e46975153da440ae = function(e) {
                let t = getObject(e).height;
                return t
            }
            ,
            imports.wbg.__wbg_pressed_3b05e38d48c4c7ab = function(e) {
                let t = getObject(e).pressed;
                return t
            }
            ,
            imports.wbg.__wbg_body_be46234bb33edd63 = function(e) {
                let t = getObject(e).body;
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_fullscreenElement_65f14a4df7c25129 = function(e) {
                let t = getObject(e).fullscreenElement;
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createElement_e2a0e21263eb5416 = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).createElement(getStringFromWasm0(t, n));
                    return addHeapObject(r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_exitFullscreen_36506b10bd87f8b8 = function(e) {
                getObject(e).exitFullscreen()
            }
            ,
            imports.wbg.__wbg_exitPointerLock_c255b2b7e186916c = function(e) {
                getObject(e).exitPointerLock()
            }
            ,
            imports.wbg.__wbg_querySelector_32b9d7ebb2df951d = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).querySelector(getStringFromWasm0(t, n));
                    return isLikeNone(r) ? 0 : addHeapObject(r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_getBoundingClientRect_aaa701cbcb448965 = function(e) {
                let t = getObject(e).getBoundingClientRect();
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_requestFullscreen_4eee04b9090fa98a = function() {
                return handleError(function(e) {
                    getObject(e).requestFullscreen()
                }, arguments)
            }
            ,
            imports.wbg.__wbg_requestPointerLock_810495dd0fa1efc0 = function(e) {
                getObject(e).requestPointerLock()
            }
            ,
            imports.wbg.__wbg_setAttribute_79c9562d32d05e66 = function() {
                return handleError(function(e, t, n, r, a) {
                    getObject(e).setAttribute(getStringFromWasm0(t, n), getStringFromWasm0(r, a))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_setPointerCapture_5479dc0d082282b7 = function() {
                return handleError(function(e, t) {
                    getObject(e).setPointerCapture(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_style_2141664e428fef46 = function(e) {
                let t = getObject(e).style;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_bufferData_05664df801d7aec0 = function(e, t, n, r) {
                getObject(e).bufferData(t >>> 0, n, r >>> 0)
            }
            ,
            imports.wbg.__wbg_bufferData_023700b2ed207c43 = function(e, t, n, r) {
                getObject(e).bufferData(t >>> 0, getObject(n), r >>> 0)
            }
            ,
            imports.wbg.__wbg_bufferSubData_4e653f611d7a962d = function(e, t, n, r) {
                getObject(e).bufferSubData(t >>> 0, n, getObject(r))
            }
            ,
            imports.wbg.__wbg_compressedTexSubImage2D_788296e97b316838 = function(e, t, n, r, a, i, o, _, c) {
                getObject(e).compressedTexSubImage2D(t >>> 0, n, r, a, i, o, _ >>> 0, getObject(c))
            }
            ,
            imports.wbg.__wbg_readPixels_30de7174c15126d3 = function() {
                return handleError(function(e, t, n, r, a, i, o, _) {
                    getObject(e).readPixels(t, n, r, a, i >>> 0, o >>> 0, getObject(_))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_texSubImage2D_57792696288b0a61 = function() {
                return handleError(function(e, t, n, r, a, i, o, _, c, s) {
                    getObject(e).texSubImage2D(t >>> 0, n, r, a, i, o, _ >>> 0, c >>> 0, getObject(s))
                }, arguments)
            }
            ,
            imports.wbg.__wbg_uniform2fv_c29ce786946f1aae = function(e, t, n, r) {
                getObject(e).uniform2fv(getObject(t), getArrayF32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform2iv_58c3d5ee9e70c71d = function(e, t, n, r) {
                getObject(e).uniform2iv(getObject(t), getArrayI32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform3fv_5ca48b3279e0c643 = function(e, t, n, r) {
                getObject(e).uniform3fv(getObject(t), getArrayF32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform3iv_0a103fe131bd9213 = function(e, t, n, r) {
                getObject(e).uniform3iv(getObject(t), getArrayI32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform4fv_14f1c5ef10bfb4c9 = function(e, t, n, r) {
                getObject(e).uniform4fv(getObject(t), getArrayF32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniform4iv_9436eeda2a27cce8 = function(e, t, n, r) {
                getObject(e).uniform4iv(getObject(t), getArrayI32FromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_uniformMatrix2fv_1a40e9f63b2005c8 = function(e, t, n, r, a) {
                getObject(e).uniformMatrix2fv(getObject(t), 0 !== n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_uniformMatrix3fv_dcde28ba8c34d30e = function(e, t, n, r, a) {
                getObject(e).uniformMatrix3fv(getObject(t), 0 !== n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_uniformMatrix4fv_4575a018c8188146 = function(e, t, n, r, a) {
                getObject(e).uniformMatrix4fv(getObject(t), 0 !== n, getArrayF32FromWasm0(r, a))
            }
            ,
            imports.wbg.__wbg_activeTexture_01d5469eb22c10e7 = function(e, t) {
                getObject(e).activeTexture(t >>> 0)
            }
            ,
            imports.wbg.__wbg_attachShader_14fb12e2ae589dc3 = function(e, t, n) {
                getObject(e).attachShader(getObject(t), getObject(n))
            }
            ,
            imports.wbg.__wbg_bindBuffer_b7c382dcd70e33f6 = function(e, t, n) {
                getObject(e).bindBuffer(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindFramebuffer_a5ab0ed0463586cb = function(e, t, n) {
                getObject(e).bindFramebuffer(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindRenderbuffer_2d67c879cdbe5ea9 = function(e, t, n) {
                getObject(e).bindRenderbuffer(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_bindTexture_c1c0e00507424f8e = function(e, t, n) {
                getObject(e).bindTexture(t >>> 0, getObject(n))
            }
            ,
            imports.wbg.__wbg_blendColor_13739d87434b79c3 = function(e, t, n, r, a) {
                getObject(e).blendColor(t, n, r, a)
            }
            ,
            imports.wbg.__wbg_blendEquation_562c3267161e4675 = function(e, t) {
                getObject(e).blendEquation(t >>> 0)
            }
            ,
            imports.wbg.__wbg_blendEquationSeparate_48b95e78f7224be4 = function(e, t, n) {
                getObject(e).blendEquationSeparate(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_blendFunc_f4365f78b650180f = function(e, t, n) {
                getObject(e).blendFunc(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_blendFuncSeparate_b508053691b6ebbe = function(e, t, n, r, a) {
                getObject(e).blendFuncSeparate(t >>> 0, n >>> 0, r >>> 0, a >>> 0)
            }
            ,
            imports.wbg.__wbg_colorMask_99120a2c8caf1298 = function(e, t, n, r, a) {
                getObject(e).colorMask(0 !== t, 0 !== n, 0 !== r, 0 !== a)
            }
            ,
            imports.wbg.__wbg_compileShader_4e9130ccbd4a0238 = function(e, t) {
                getObject(e).compileShader(getObject(t))
            }
            ,
            imports.wbg.__wbg_copyTexSubImage2D_7c0b0080eece3c1a = function(e, t, n, r, a, i, o, _, c) {
                getObject(e).copyTexSubImage2D(t >>> 0, n, r, a, i, o, _, c)
            }
            ,
            imports.wbg.__wbg_createBuffer_8c64250e5283611c = function(e) {
                let t = getObject(e).createBuffer();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createFramebuffer_1f943a32c748753e = function(e) {
                let t = getObject(e).createFramebuffer();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createProgram_28db0ff3cee5f71a = function(e) {
                let t = getObject(e).createProgram();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createRenderbuffer_a76dcfda7bdc749a = function(e) {
                let t = getObject(e).createRenderbuffer();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_createShader_c5fcd8592f47b510 = function(e, t) {
                let n = getObject(e).createShader(t >>> 0);
                return isLikeNone(n) ? 0 : addHeapObject(n)
            }
            ,
            imports.wbg.__wbg_createTexture_81fd93af28301e0e = function(e) {
                let t = getObject(e).createTexture();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_cullFace_d4450f8718c6b3eb = function(e, t) {
                getObject(e).cullFace(t >>> 0)
            }
            ,
            imports.wbg.__wbg_deleteBuffer_17feed38f3a70ec9 = function(e, t) {
                getObject(e).deleteBuffer(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteFramebuffer_130abca01c89b7d6 = function(e, t) {
                getObject(e).deleteFramebuffer(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteProgram_dd5f0e2bc555e270 = function(e, t) {
                getObject(e).deleteProgram(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteRenderbuffer_385f3c9e8759b99e = function(e, t) {
                getObject(e).deleteRenderbuffer(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteShader_fac9fb3cdefdf6ec = function(e, t) {
                getObject(e).deleteShader(getObject(t))
            }
            ,
            imports.wbg.__wbg_deleteTexture_605a36a7e380df5f = function(e, t) {
                getObject(e).deleteTexture(getObject(t))
            }
            ,
            imports.wbg.__wbg_depthFunc_00d8a905436dc681 = function(e, t) {
                getObject(e).depthFunc(t >>> 0)
            }
            ,
            imports.wbg.__wbg_depthMask_134f9e3073ca4fd0 = function(e, t) {
                getObject(e).depthMask(0 !== t)
            }
            ,
            imports.wbg.__wbg_depthRange_f34f19edea1feadd = function(e, t, n) {
                getObject(e).depthRange(t, n)
            }
            ,
            imports.wbg.__wbg_disable_65425605098b79cf = function(e, t) {
                getObject(e).disable(t >>> 0)
            }
            ,
            imports.wbg.__wbg_disableVertexAttribArray_cf25f8beb5872364 = function(e, t) {
                getObject(e).disableVertexAttribArray(t >>> 0)
            }
            ,
            imports.wbg.__wbg_drawArrays_e5fa3cfc2b5d7c6d = function(e, t, n, r) {
                getObject(e).drawArrays(t >>> 0, n, r)
            }
            ,
            imports.wbg.__wbg_drawElements_a388832eba137ef0 = function(e, t, n, r, a) {
                getObject(e).drawElements(t >>> 0, n, r >>> 0, a)
            }
            ,
            imports.wbg.__wbg_enable_2c3b6a4692af9b1b = function(e, t) {
                getObject(e).enable(t >>> 0)
            }
            ,
            imports.wbg.__wbg_enableVertexAttribArray_6dd3d0668209ae19 = function(e, t) {
                getObject(e).enableVertexAttribArray(t >>> 0)
            }
            ,
            imports.wbg.__wbg_framebufferRenderbuffer_3bf1420713a0b21a = function(e, t, n, r, a) {
                getObject(e).framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, getObject(a))
            }
            ,
            imports.wbg.__wbg_framebufferTexture2D_ed03c0674b9979ce = function(e, t, n, r, a, i) {
                getObject(e).framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, getObject(a), i)
            }
            ,
            imports.wbg.__wbg_frontFace_00177185d2fae697 = function(e, t) {
                getObject(e).frontFace(t >>> 0)
            }
            ,
            imports.wbg.__wbg_getActiveUniform_e49dcda694ae15ab = function(e, t, n) {
                let r = getObject(e).getActiveUniform(getObject(t), n >>> 0);
                return isLikeNone(r) ? 0 : addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getParameter_d6cd2dd2cde656ec = function() {
                return handleError(function(e, t) {
                    let n = getObject(e).getParameter(t >>> 0);
                    return addHeapObject(n)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_getProgramInfoLog_7fd2a7c6c1a280c1 = function(e, t, n) {
                let r = getObject(t).getProgramInfoLog(getObject(n));
                var a = isLikeNone(r) ? 0 : passStringToWasm0(r, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , i = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = i,
                getInt32Memory0()[e / 4 + 0] = a
            }
            ,
            imports.wbg.__wbg_getProgramParameter_af1cfcccbbc80f71 = function(e, t, n) {
                let r = getObject(e).getProgramParameter(getObject(t), n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getShaderInfoLog_d057293074e59c61 = function(e, t, n) {
                let r = getObject(t).getShaderInfoLog(getObject(n));
                var a = isLikeNone(r) ? 0 : passStringToWasm0(r, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , i = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = i,
                getInt32Memory0()[e / 4 + 0] = a
            }
            ,
            imports.wbg.__wbg_getShaderParameter_685d7d7092c6bae6 = function(e, t, n) {
                let r = getObject(e).getShaderParameter(getObject(t), n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_getUniformLocation_b46e5db76599a918 = function(e, t, n, r) {
                let a = getObject(e).getUniformLocation(getObject(t), getStringFromWasm0(n, r));
                return isLikeNone(a) ? 0 : addHeapObject(a)
            }
            ,
            imports.wbg.__wbg_linkProgram_ca9df3fba2fd4125 = function(e, t) {
                getObject(e).linkProgram(getObject(t))
            }
            ,
            imports.wbg.__wbg_pixelStorei_f97b971917582269 = function(e, t, n) {
                getObject(e).pixelStorei(t >>> 0, n)
            }
            ,
            imports.wbg.__wbg_polygonOffset_fb73618b77fd3f6f = function(e, t, n) {
                getObject(e).polygonOffset(t, n)
            }
            ,
            imports.wbg.__wbg_renderbufferStorage_37eab84be1494aef = function(e, t, n, r, a) {
                getObject(e).renderbufferStorage(t >>> 0, n >>> 0, r, a)
            }
            ,
            imports.wbg.__wbg_scissor_8bc2e761846f53f0 = function(e, t, n, r, a) {
                getObject(e).scissor(t, n, r, a)
            }
            ,
            imports.wbg.__wbg_shaderSource_457e8bc42050401d = function(e, t, n, r) {
                getObject(e).shaderSource(getObject(t), getStringFromWasm0(n, r))
            }
            ,
            imports.wbg.__wbg_stencilFuncSeparate_510d3287542b4574 = function(e, t, n, r, a) {
                getObject(e).stencilFuncSeparate(t >>> 0, n >>> 0, r, a >>> 0)
            }
            ,
            imports.wbg.__wbg_stencilMask_e1887eeaabe22771 = function(e, t) {
                getObject(e).stencilMask(t >>> 0)
            }
            ,
            imports.wbg.__wbg_stencilMaskSeparate_e89abefeb5641657 = function(e, t, n) {
                getObject(e).stencilMaskSeparate(t >>> 0, n >>> 0)
            }
            ,
            imports.wbg.__wbg_stencilOpSeparate_aa3d09aa448a6f48 = function(e, t, n, r, a) {
                getObject(e).stencilOpSeparate(t >>> 0, n >>> 0, r >>> 0, a >>> 0)
            }
            ,
            imports.wbg.__wbg_texParameteri_9fbb09bbf9670af4 = function(e, t, n, r) {
                getObject(e).texParameteri(t >>> 0, n >>> 0, r)
            }
            ,
            imports.wbg.__wbg_uniform1f_062c683ec584f7e8 = function(e, t, n) {
                getObject(e).uniform1f(getObject(t), n)
            }
            ,
            imports.wbg.__wbg_uniform1i_1f8256271b54cf41 = function(e, t, n) {
                getObject(e).uniform1i(getObject(t), n)
            }
            ,
            imports.wbg.__wbg_uniform4f_68fac972655f5359 = function(e, t, n, r, a, i) {
                getObject(e).uniform4f(getObject(t), n, r, a, i)
            }
            ,
            imports.wbg.__wbg_useProgram_6c9019d05fb8d280 = function(e, t) {
                getObject(e).useProgram(getObject(t))
            }
            ,
            imports.wbg.__wbg_vertexAttribPointer_ccabef9be68fe1c4 = function(e, t, n, r, a, i, o) {
                getObject(e).vertexAttribPointer(t >>> 0, n, r >>> 0, 0 !== a, i, o)
            }
            ,
            imports.wbg.__wbg_viewport_4bdfc4b8959593ee = function(e, t, n, r, a) {
                getObject(e).viewport(t, n, r, a)
            }
            ,
            imports.wbg.__wbg_error_2d344a50ccf38b3b = function(e, t) {
                console.error(getObject(e), getObject(t))
            }
            ,
            imports.wbg.__wbg_instanceof_DomException_0dd0987418c574eb = function(e) {
                let t;
                try {
                    t = getObject(e)instanceof DOMException
                } catch (e) {
                    t = !1
                }
                let n = t;
                return n
            }
            ,
            imports.wbg.__wbg_message_f15effc8b20828e2 = function(e, t) {
                let n = getObject(t).message
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbg_clientX_35f23f953e04ec0e = function(e) {
                let t = getObject(e).clientX;
                return t
            }
            ,
            imports.wbg.__wbg_clientY_8104e462abc0b3ec = function(e) {
                let t = getObject(e).clientY;
                return t
            }
            ,
            imports.wbg.__wbg_offsetX_413d9f02022e72ad = function(e) {
                let t = getObject(e).offsetX;
                return t
            }
            ,
            imports.wbg.__wbg_offsetY_488f80a0a9666028 = function(e) {
                let t = getObject(e).offsetY;
                return t
            }
            ,
            imports.wbg.__wbg_ctrlKey_e1b8f1de1eb24d5d = function(e) {
                let t = getObject(e).ctrlKey;
                return t
            }
            ,
            imports.wbg.__wbg_shiftKey_fdd99b6df96e25c5 = function(e) {
                let t = getObject(e).shiftKey;
                return t
            }
            ,
            imports.wbg.__wbg_altKey_d531a4d3704557cb = function(e) {
                let t = getObject(e).altKey;
                return t
            }
            ,
            imports.wbg.__wbg_metaKey_934772989e28020c = function(e) {
                let t = getObject(e).metaKey;
                return t
            }
            ,
            imports.wbg.__wbg_button_a1c470d5e4c997f2 = function(e) {
                let t = getObject(e).button;
                return t
            }
            ,
            imports.wbg.__wbg_buttons_42a7b7de33d8e572 = function(e) {
                let t = getObject(e).buttons;
                return t
            }
            ,
            imports.wbg.__wbg_movementX_f4d07f6658c1e16f = function(e) {
                let t = getObject(e).movementX;
                return t
            }
            ,
            imports.wbg.__wbg_movementY_30276c1f90aec4fa = function(e) {
                let t = getObject(e).movementY;
                return t
            }
            ,
            imports.wbg.__wbg_bindVertexArrayOES_688eba003a98a0bb = function(e, t) {
                getObject(e).bindVertexArrayOES(getObject(t))
            }
            ,
            imports.wbg.__wbg_createVertexArrayOES_02cfe655604046eb = function(e) {
                let t = getObject(e).createVertexArrayOES();
                return isLikeNone(t) ? 0 : addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_deleteVertexArrayOES_ba22911f739464a7 = function(e, t) {
                getObject(e).deleteVertexArrayOES(getObject(t))
            }
            ,
            imports.wbg.__wbg_pointerId_d2caae4465ba386f = function(e) {
                let t = getObject(e).pointerId;
                return t
            }
            ,
            imports.wbg.__wbg_deltaX_b7d127c94d6265c0 = function(e) {
                let t = getObject(e).deltaX;
                return t
            }
            ,
            imports.wbg.__wbg_deltaY_b32fa858e16edcc0 = function(e) {
                let t = getObject(e).deltaY;
                return t
            }
            ,
            imports.wbg.__wbg_deltaMode_11f7b19e64d9a515 = function(e) {
                let t = getObject(e).deltaMode;
                return t
            }
            ,
            imports.wbg.__wbg_destination_5dfc354bcf2eb941 = function(e) {
                let t = getObject(e).destination;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_currentTime_d94729a1b5fd59a5 = function(e) {
                let t = getObject(e).currentTime;
                return t
            }
            ,
            imports.wbg.__wbg_newwithcontextoptions_6c6a79a71ed7efa3 = function() {
                return handleError(function(e) {
                    let t = new lAudioContext(getObject(e));
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_close_82409a9d656a7c26 = function() {
                return handleError(function(e) {
                    let t = getObject(e).close();
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_createBuffer_d142e00390bff447 = function() {
                return handleError(function(e, t, n, r) {
                    let a = getObject(e).createBuffer(t >>> 0, n >>> 0, r);
                    return addHeapObject(a)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_createBufferSource_1473226efd418a08 = function() {
                return handleError(function(e) {
                    let t = getObject(e).createBufferSource();
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_resume_72fe7cd3e68b861a = function() {
                return handleError(function(e) {
                    let t = getObject(e).resume();
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_now_c644db5194be8437 = function(e) {
                let t = getObject(e).now();
                return t
            }
            ,
            imports.wbg.__wbg_instanceof_Response_fb3a4df648c1859b = function(e) {
                let t;
                try {
                    t = getObject(e)instanceof Response
                } catch (e) {
                    t = !1
                }
                let n = t;
                return n
            }
            ,
            imports.wbg.__wbg_arrayBuffer_cb886e06a9e36e4d = function() {
                return handleError(function(e) {
                    let t = getObject(e).arrayBuffer();
                    return addHeapObject(t)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe = function(e) {
                let t;
                try {
                    t = getObject(e)instanceof HTMLCanvasElement
                } catch (e) {
                    t = !1
                }
                let n = t;
                return n
            }
            ,
            imports.wbg.__wbg_width_a40e21a22129b197 = function(e) {
                let t = getObject(e).width;
                return t
            }
            ,
            imports.wbg.__wbg_setwidth_81c62bc806e0a727 = function(e, t) {
                getObject(e).width = t >>> 0
            }
            ,
            imports.wbg.__wbg_height_98d51321254345a5 = function(e) {
                let t = getObject(e).height;
                return t
            }
            ,
            imports.wbg.__wbg_setheight_98cf0db22c40ef07 = function(e, t) {
                getObject(e).height = t >>> 0
            }
            ,
            imports.wbg.__wbg_getContext_89a318b610dc5fd4 = function() {
                return handleError(function(e, t, n, r) {
                    let a = getObject(e).getContext(getStringFromWasm0(t, n), getObject(r));
                    return isLikeNone(a) ? 0 : addHeapObject(a)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_matches_46e979ff3e4d0811 = function(e) {
                let t = getObject(e).matches;
                return t
            }
            ,
            imports.wbg.__wbg_drawBuffersWEBGL_dfb0d803ea7ebe07 = function(e, t) {
                getObject(e).drawBuffersWEBGL(getObject(t))
            }
            ,
            imports.wbg.__wbg_get_27fe3dac1c4d0224 = function(e, t) {
                let n = getObject(e)[t >>> 0];
                return addHeapObject(n)
            }
            ,
            imports.wbg.__wbg_length_e498fbc24f9c1d4f = function(e) {
                let t = getObject(e).length;
                return t
            }
            ,
            imports.wbg.__wbg_new_b525de17f44a8943 = function() {
                let e = [];
                return addHeapObject(e)
            }
            ,
            imports.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function(e, t) {
                let n = Function(getStringFromWasm0(e, t));
                return addHeapObject(n)
            }
            ,
            imports.wbg.__wbg_get_baf4855f9a986186 = function() {
                return handleError(function(e, t) {
                    let n = Reflect.get(getObject(e), getObject(t));
                    return addHeapObject(n)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_call_95d1ea488d03e4e8 = function() {
                return handleError(function(e, t) {
                    let n = getObject(e).call(getObject(t));
                    return addHeapObject(n)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_new_f9876326328f45ed = function() {
                let e = {};
                return addHeapObject(e)
            }
            ,
            imports.wbg.__wbg_self_e7c1f827057f6584 = function() {
                return handleError(function() {
                    let e = self.self;
                    return addHeapObject(e)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_window_a09ec664e14b1b81 = function() {
                return handleError(function() {
                    let e = window.window;
                    return addHeapObject(e)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function() {
                return handleError(function() {
                    let e = globalThis.globalThis;
                    return addHeapObject(e)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_global_c85a9259e621f3db = function() {
                return handleError(function() {
                    let e = __webpack_require__.g.global;
                    return addHeapObject(e)
                }, arguments)
            }
            ,
            imports.wbg.__wbindgen_is_undefined = function(e) {
                let t = void 0 === getObject(e);
                return t
            }
            ,
            imports.wbg.__wbg_eval_be0434aab6074e1e = function() {
                return handleError(function(arg0, arg1) {
                    let ret = eval(getStringFromWasm0(arg0, arg1));
                    return addHeapObject(ret)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_of_892d7838f8e4cc20 = function(e) {
                let t = Array.of(getObject(e));
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_push_49c286f04dd3bf59 = function(e, t) {
                let n = getObject(e).push(getObject(t));
                return n
            }
            ,
            imports.wbg.__wbg_call_9495de66fdbe016b = function() {
                return handleError(function(e, t, n) {
                    let r = getObject(e).call(getObject(t), getObject(n));
                    return addHeapObject(r)
                }, arguments)
            }
            ,
            imports.wbg.__wbg_now_931686b195a14f9d = function() {
                let e = Date.now();
                return e
            }
            ,
            imports.wbg.__wbg_is_8f1618fe9a4fd388 = function(e, t) {
                let n = Object.is(getObject(e), getObject(t));
                return n
            }
            ,
            imports.wbg.__wbg_resolve_fd40f858d9db1a04 = function(e) {
                let t = Promise.resolve(getObject(e));
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_then_ec5db6d509eb475f = function(e, t) {
                let n = getObject(e).then(getObject(t));
                return addHeapObject(n)
            }
            ,
            imports.wbg.__wbg_then_f753623316e2873a = function(e, t, n) {
                let r = getObject(e).then(getObject(t), getObject(n));
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_buffer_cf65c07de34b9a08 = function(e) {
                let t = getObject(e).buffer;
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74 = function(e, t, n) {
                let r = new Int8Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_f477e654086cbbb6 = function(e, t, n) {
                let r = new Int16Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_b57a602974d4b1cd = function(e, t, n) {
                let r = new Int32Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function(e, t, n) {
                let r = new Uint8Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_new_537b7341ce90bb31 = function(e) {
                let t = new Uint8Array(getObject(e));
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_set_17499e8aa4003ebd = function(e, t, n) {
                getObject(e).set(getObject(t), n >>> 0)
            }
            ,
            imports.wbg.__wbg_length_27a2afe8ab42b09f = function(e) {
                let t = getObject(e).length;
                return t
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_9241d9d251418ebf = function(e, t, n) {
                let r = new Uint16Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee = function(e, t, n) {
                let r = new Uint32Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_newwithbyteoffsetandlength_4078d56428eb2926 = function(e, t, n) {
                let r = new Float32Array(getObject(e),t >>> 0,n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_newwithlength_b56c882b57805732 = function(e) {
                let t = new Uint8Array(e >>> 0);
                return addHeapObject(t)
            }
            ,
            imports.wbg.__wbg_subarray_7526649b91a252a6 = function(e, t, n) {
                let r = getObject(e).subarray(t >>> 0, n >>> 0);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbg_set_6aa458a4ebdb65cb = function() {
                return handleError(function(e, t, n) {
                    let r = Reflect.set(getObject(e), getObject(t), getObject(n));
                    return r
                }, arguments)
            }
            ,
            imports.wbg.__wbindgen_debug_string = function(e, t) {
                let n = debugString(getObject(t))
                  , r = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
                  , a = WASM_VECTOR_LEN;
                getInt32Memory0()[e / 4 + 1] = a,
                getInt32Memory0()[e / 4 + 0] = r
            }
            ,
            imports.wbg.__wbindgen_throw = function(e, t) {
                throw Error(getStringFromWasm0(e, t))
            }
            ,
            imports.wbg.__wbindgen_memory = function() {
                let e = wasm.memory;
                return addHeapObject(e)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1413 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1415 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1417 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1419 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1421 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1423 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_45);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1425 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1427 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper1429 = function(e, t, n) {
                let r = makeMutClosure(e, t, 557, __wbg_adapter_34);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper16927 = function(e, t, n) {
                let r = makeMutClosure(e, t, 10587, __wbg_adapter_54);
                return addHeapObject(r)
            }
            ,
            imports.wbg.__wbindgen_closure_wrapper40004 = function(e, t, n) {
                let r = makeMutClosure(e, t, 25798, __wbg_adapter_57);
                return addHeapObject(r)
            }
            ,
            imports
        }
        function initMemory(e, t) {}
        function finalizeInit(e, t) {
            return wasm = e.exports,
            init.__wbindgen_wasm_module = t,
            cachedFloat32Memory0 = null,
            cachedFloat64Memory0 = null,
            cachedInt32Memory0 = null,
            cachedUint32Memory0 = null,
            cachedUint8Memory0 = null,
            wasm.__wbindgen_start(),
            wasm
        }
        function initSync(e) {
            let t = getImports();
            e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
            let n = new WebAssembly.Instance(e,t);
            return finalizeInit(n, e)
        }
        async function init(e, t) {
            let n = new __webpack_require__.U(__webpack_require__(7762))
              , r = getImports(e, t);
            ("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
            let {instance: a, module: i} = await load(await n, r);
            return finalizeInit(a, i)
        }
        __webpack_exports__.Z = init
    },
    1086: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return eq
            },
            default: function() {
                return eW
            }
        });
        var r = n(5893)
          , a = n(9008)
          , i = n.n(a)
          , o = n(7953)
          , _ = n.n(o)
          , c = n(7294)
          , s = n(5675)
          , l = n.n(s);
        let b = ()=>(0,
        r.jsxs)("div", {
            className: _().footer,
            children: [(0,
            r.jsx)(l(), {
                src: "/assets/front/everaiLogo.webp",
                alt: "everai logo",
                width: 0,
                height: 0
            }), (0,
            r.jsx)("p", {
                children: "2023 Starknet ID production x Everai"
            })]
        });
        var d = b;
        let f = e=>{
            let {updateSection: t, bestPlayers: n, sound: a} = e
              , [i,o] = (0,
            c.useState)(!1)
              , s = (0,
            c.useRef)(null);
            (0,
            c.useEffect)(()=>{
                let e = s.current;
                return e.load(),
                e.volume = .5,
                ()=>{
                    s.current && s.current.pause()
                }
            }
            , []);
            let l = e=>{
                if (a) {
                    if (e) {
                        let e = s.current;
                        e.play()
                    } else {
                        let e = s.current;
                        e.pause(),
                        e.currentTime = 0
                    }
                }
            }
            ;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("audio", {
                    ref: s,
                    src: "/assets/sounds/mixkit-arcade-retro-changing-tab-206.webm"
                }), (0,
                r.jsxs)("ul", {
                    className: _().menu,
                    children: [(0,
                    r.jsx)("li", {
                        onMouseEnter: ()=>l(!0),
                        onMouseLeave: ()=>l(!1),
                        children: (0,
                        r.jsx)("div", {
                            onClick: ()=>t(1),
                            className: i ? "" : _().flashableIcon,
                            children: "Play"
                        })
                    }), (0,
                    r.jsx)("li", {
                        onMouseEnter: ()=>l(!0),
                        onMouseLeave: ()=>l(!1),
                        children: (0,
                        r.jsx)("div", {
                            onClick: ()=>t(2),
                            onMouseEnter: ()=>o(!0),
                            onMouseLeave: ()=>o(!1),
                            children: "Sponsors"
                        })
                    }), (0,
                    r.jsx)("li", {
                        onMouseEnter: ()=>l(!0),
                        onMouseLeave: ()=>l(!1),
                        children: (0,
                        r.jsx)("div", {
                            onClick: ()=>t(3),
                            onMouseEnter: ()=>o(!0),
                            onMouseLeave: ()=>o(!1),
                            children: "Leaderboard"
                        })
                    }), (0,
                    r.jsx)("li", {
                        onMouseEnter: ()=>l(!0),
                        onMouseLeave: ()=>l(!1),
                        children: (0,
                        r.jsx)("div", {
                            onClick: ()=>t(4),
                            onMouseEnter: ()=>o(!0),
                            onMouseLeave: ()=>o(!1),
                            children: "How it works"
                        })
                    })]
                })]
            })
        }
        ;
        var u = f
          , g = n(4935)
          , w = n.n(g)
          , h = n(6324)
          , m = n.n(h);
        let x = e=>{
            let {children: t, onClick: n, disabled: a=!1, margin: i, color: o, size: _, flash: c} = e;
            return (0,
            r.jsx)("button", {
                disabled: a,
                onClick: n,
                className: "".concat(m()["nq-button"], " ").concat(m()["nq-button-".concat(o)], " ").concat(c ? m()["nq-button-flash"] : ""),
                style: {
                    margin: "".concat(i),
                    fontSize: "".concat(_)
                },
                children: t
            })
        }
        ;
        var p = x;
        let y = e=>{
            let {margin: t, updateModal: n, flash: a} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)(p, {
                    onClick: ()=>n(!0),
                    margin: t,
                    color: "yellow",
                    size: "1rem",
                    flash: a,
                    children: "Connect wallet"
                })
            })
        }
        ;
        var v = y
          , j = n(7145)
          , S = n(3933);
        let A = ()=>{
            let {serverUrl: e, updateServerUrl: t, starknetIdNavigator: n} = (0,
            c.useContext)(S.G);
            return {
                serverUrl: e,
                updateServerUrl: t,
                starknetIdNavigator: n
            }
        }
          , k = e=>{
            let {section: t, updateSection: n, starkName: a, playerBestScore: i, updateModal: o} = e
              , {status: _, address: c} = (0,
            j.useAccount)()
              , {disconnect: s} = (0,
            j.useConnectors)()
              , b = "connected" === _
              , {serverUrl: d} = A();
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    className: w().connect,
                    children: b && c ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsxs)("div", {
                            className: w().highScore,
                            children: [(0,
                            r.jsx)("div", {
                                children: "High score"
                            }), i && a ? (0,
                            r.jsxs)("div", {
                                className: w().hasScore,
                                children: [i ? i.toFixed(2) : "0", "s"]
                            }) : (0,
                            r.jsx)("div", {
                                className: w().noScore,
                                children: "0s"
                            })]
                        }), a ? (0,
                        r.jsxs)("div", {
                            className: w().starkName,
                            children: [(0,
                            r.jsx)(l(), {
                                src: "/assets/front/icon-starkname.webp",
                                width: 20,
                                height: 20,
                                alt: "icon starkname"
                            }), (0,
                            r.jsx)("div", {
                                children: a
                            })]
                        }) : (0,
                        r.jsxs)("div", {
                            className: w().starkName,
                            children: [(0,
                            r.jsx)(l(), {
                                src: "/assets/front/icon-plus.webp",
                                width: 20,
                                height: 20,
                                onClick: ()=>window.open("https://app.starknet.id/"),
                                alt: "icon plus"
                            }), (0,
                            r.jsx)("div", {
                                onClick: ()=>window.open("https://app.starknet.id/"),
                                children: "Get a .stark domain"
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: w().starkAddr,
                            children: c.slice(0, 6) + "..." + c.slice(-4)
                        })]
                    }) : (0,
                    r.jsx)(v, {
                        margin: "20px 0 0 auto",
                        updateModal: o,
                        flash: !1
                    })
                }), b && c ? (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsx)(l(), {
                        src: "/assets/front/pixelButton-logout.svg",
                        alt: "icon logout",
                        width: 33,
                        height: 0,
                        className: w().logout,
                        onClick: ()=>s()
                    })
                }) : null, (0,
                r.jsx)("div", {
                    className: w().center,
                    children: 0 === t ? (0,
                    r.jsx)(l(), {
                        className: w().logoLarge,
                        src: "/assets/front/starkfighter_logo_everai.webp",
                        alt: "StarkFighter Logo",
                        priority: !0,
                        sizes: "100vw",
                        width: 0,
                        height: 0,
                        onClick: ()=>n(0)
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(l(), {
                            className: 1 === t || 4 === t ? w().logoSmall : w().logo,
                            src: "/assets/front/starkfighter_logo_everai.webp",
                            alt: "StarkFighter Logo",
                            priority: !0,
                            sizes: "100vw",
                            width: 0,
                            height: 0,
                            onClick: ()=>n(0)
                        }), (0,
                        r.jsx)("div", {
                            className: w().btnBack,
                            onClick: ()=>n(0),
                            children: "< Back"
                        })]
                    })
                })]
            })
        }
        ;
        var L = k
          , N = n(5740)
          , C = n.n(N)
          , P = n(3550);
        function F(e, t) {
            if (!(e.length > (null != t ? t : 18)))
                return e.toLowerCase();
            {
                let n = e.substring(0, t ? Math.floor(t / 2) : 4)
                  , r = e.substring(e.length - 3, e.length);
                return (n + "..." + r).toLowerCase()
            }
        }
        let E = {
            mainnet: "0x534e5f4d41494e",
            testnet: "0x534e5f474f45524c49"
        }
          , B = ["muscledserver.starkfighter.xyz", "muscledserver.starkfighter.xyz"]
          , M = [{
            nft: {
                amount: 1,
                project: "everai"
            },
            eth: 1.05
        }, {
            nft: {
                amount: 1,
                project: "everai"
            },
            eth: .7
        }, {
            nft: {
                amount: 1,
                project: "everai"
            },
            eth: .56
        }, {
            nft: {
                amount: 1,
                project: "realms"
            },
            eth: .42
        }, {
            nft: {
                amount: 1,
                project: "briq"
            },
            eth: .28
        }, {
            nft: {
                amount: 1,
                project: "briq"
            },
            eth: .21
        }, {
            nft: {
                amount: 1,
                project: "briq"
            },
            eth: .21
        }, {
            nft: {
                amount: 1,
                project: "briq"
            },
            eth: .21
        }, {
            nft: {
                amount: 1,
                project: "briq"
            },
            eth: .21
        }, {
            nft: {
                amount: 1,
                project: "carbonable"
            },
            eth: .21
        }, {
            nft: {
                amount: 1,
                project: "carbonable"
            },
            eth: .11
        }, {
            nft: {
                amount: 1,
                project: "carbonable"
            },
            eth: .11
        }, {
            nft: {
                amount: 1,
                project: "carbonable"
            },
            eth: .11
        }, {
            nft: {
                amount: 1,
                project: "carbonable"
            },
            eth: .11
        }, {
            eth: .11
        }, {
            eth: .11
        }, {
            eth: .11
        }, {
            eth: .11
        }, {
            eth: .11
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .07
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }, {
            eth: .05
        }]
          , T = e=>{
            let {player: t, rank: n} = e
              , {starknetIdNavigator: a} = A()
              , [i,o] = (0,
            c.useState)()
              , _ = M[n];
            (0,
            c.useEffect)(()=>{
                if (!a)
                    return;
                let e = "0x0" + new P.BN(t.owner,10).toString(16);
                a.getStarkName(e).then(t=>{
                    o({
                        starkName: F(t, 17),
                        fullStarkName: t,
                        shortAddress: (null == e ? void 0 : e.slice(0, 6)) + "..." + (null == e ? void 0 : e.slice(-4)),
                        isEverai: null == t ? void 0 : t.endsWith(".everai.stark"),
                        isBraavos: null == t ? void 0 : t.endsWith(".braavos.stark")
                    })
                }
                )
            }
            , [t, a]);
            let s = ()=>{
                (null == i ? void 0 : i.isEverai) && window.open("http://www.everai.xyz/everai-id/".concat(i.fullStarkName.replace(".everai.stark", "")))
            }
            ;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("tr", {
                    children: [(0,
                    r.jsx)("td", {
                        className: "".concat(C().rank, " ").concat(0 === n ? C().first : 1 == n ? C().second : 2 == n ? C().third : ""),
                        children: (0,
                        r.jsxs)("p", {
                            children: [n + 1, "."]
                        })
                    }), (0,
                    r.jsxs)("td", {
                        className: C().name,
                        onClick: ()=>s(),
                        style: {
                            cursor: "".concat((null == i ? void 0 : i.isEverai) ? "pointer" : "")
                        },
                        children: [(0,
                        r.jsxs)("p", {
                            className: 0 === n ? C().first : 1 == n ? C().second : 2 == n ? C().third : "",
                            children: [(null == i ? void 0 : i.isBraavos) ? (0,
                            r.jsx)("img", {
                                src: "/assets/logos/braavos.webp",
                                width: 20,
                                height: 20,
                                style: {
                                    marginRight: "2px"
                                }
                            }) : "", null == i ? void 0 : i.starkName]
                        }), (0,
                        r.jsx)("p", {
                            children: null == i ? void 0 : i.shortAddress
                        })]
                    }), (0,
                    r.jsxs)("td", {
                        className: "".concat(C().score, " ").concat(0 === n ? C().first : 1 == n ? C().second : 2 == n ? C().third : ""),
                        children: [t.score.toFixed(0), "s"]
                    }), (0,
                    r.jsx)("td", {
                        className: "".concat(C().prize, " ").concat(0 === n ? C().first : 1 == n ? C().second : 2 == n ? C().third : ""),
                        children: M.length > n ? (0,
                        r.jsxs)("div", {
                            children: [_.eth > 0 ? (0,
                            r.jsxs)(r.Fragment, {
                                children: [(0,
                                r.jsx)(l(), {
                                    src: "/assets/front/coin.svg",
                                    alt: "coin pixel icon",
                                    width: 30,
                                    height: 0,
                                    style: {
                                        height: "auto",
                                        marginRight: "5px"
                                    }
                                }), _.nft ? (0,
                                r.jsxs)("p", {
                                    children: [_.eth, "ETH /\xa0"]
                                }) : (0,
                                r.jsxs)("p", {
                                    children: [_.eth, "ETH \xa0"]
                                })]
                            }) : "", " ", _.nft && _.nft.amount > 0 ? (0,
                            r.jsxs)(r.Fragment, {
                                children: [" ", (0,
                                r.jsx)(l(), {
                                    src: "/assets/front/".concat(_.nft.project, ".svg"),
                                    alt: "".concat(_.nft.project, " pixel icon"),
                                    width: 30,
                                    height: 0,
                                    style: {
                                        height: "auto"
                                    },
                                    className: "".concat("briq" === _.nft.project ? C().briq : "")
                                }), " ", (0,
                                r.jsxs)("p", {
                                    children: ["\xa0", _.nft.amount, " NFT"]
                                })]
                            }) : ""]
                        }) : null
                    })]
                })
            })
        }
        ;
        var D = T
          , I = n(6154);
        let H = ()=>{
            let {serverUrl: e} = A()
              , [t,n] = (0,
            c.useState)(1)
              , [a,i] = (0,
            c.useState)([])
              , [o,_] = (0,
            c.useState)(0)
              , [s,b] = (0,
            c.useState)([])
              , d = 10;
            (0,
            c.useEffect)(()=>{
                o || I.Z.post("https://".concat(e, "/fetch_scores_size")).then(e=>{
                    _(Math.ceil(e.data.size / d))
                }
                )
            }
            , [e]),
            (0,
            c.useEffect)(()=>{
                a[t] || f(t)
            }
            , [t, a]),
            (0,
            c.useEffect)(()=>{
                let e = [];
                for (let n = 1; n <= o && (1 === n || n === o || n >= t - 3 && n <= t + 3 ? e.push(n) : n % 10 == 0 && e.push(n),
                9 !== e.length); n++)
                    ;
                b(e)
            }
            , [t, o]);
            let f = t=>{
                I.Z.post("https://".concat(e, "/fetch_scores"), {
                    page: t - 1,
                    page_size: d
                }).then(e=>{
                    i(n=>{
                        let r = [...n];
                        return r[t] = e.data,
                        r
                    }
                    )
                }
                )
            }
            ;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("div", {
                    className: "".concat(C().leaderboard, " ").concat(1 === t ? C().leaderboardFirst : ""),
                    children: [(0,
                    r.jsxs)("div", {
                        className: C().overall,
                        children: [(0,
                        r.jsx)(l(), {
                            src: "/assets/front/pixelButton-chest.svg",
                            alt: "chest pixel icon",
                            width: 30,
                            height: 0,
                            style: {
                                height: "auto"
                            }
                        }), (0,
                        r.jsx)("p", {
                            children: "+ 7ETH to win"
                        })]
                    }), (0,
                    r.jsxs)("table", {
                        children: [(0,
                        r.jsx)("thead", {
                            children: (0,
                            r.jsxs)("tr", {
                                children: [(0,
                                r.jsxs)("th", {
                                    children: ["Rank", (0,
                                    r.jsx)("img", {
                                        src: "/assets/front/line.webp",
                                        alt: "line",
                                        style: {
                                            maxWidth: "none",
                                            height: "auto",
                                            width: "241px",
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                r.jsxs)("th", {
                                    children: ["Name", " ", (0,
                                    r.jsx)("img", {
                                        src: "/assets/front/line.webp",
                                        alt: "line",
                                        style: {
                                            maxWidth: "none",
                                            height: "auto",
                                            width: "241px",
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                r.jsxs)("th", {
                                    children: ["Score", " ", (0,
                                    r.jsx)("img", {
                                        src: "/assets/front/line.webp",
                                        alt: "line",
                                        style: {
                                            maxWidth: "none",
                                            height: "auto",
                                            width: "241px",
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                r.jsxs)("th", {
                                    children: ["Prize", " ", (0,
                                    r.jsx)("img", {
                                        src: "/assets/front/line.webp",
                                        alt: "line",
                                        style: {
                                            maxWidth: "none",
                                            height: "auto",
                                            width: "241px",
                                            position: "relative"
                                        }
                                    })]
                                })]
                            })
                        }), (0,
                        r.jsx)("tbody", {
                            children: a[t] && a[t].map((e,n)=>(0,
                            r.jsx)(D, {
                                player: e,
                                rank: n + (t - 1) * d
                            }, n))
                        })]
                    })]
                }), o > 1 ? (0,
                r.jsxs)("div", {
                    className: C().pagination,
                    children: [(0,
                    r.jsx)("div", {
                        className: "".concat(C().btnPagination, " ").concat(1 === t ? C().disabled : C().enabled),
                        onClick: ()=>t > 1 && n(t - 1),
                        children: (0,
                        r.jsx)("div", {
                            className: C().btnParent,
                            children: (0,
                            r.jsx)("div", {
                                className: C().btnContainer,
                                children: "< Prev"
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: C().pages,
                        children: s.map(e=>(0,
                        r.jsx)("span", {
                            className: "".concat(C().pageNb, " ").concat(t === e ? C().pageSelected : ""),
                            onClick: ()=>n(e),
                            children: e
                        }, e))
                    }), (0,
                    r.jsx)("div", {
                        className: "".concat(C().btnPagination, " ").concat(t === o ? C().disabled : C().enabled),
                        onClick: ()=>t < o && n(t + 1),
                        children: (0,
                        r.jsx)("div", {
                            className: C().btnParent,
                            children: (0,
                            r.jsx)("div", {
                                className: C().btnContainer,
                                children: "> Next"
                            })
                        })
                    })]
                }) : null]
            })
        }
        ;
        var R = H
          , q = n(4937)
          , W = n(3419)
          , O = n.n(W);
        let V = e=>{
            let {color: t} = e;
            return (0,
            r.jsxs)("svg", {
                width: "170",
                height: "45",
                viewBox: "0 0 170 45",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("rect", {
                    x: "3.20752",
                    width: "163.584",
                    height: "3.20754",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "5.13184",
                    y: "36.5659",
                    width: "159.735",
                    height: "3.20754",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "5.13184",
                    y: "42.3395",
                    width: "159.735",
                    height: "2.56603",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "3.75883",
                    width: "3.20754",
                    height: "32.579",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "3.11719",
                    width: "2.50608",
                    height: "6.26519",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "1.86426",
                    y: "40.0974",
                    width: "2.50608",
                    height: "2.50608",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "37.5909",
                    width: "2.50608",
                    height: "2.50608",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "37.5909",
                    width: "2.50608",
                    height: "6.26519",
                    transform: "rotate(-90 0 37.5909)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "166.792",
                    y: "3.75883",
                    width: "3.20754",
                    height: "32.579",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "167.494",
                    y: "37.5909",
                    width: "2.50608",
                    height: "2.50608",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "165.629",
                    y: "40.0974",
                    width: "2.50608",
                    height: "2.50608",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "163.735",
                    y: "37.5909",
                    width: "2.50608",
                    height: "6.26519",
                    transform: "rotate(-90 163.735 37.5909)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "164.376",
                    width: "2.50608",
                    height: "6.26519",
                    fill: t
                }), (0,
                r.jsx)("path", {
                    d: "M84.1411 21.9811H68.7449V20.0566H84.1411V21.9811ZM99.5373 21.9811L84.1411 21.9811V20.0566L99.5373 20.0566V21.9811Z",
                    fill: t
                })]
            })
        }
        ;
        var z = V
          , G = n(4561)
          , U = n.n(G);
        let Q = e=>{
            let {message: t} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("div", {
                    className: U().pixelModalParent,
                    children: (0,
                    r.jsx)("div", {
                        className: U().pixelModalContainer,
                        children: t
                    })
                })
            })
        }
        ;
        var Z = Q;
        let K = e=>{
            let {updateModal: t} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)(Z, {
                    message: (0,
                    r.jsxs)("div", {
                        className: O().playModal,
                        children: [(0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsx)("p", {
                                children: "Hey!"
                            }), (0,
                            r.jsx)("p", {
                                children: "Connect your wallet to play!"
                            }), (0,
                            r.jsxs)("p", {
                                children: ["You need a ", (0,
                                r.jsx)("span", {
                                    children: "name.stark"
                                }), " to win prizes"]
                            }), (0,
                            r.jsx)("p", {
                                children: ";)"
                            })]
                        }), (0,
                        r.jsx)("div", {
                            children: (0,
                            r.jsx)(v, {
                                margin: "10px auto 20px auto",
                                updateModal: t,
                                flash: !0
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: O().link,
                            children: (0,
                            r.jsx)("a", {
                                href: "https://app.starknet.id/",
                                target: "_blank",
                                children: "Get your .stark domain"
                            })
                        })]
                    })
                })
            })
        }
        ;
        var X = K;
        let Y = e=>{
            let {color: t} = e;
            return (0,
            r.jsxs)("svg", {
                width: "85",
                height: "70",
                viewBox: "0 0 85 70",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("rect", {
                    x: "9",
                    y: "57",
                    width: "68",
                    height: "5",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "9",
                    y: "66",
                    width: "68",
                    height: "4",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "5.85938",
                    width: "5",
                    height: "50.785",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "2.90625",
                    y: "62.5049",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "58.5977",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "58.5977",
                    width: "3.90654",
                    height: "9.76636",
                    transform: "rotate(-90 0 58.5977)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "80",
                    y: "5.85938",
                    width: "5",
                    height: "50.785",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "81.0938",
                    y: "58.5977",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "78.1875",
                    y: "62.5049",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "75.2344",
                    y: "58.5977",
                    width: "3.90654",
                    height: "9.76636",
                    transform: "rotate(-90 75.2344 58.5977)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "9",
                    width: "68",
                    height: "5",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "4",
                    y: "8",
                    width: "4",
                    height: "6",
                    transform: "rotate(-90 4 8)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "74",
                    y: "8",
                    width: "4",
                    height: "6",
                    transform: "rotate(-90 74 8)",
                    fill: t
                }), (0,
                r.jsx)("path", {
                    d: "M50 41H44V38H41V35H38V32H35V29H38V26H41V23L44 23V20H50V23H47V26H44V29H41V32H44V35H47V38H50V41Z",
                    fill: t
                })]
            })
        }
        ;
        var J = Y;
        let $ = e=>{
            let {color: t} = e;
            return (0,
            r.jsx)("svg", {
                width: "85",
                height: "70",
                viewBox: "0 0 85 70",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                r.jsxs)("g", {
                    opacity: "0.5",
                    children: [(0,
                    r.jsx)("rect", {
                        x: "9",
                        width: "68",
                        height: "5",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "4",
                        y: "8",
                        width: "4",
                        height: "6",
                        transform: "rotate(-90 4 8)",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "74",
                        y: "8",
                        width: "4",
                        height: "6",
                        transform: "rotate(-90 74 8)",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "9",
                        y: "57",
                        width: "68",
                        height: "5",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "9",
                        y: "66",
                        width: "68",
                        height: "4",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        y: "5.85938",
                        width: "5",
                        height: "50.785",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "2.90625",
                        y: "62.5049",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        y: "58.5977",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        y: "58.5977",
                        width: "3.90654",
                        height: "9.76636",
                        transform: "rotate(-90 0 58.5977)",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "80",
                        y: "5.85938",
                        width: "5",
                        height: "50.785",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "81.0938",
                        y: "58.5977",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "78.1875",
                        y: "62.5049",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "75.2344",
                        y: "58.5977",
                        width: "3.90654",
                        height: "9.76636",
                        transform: "rotate(-90 75.2344 58.5977)",
                        fill: t
                    }), (0,
                    r.jsx)("path", {
                        d: "M54 25L54 31L51 31L51 34L48 34L48 37L45 37L45 40L42 40L42 37L39 37L39 34L36 34L36 31L33 31L33 25L36 25L36 28L39 28L39 31L42 31L42 34L45 34L45 31L48 31L48 28L51 28L51 25L54 25Z",
                        fill: t
                    })]
                })
            })
        }
        ;
        var ee = $;
        let et = e=>{
            let {color: t} = e;
            return (0,
            r.jsxs)("svg", {
                width: "85",
                height: "70",
                viewBox: "0 0 85 70",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("rect", {
                    x: "9",
                    y: "57",
                    width: "68",
                    height: "5",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "9",
                    y: "66",
                    width: "68",
                    height: "4",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "5.85938",
                    width: "5",
                    height: "50.785",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "2.90625",
                    y: "62.5049",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "58.5977",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    y: "58.5977",
                    width: "3.90654",
                    height: "9.76636",
                    transform: "rotate(-90 0 58.5977)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "80",
                    y: "5.85938",
                    width: "5",
                    height: "50.785",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "81.0938",
                    y: "58.5977",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "78.1875",
                    y: "62.5049",
                    width: "3.90654",
                    height: "3.90654",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "75.2344",
                    y: "58.5977",
                    width: "3.90654",
                    height: "9.76636",
                    transform: "rotate(-90 75.2344 58.5977)",
                    fill: t
                }), (0,
                r.jsx)("path", {
                    d: "M37 20L43 20L43 23L46 23L46 26L49 26L49 29L52 29L52 32L49 32L49 35L46 35L46 38L43 38L43 41L37 41L37 38L40 38L40 35L43 35L43 32L46 32L46 29L43 29L43 26L40 26L40 23L37 23L37 20Z",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "9",
                    width: "68",
                    height: "5",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "4",
                    y: "8",
                    width: "4",
                    height: "6",
                    transform: "rotate(-90 4 8)",
                    fill: t
                }), (0,
                r.jsx)("rect", {
                    x: "74",
                    y: "8",
                    width: "4",
                    height: "6",
                    transform: "rotate(-90 74 8)",
                    fill: t
                })]
            })
        }
        ;
        var en = et;
        let er = e=>{
            let {color: t} = e;
            return (0,
            r.jsx)("svg", {
                width: "85",
                height: "70",
                viewBox: "0 0 85 70",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                r.jsxs)("g", {
                    opacity: "0.5",
                    children: [(0,
                    r.jsx)("rect", {
                        x: "9",
                        width: "68",
                        height: "5",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "9",
                        y: "57",
                        width: "68",
                        height: "5",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "9",
                        y: "66",
                        width: "68",
                        height: "4",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        y: "5.85938",
                        width: "5",
                        height: "50.785",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "2.90625",
                        y: "62.5049",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        y: "58.5977",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        y: "58.5977",
                        width: "3.90654",
                        height: "9.76636",
                        transform: "rotate(-90 0 58.5977)",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "4",
                        y: "8",
                        width: "4",
                        height: "6",
                        transform: "rotate(-90 4 8)",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "74",
                        y: "8",
                        width: "4",
                        height: "6",
                        transform: "rotate(-90 74 8)",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "80",
                        y: "5.85938",
                        width: "5",
                        height: "50.785",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "81.0938",
                        y: "58.5977",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "78.1875",
                        y: "62.5049",
                        width: "3.90654",
                        height: "3.90654",
                        fill: t
                    }), (0,
                    r.jsx)("rect", {
                        x: "75.2344",
                        y: "58.5977",
                        width: "3.90654",
                        height: "9.76636",
                        transform: "rotate(-90 75.2344 58.5977)",
                        fill: t
                    }), (0,
                    r.jsx)("path", {
                        d: "M32 38L32 32L35 32L35 29L38 29L38 26L41 26L41 23L44 23L44 26L47 26L47 29L50 29L50 32L53 32L53 38L50 38L50 35L47 35L47 32L44 32L44 29L41 29L41 32L38 32L38 35L35 35L35 38L32 38Z",
                        fill: t
                    })]
                })
            })
        }
        ;
        var ea = er;
        let ei = e=>{
            let {color: t, colorDisabled: n} = e;
            return (0,
            r.jsxs)("div", {
                className: O().arrowBtns,
                children: [(0,
                r.jsx)("div", {
                    children: (0,
                    r.jsx)(ea, {
                        color: n
                    })
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)(J, {
                        color: t
                    }), (0,
                    r.jsx)(ee, {
                        color: n
                    }), (0,
                    r.jsx)(en, {
                        color: t
                    })]
                })]
            })
        }
        ;
        var eo = ei
          , e_ = n(6619);
        function ec(e) {
            let {endGame: t, closeModal: n, showModal: a, sound: i} = e
              , [o,_] = (0,
            c.useState)(0)
              , [s,l] = (0,
            c.useState)("")
              , [b,d] = (0,
            c.useState)(0)
              , f = (0,
            c.useRef)(0)
              , u = (0,
            c.useRef)(null)
              , g = (0,
            c.useRef)(null)
              , w = (e,t)=>{
                _(e),
                l(t),
                d((Date.now() - f.current) / 1e3)
            }
              , h = ()=>{
                f.current = Date.now()
            }
            ;
            (0,
            c.useEffect)(()=>{
                (0,
                e_.Z)(w, h)
            }
            , []),
            (0,
            c.useEffect)(()=>{
                let e = g.current;
                return e && e.load(),
                ()=>{
                    g.current && g.current.pause()
                }
            }
            , []),
            (0,
            c.useEffect)(()=>{
                var e;
                o && (console.log("new score:", o, "msg:", s),
                t(o, b, s),
                i && g.current && (g.current.volume = 1,
                g.current.play()),
                null === (e = u.current) || void 0 === e || e.focus())
            }
            , [o, s, b]),
            (0,
            c.useEffect)(()=>{
                u.current && document.activeElement !== u.current && u.current.focus()
            }
            ),
            (0,
            c.useEffect)(()=>{
                function e(e) {
                    u.current && !u.current.contains(e.target) && e.preventDefault()
                }
                return document.addEventListener("mousedown", e),
                ()=>{
                    document.removeEventListener("mousedown", e)
                }
            }
            , [u]);
            let m = e=>{
                e.preventDefault(),
                a && 32 === e.keyCode && n()
            }
            ;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("audio", {
                    ref: g,
                    src: "/assets/sounds/mixkit-retro-arcade-game-over-470.webm"
                }), (0,
                r.jsx)("div", {
                    className: O().gameContainer,
                    children: (0,
                    r.jsx)("canvas", {
                        id: "game",
                        width: 650,
                        height: 400,
                        tabIndex: 1,
                        onKeyDownCapture: e=>m(e),
                        onKeyDown: e=>m(e),
                        ref: u,
                        style: {
                            outline: "none"
                        }
                    })
                })]
            })
        }
        let es = e=>{
            let {bestScore: t, starkName: n, address: a, score: i, setShowModal: o} = e;
            return (0,
            r.jsx)(Z, {
                message: (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsxs)("div", {
                        className: O().modalTitle,
                        children: [(0,
                        r.jsx)("img", {
                            src: "/assets/front/duo_avatar.webp",
                            alt: "Everai Duo Avatar"
                        }), (0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsx)("p", {
                                children: "Jirel:"
                            }), n ? t ? (0,
                            r.jsxs)("p", {
                                children: ["Hey nice you beat your previous score!", "You need to sign a message and tweet to save your score."]
                            }) : (0,
                            r.jsxs)(r.Fragment, {
                                children: [(0,
                                r.jsxs)("p", {
                                    children: ["You ", (0,
                                    r.jsx)("span", {
                                        className: O().red,
                                        children: "died"
                                    }), "..."]
                                }), (0,
                                r.jsx)("p", {
                                    children: "Want to play again?"
                                })]
                            }) : (0,
                            r.jsx)(r.Fragment, {
                                children: (0,
                                r.jsxs)("p", {
                                    children: ["Nice try... Enough practice now! Go get your", " ", (0,
                                    r.jsx)("span", {
                                        className: O().yellow,
                                        children: ".STARK"
                                    }), " name to play for prizes!"]
                                })
                            })]
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: O().modalAction,
                        children: n ? t ? (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsxs)("div", {
                                className: O().btnShare,
                                onClick: ()=>window.open("https://twitter.com/intent/tweet?text=Just%20achieved%20an%20".concat(null == i ? void 0 : i.toFixed(2), "s%20score%20in%20%23StarkFighter%20%F0%9F%95%B9%EF%B8%8F%20!%20%20-%20").concat(n, "%0A%0AThink%20you%20can%20outscore%20me%20%3F%20%0A%0AGive%20it%20a%20shot%20at%20starkfighter.xyz%20and%20stand%20a%20chance%20to%20win%20over%20%2410%2C000%20worth%20of%20%23Starknet%20prizes%20!")) && o && o(!1),
                                children: [(0,
                                r.jsx)(l(), {
                                    src: "/assets/front/twitter.svg",
                                    alt: "Twitter icon",
                                    width: 25,
                                    height: 25
                                }), (0,
                                r.jsx)("div", {
                                    children: "Tweet to participate !"
                                })]
                            }), (0,
                            r.jsx)("p", {
                                className: O().flash,
                                children: "Press space to play again"
                            })]
                        }) : (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("p", {
                                style: {
                                    color: "#FFF",
                                    lineHeight: "26px",
                                    marginTop: "40px"
                                },
                                children: "You don't need to sign a message when your make a score lower than your best score"
                            }), (0,
                            r.jsx)("br", {}), (0,
                            r.jsx)("p", {
                                className: O().flash,
                                children: "Press space to play again"
                            })]
                        }) : (0,
                        r.jsx)(r.Fragment, {
                            children: (0,
                            r.jsx)("div", {
                                className: O().btnGetStark,
                                onClick: ()=>window.open("https://app.starknet.id"),
                                style: {
                                    marginTop: "45px"
                                },
                                children: (0,
                                r.jsx)("div", {
                                    children: "Get your .STARK domain"
                                })
                            })
                        })
                    })]
                })
            })
        }
        ;
        var el = es;
        let eb = e=>{
            let {starkName: t, bestScore: n, updateModal: a, setPlayerBestScore: i, sound: o} = e
              , {serverUrl: _} = A()
              , {status: s, address: l, account: b} = (0,
            j.useAccount)()
              , d = "connected" === s
              , [f,u] = (0,
            c.useState)(!1)
              , [g,w] = (0,
            c.useState)(!1)
              , [h,m] = (0,
            c.useState)(0)
              , x = (e,r,a)=>{
                if (m(e),
                t && b) {
                    if (e > n) {
                        w(!0),
                        i(e),
                        u(!0);
                        let t = {
                            types: {
                                StarkNetDomain: [{
                                    name: "name",
                                    type: "string"
                                }, {
                                    name: "version",
                                    type: "felt"
                                }, {
                                    name: "chainId",
                                    type: "felt"
                                }],
                                Score: [{
                                    name: "score",
                                    type: "felt"
                                }]
                            },
                            primaryType: "Score",
                            domain: {
                                name: "StarkFighter",
                                version: "1",
                                chainId: q.lC.encodeShortString("SN_MAIN")
                            },
                            message: {
                                score: Math.trunc(1e3 * e).toString()
                            }
                        };
                        b.signMessage(t).then(t=>{
                            (0,
                            I.Z)({
                                method: "post",
                                url: "https://".concat(_, "/send_score"),
                                data: {
                                    score: e,
                                    duration: r,
                                    death_message: a,
                                    address: l,
                                    signature: t
                                }
                            })
                        }
                        ).catch(e=>{
                            console.log("Error while signing message", e)
                        }
                        )
                    } else
                        u(!0)
                } else
                    u(!0)
            }
              , p = ()=>{
                w(!1),
                u(!1)
            }
            ;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: O().gameDisplay,
                    style: {
                        outline: "none"
                    },
                    children: [(0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)(z, {
                            color: "rgba(127, 148, 200, 0.5)"
                        }), (0,
                        r.jsx)("p", {
                            style: {
                                color: "rgba(127, 148, 200, 0.5)"
                            },
                            children: "Pause"
                        })]
                    }), d && l ? (0,
                    r.jsx)(r.Fragment, {
                        children: (0,
                        r.jsxs)("div", {
                            className: O().game,
                            children: [(0,
                            r.jsx)("div", {
                                className: O().gameParent,
                                children: (0,
                                r.jsx)(ec, {
                                    endGame: x,
                                    closeModal: p,
                                    showModal: f,
                                    sound: o
                                })
                            }), f ? t ? (0,
                            r.jsx)(el, {
                                bestScore: g,
                                starkName: t,
                                address: l,
                                score: h,
                                setShowModal: p
                            }) : (0,
                            r.jsx)(el, {
                                bestScore: !1,
                                starkName: null,
                                address: l
                            }) : ""]
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: O().game,
                        children: (0,
                        r.jsx)(X, {
                            updateModal: a
                        })
                    }), (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)(eo, {
                            color: "rgba(127, 148, 200, 0.5)",
                            colorDisabled: "rgba(127, 148, 200, 0.3)"
                        }), (0,
                        r.jsx)("p", {
                            style: {
                                color: "rgba(127, 148, 200, 0.5)"
                            },
                            children: "Rotate"
                        })]
                    })]
                })
            })
        }
        ;
        var ed = eb
          , ef = n(365)
          , eu = n.n(ef);
        let eg = ()=>(0,
        r.jsxs)("div", {
            className: eu().sponsors,
            children: [(0,
            r.jsxs)("div", {
                className: eu().sponsorsContainer,
                children: [(0,
                r.jsxs)("div", {
                    className: eu().title,
                    children: [(0,
                    r.jsx)("div", {
                        className: eu().separator,
                        children: (0,
                        r.jsx)("img", {
                            src: "/assets/front/sep.webp",
                            alt: "separator line"
                        })
                    }), (0,
                    r.jsx)("h2", {
                        children: "Alpha Sponsors"
                    }), (0,
                    r.jsx)("div", {
                        className: eu().separator,
                        children: (0,
                        r.jsx)("img", {
                            src: "/assets/front/sep.webp",
                            alt: "separator line"
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: eu().alphaSponsors,
                    children: [(0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Starknet-ID.svg",
                        alt: "logo Starknet.id",
                        width: 0,
                        height: 0,
                        style: {
                            marginTop: "10px"
                        }
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Nostra.svg",
                        alt: "logo Argent",
                        width: 0,
                        height: 0,
                        style: {
                            marginTop: "10px"
                        }
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Braavos.svg",
                        alt: "logo Braavos",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Argent.svg",
                        alt: "logo Argent",
                        width: 0,
                        height: 0
                    })]
                })]
            }), (0,
            r.jsxs)("div", {
                className: eu().sponsorsContainer,
                children: [(0,
                r.jsxs)("div", {
                    className: eu().title,
                    children: [(0,
                    r.jsx)("div", {
                        className: eu().separator,
                        children: (0,
                        r.jsx)("img", {
                            src: "/assets/front/sep.webp",
                            alt: "separator line"
                        })
                    }), (0,
                    r.jsx)("h2", {
                        children: "Beta Sponsors"
                    }), (0,
                    r.jsx)("div", {
                        className: eu().separator,
                        children: (0,
                        r.jsx)("img", {
                            src: "/assets/front/sep.webp",
                            alt: "separator line"
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: eu().betaSponsors,
                    children: [(0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Starknet.svg",
                        alt: "logo Starknet",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Carbonable.svg",
                        alt: "logo Carbonable",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Briq.svg",
                        alt: "logo Briq",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logoeverai.svg",
                        alt: "logo Everai",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-AVNU.svg",
                        alt: "logo AVNU",
                        width: 180,
                        height: 100
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: eu().betaSponsors,
                    children: [(0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Snapshot.svg",
                        alt: "logo Snapshot",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Cartridge.svg",
                        alt: "logo Cartridge",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Realms.svg",
                        alt: "logo Realms",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Hashtack.svg",
                        alt: "logo Hashtack",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Matchbox.svg",
                        alt: "logo Matchbox",
                        width: 0,
                        height: 0
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: eu().betaSponsors,
                    children: [(0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Pragma.svg",
                        alt: "logo Pragma",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Only-Dust.svg",
                        alt: "logo Only Dust",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Myswap.svg",
                        alt: "logo MySwap",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-SithSwap.svg",
                        alt: "logo SithSwap",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Starkscan.svg",
                        alt: "logo Starkscan",
                        width: 0,
                        height: 0
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: eu().betaSponsors,
                    children: [(0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-FocusTree.svg",
                        alt: "logo Focus Tree",
                        width: 0,
                        height: 0
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Influence.svg",
                        alt: "logo Influence",
                        width: 140,
                        height: 0,
                        style: {
                            height: "auto"
                        }
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logozklend.svg",
                        alt: "logo ZkLend",
                        width: 100,
                        height: 0,
                        style: {
                            height: "auto"
                        }
                    }), (0,
                    r.jsx)(l(), {
                        src: "/assets/sponsors/logo-Checkpoint.svg",
                        alt: "logo Checkpoint",
                        width: 100,
                        height: 0,
                        style: {
                            height: "auto"
                        }
                    }), (0,
                    r.jsx)("div", {
                        className: eu().placeholder
                    })]
                })]
            })]
        });
        var ew = eg
          , eh = n(6908)
          , em = n.n(eh)
          , ex = {
            src: "/_next/static/media/argentx.180b7c02.webp",
            height: 43,
            width: 43,
            blurDataURL: "data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSB8AAAABH6CQbQTIX3YA92pERFwYBNk2Qzvv0AZyhoj+h7FnAFZQOCBUAAAA8AEAnQEqCAAIAAJAOCUAToAj//giXpoAAP78Qv1xsPHzjeLlBYi9vEd1OpuBZzFF9D5NWjQ+d/RulMILS32vdbxVnJCo+tv+c9LSoDlAx//YSAAA",
            blurWidth: 8,
            blurHeight: 8
        }
          , ep = {
            src: "/_next/static/media/braavos.7ee27e66.webp",
            height: 42,
            width: 42,
            blurDataURL: "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAIw8UIAAAAABB1dhAAAABN7fDw60kABL7a6ejZugRF7tH7/NDuQEm8Cnd2C79ESf/bOTnd/0Qb4f8ZHv/gGQBWUDggUAAAAFACAJ0BKggACAACQDglsAJ0ugEmAAt0oXiUgAD+9TWONNiXADTvd9Elz/6ND3s9fNZCflQff0OTFR/9Gb+wB/r+r4oZ06uPxySfZb0OAAAA",
            blurWidth: 8,
            blurHeight: 8
        }
          , ey = n(8492)
          , ev = n.n(ey)
          , ej = n(2172);
        let eS = e=>{
            let {title: t, message: n, closeModal: a, open: i, canClose: o} = e
              , _ = (e,t)=>{
                (o || !t || "backdropClick" != t) && (null == a || a())
            }
            ;
            return (0,
            r.jsx)(ej.Z, {
                open: i,
                onClose: _,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: (0,
                r.jsxs)("div", {
                    className: ev().menu,
                    children: [(0,
                    r.jsxs)("div", {
                        className: ev().menu_title,
                        children: [(0,
                        r.jsx)("p", {
                            children: t
                        }), o ? (0,
                        r.jsx)("img", {
                            src: "/assets/front/close.svg",
                            width: 50,
                            onClick: a,
                            className: ev().menu_close
                        }) : null]
                    }), n]
                })
            })
        }
        ;
        var eA = eS;
        let ek = {
            argentX: ex,
            braavos: ep
        }
          , eL = {
            argentX: "Argent X",
            braavos: "Braavos"
        }
          , eN = e=>{
            let {isOpen: t=!1, updateModal: n} = e
              , {connect: a, connectors: i, refresh: o} = (0,
            j.useConnectors)();
            (0,
            c.useEffect)(()=>{
                let e = setInterval(o, 5e3);
                return ()=>clearInterval(e)
            }
            , [o]);
            let _ = e=>{
                a(e),
                n(!1)
            }
              , s = i.sort((e,t)=>{
                let n = eL[e.id()] || ""
                  , r = eL[t.id()] || "";
                return n.localeCompare(r)
            }
            );
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)(eA, {
                    open: !0,
                    title: "Connect a Starknet wallet",
                    closeModal: ()=>n(!1),
                    canClose: !0,
                    message: (0,
                    r.jsx)("div", {
                        className: em().modalOptions,
                        children: s.map(e=>(0,
                        r.jsxs)("div", {
                            className: em().modalOption,
                            onClick: ()=>_(e),
                            children: [(0,
                            r.jsx)(l(), {
                                src: ek[e.id()],
                                alt: e.id(),
                                className: "",
                                width: 40,
                                height: 40,
                                priority: !0
                            }), (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsx)("p", {
                                    children: eL[e.id()]
                                }), (0,
                                r.jsx)("p", {
                                    children: e.available() ? "Connect your ".concat(eL[e.id()], " wallet") : "Installation required"
                                })]
                            })]
                        }, e.id()))
                    })
                })
            })
        }
        ;
        var eC = eN;
        let eP = e=>{
            let {isWrongNetwork: t, setIsWrongNetwork: n} = e
              , {library: a} = (0,
            j.useStarknet)()
              , {address: i} = (0,
            j.useAccount)()
              , {disconnect: o} = (0,
            j.useConnectors)();
            (0,
            c.useEffect)(()=>{
                i && (a.chainId !== E.mainnet ? n(!0) : n(!1))
            }
            , [a, i]);
            let _ = ()=>{
                o(),
                n(!1)
            }
            ;
            return t ? (0,
            r.jsx)(eA, {
                open: !0,
                title: "Wrong network",
                closeModal: ()=>n(!1),
                canClose: !1,
                message: (0,
                r.jsxs)("div", {
                    className: em().container,
                    children: [(0,
                    r.jsx)("p", {
                        children: "This app only supports Starknet Mainnet, you have to change your network to be able use it."
                    }), (0,
                    r.jsx)("div", {
                        className: em().disconnectButton,
                        children: (0,
                        r.jsx)(p, {
                            onClick: ()=>_(),
                            margin: "15px auto 0",
                            color: "blue",
                            size: "1rem",
                            flash: !1,
                            children: "Disconnect"
                        })
                    })]
                })
            }) : null
        }
        ;
        var eF = eP
          , eE = n(9519)
          , eB = n.n(eE);
        let eM = ()=>{
            let[e,t] = (0,
            c.useState)(1)
              , n = 5;
            return (0,
            r.jsx)("div", {
                className: eB().tutorial,
                children: (0,
                r.jsx)(Z, {
                    message: (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsxs)("div", {
                            className: eB().modalHeader,
                            children: [(0,
                            r.jsx)("img", {
                                src: "/assets/front/duo_avatar.webp",
                                height: 130,
                                alt: "Everai Duo Avatar"
                            }), (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsx)("p", {
                                    className: eB().modalTitle,
                                    children: "Welcome to StarkFighter!"
                                }), (0,
                                r.jsx)("p", {
                                    children: "Here's how it works in a few steps."
                                })]
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: eB().modalAction,
                            children: (0,
                            r.jsxs)(r.Fragment, {
                                children: [(0,
                                r.jsxs)("p", {
                                    className: eB().title,
                                    children: ["Step ", e]
                                }), 1 === e && (0,
                                r.jsxs)("p", {
                                    className: eB().description,
                                    children: ["Are you ready to prove your piloting skills and become a StarkFighter ? First choose a Starknet wallet between\xa0", (0,
                                    r.jsx)("a", {
                                        href: "https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb",
                                        target: "_blank",
                                        className: eB().yellowLink,
                                        children: "Argent-X"
                                    }), ",\xa0", (0,
                                    r.jsx)("a", {
                                        href: "https://chrome.google.com/webstore/detail/braavos-smart-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma",
                                        target: "_blank",
                                        className: eB().yellowLink,
                                        children: "Braavos"
                                    }), "\xa0and\xa0", (0,
                                    r.jsx)("a", {
                                        href: "https://twitter.com/TheEverai/status/1644374543811657728",
                                        target: "_blank",
                                        className: eB().yellowLink,
                                        children: "Cartridge"
                                    }), "."]
                                }), 2 === e && (0,
                                r.jsxs)("p", {
                                    className: eB().description,
                                    children: ["Once you have a Starknet Wallet installed, you can play ! But if you want to", " ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "win prizes"
                                    }), " and appear on the leaderboard, you need to", " ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "register a stark domain or subdomain name."
                                    })]
                                }), 3 === e && (0,
                                r.jsxs)("p", {
                                    className: eB().description,
                                    children: ["You can register a domain directly on\xa0", (0,
                                    r.jsx)("a", {
                                        href: "https://app.starknet.id",
                                        className: eB().yellowLink,
                                        children: "Starknet ID"
                                    }), "\xa0or register a subdomain using one of the Starknet projects\xa0", (0,
                                    r.jsx)("a", {
                                        href: "https://linktr.ee/starknet_id",
                                        className: eB().yellowLink,
                                        children: "distribution app."
                                    })]
                                }), 4 === e && (0,
                                r.jsxs)("p", {
                                    className: eB().description,
                                    children: ["You have the chance to", " ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "win over $12,000 "
                                    }), " ", "worth of prizes ! If you're one of the", " ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "top 50 players"
                                    }), ", you'll receive ethers as your prize, and in the", " ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "top 10"
                                    }), ", you’ll get also ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "exclusive NFTs"
                                    }), "!"]
                                }), 5 === e && (0,
                                r.jsxs)("p", {
                                    className: eB().description,
                                    children: ["You only have ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "3 weeks"
                                    }), " ", "to show your Pilot skills. The StarkFighter campaign ends on", " ", (0,
                                    r.jsx)("span", {
                                        className: eB().yellow,
                                        children: "May 19 at 2 PM CET"
                                    }), ". Competition will be hard, may the best Starknet Fighter win\uD83C\uDF96"]
                                })]
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: eB().pagination,
                            children: [(0,
                            r.jsx)("div", {
                                className: "".concat(eB().btnPagination, " ").concat(1 === e ? eB().disabled : eB().enabled),
                                onClick: ()=>e > 1 && t(e - 1),
                                children: (0,
                                r.jsx)("div", {
                                    className: eB().btnParent,
                                    children: (0,
                                    r.jsx)("div", {
                                        className: eB().btnContainer,
                                        children: "< Prev"
                                    })
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: "".concat(eB().btnPagination, " ").concat(e === n ? eB().disabled : eB().enabled, " ").concat(e !== n ? eB().flash : null),
                                onClick: ()=>e < n && t(e + 1),
                                children: (0,
                                r.jsx)("div", {
                                    className: eB().btnParent,
                                    children: (0,
                                    r.jsx)("div", {
                                        className: eB().btnContainer,
                                        children: "> Next"
                                    })
                                })
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var eT = eM;
        let eD = ()=>(0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsx)("div", {
                className: _().logo,
                children: (0,
                r.jsx)(l(), {
                    src: "/assets/front/starkfighter_logo_everai.webp",
                    alt: "starkship rocket",
                    width: 0,
                    height: 0,
                    priority: !0,
                    sizes: "100vw",
                    style: {
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px"
                    }
                })
            }), (0,
            r.jsxs)("div", {
                className: _().message,
                children: [(0,
                r.jsx)(l(), {
                    src: "/assets/front/bubble.svg",
                    alt: "bubble message mobile",
                    width: 200,
                    height: 0,
                    style: {
                        height: "auto"
                    }
                }), (0,
                r.jsx)(l(), {
                    src: "/assets/front/arcade_error.svg",
                    alt: "arcade_error icon mobile",
                    width: 160,
                    height: 0,
                    style: {
                        height: "auto",
                        margin: "9px auto auto"
                    }
                })]
            })]
        });
        var eI = eD;
        let eH = (e,t)=>{
            let n = eR(e + t)
              , r = (n < 0 ? -n : n) % B.length;
            return B[r]
        }
          , eR = function(e) {
            return e.split("").reduce(function(e, t) {
                return (e = (e << 5) - e + t.charCodeAt(0)) & e
            }, 0)
        };
        var eq = !0;
        function eW(e) {
            let {address: t} = (0,
            j.useAccount)()
              , [n,a] = (0,
            c.useState)(0)
              , [o,s] = (0,
            c.useState)("")
              , [l,b] = (0,
            c.useState)()
              , [f,g] = (0,
            c.useState)(0)
              , [w,h] = (0,
            c.useState)(!1)
              , [m,x] = (0,
            c.useState)(!1)
              , [p,y] = (0,
            c.useState)(!1)
              , [v,S] = (0,
            c.useState)(!1)
              , k = (0,
            c.useRef)(null)
              , N = (0,
            c.useRef)(null)
              , [C,P] = (0,
            c.useState)(!1)
              , [F,E] = (0,
            c.useState)(!1)
              , {serverUrl: B, updateServerUrl: M, starknetIdNavigator: T} = A()
              , [D,H] = (0,
            c.useState)(!0)
              , q = (0,
            c.useRef)(null);
            (0,
            c.useEffect)(()=>{
                t && z(t)
            }
            , [t]),
            (0,
            c.useEffect)(()=>{
                let t = e.ip
                  , n = navigator.userAgent
                  , r = eH(t, n);
                M(r)
            }
            , []),
            (0,
            c.useEffect)(()=>{
                let e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                y(e),
                S(window.innerWidth < 768)
            }
            , []),
            (0,
            c.useEffect)(()=>{
                function e() {
                    S(window.innerWidth < 768)
                }
                return window.addEventListener("resize", e),
                ()=>{
                    window.removeEventListener("resize", e)
                }
            }
            , []),
            (0,
            c.useEffect)(()=>{
                let e = k.current;
                e.load(),
                e.addEventListener("canplaythrough", ()=>{
                    e.play()
                }
                ),
                e.addEventListener("ended", ()=>{
                    P(!0)
                }
                )
            }
            , []),
            (0,
            c.useEffect)(()=>{
                let e = N.current;
                e.load(),
                e.addEventListener("play", ()=>{
                    e.play()
                }
                ),
                e.addEventListener("ended", ()=>{
                    E(!1)
                }
                )
            }
            , []),
            (0,
            c.useEffect)(()=>{
                F || (0 === n ? N.current.src = "/assets/animations/1_2.webm" : N.current.src = "/assets/animations/2_1.webm")
            }
            , [F]),
            (0,
            c.useEffect)(()=>{
                let e = q.current;
                return e.load(),
                e.addEventListener("canplaythrough", ()=>{
                    q.current.volume = .5,
                    e.play(),
                    H(!0)
                }
                ),
                ()=>{
                    q.current && q.current.pause()
                }
            }
            , []);
            let W = ()=>{
                D ? (q.current.pause(),
                H(!1)) : (q.current.play(),
                H(!0))
            }
              , O = e=>{
                E(!0);
                let t = N.current;
                t.play();
                let r = q.current;
                1 === e ? (r.src = "/assets/sounds/Evacuation.webm",
                r.play(),
                H(!0)) : 1 == n && (r.src = "/assets/sounds/TheSource.webm",
                r.play(),
                H(!0)),
                a(e)
            }
              , V = e=>{
                h(e)
            }
              , z = e=>{
                T && T.getStarkName(e.toLowerCase()).then(t=>{
                    s(t),
                    t && (0,
                    I.Z)({
                        method: "post",
                        responseType: "json",
                        url: "https://".concat(B, "/fetch_user_score"),
                        data: {
                            user_addr: e
                        }
                    }).then(e=>{
                        e.data && g(e.data.score)
                    }
                    ).catch(e=>{
                        g(0)
                    }
                    )
                }
                )
            }
            ;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(i(), {
                    children: [(0,
                    r.jsx)("title", {
                        children: "StarkFighter"
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }), (0,
                    r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0,
                    r.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })]
                }), (0,
                r.jsx)("div", {
                    className: _().videoContainer,
                    style: {
                        zIndex: C ? "-1" : "1000",
                        display: C ? "none" : ""
                    },
                    children: (0,
                    r.jsx)("video", {
                        ref: k,
                        muted: !0,
                        autoPlay: !0,
                        children: (0,
                        r.jsx)("source", {
                            src: "/assets/animations/1.webm",
                            type: "video/webm"
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    className: _().videoContainer,
                    style: {
                        zIndex: F ? "1000" : "-1",
                        display: F || !C ? "" : "none"
                    },
                    children: (0,
                    r.jsx)("video", {
                        ref: N,
                        muted: !0,
                        children: (0,
                        r.jsx)("source", {
                            src: "/assets/animations/1_2.webm",
                            type: "video/webm"
                        })
                    })
                }), (0,
                r.jsx)("audio", {
                    src: "/assets/sounds/TheSource.webm",
                    ref: q,
                    loop: !0
                }), p || v ? (0,
                r.jsx)("div", {
                    className: _().mobileScreen,
                    children: (0,
                    r.jsx)(eI, {})
                }) : (0,
                r.jsxs)("main", {
                    className: _().main,
                    style: {
                        backgroundImage: 'url("/assets/front/background'.concat(0 === n ? "-0" : "", '.webp")'),
                        height: 2 === n || 3 === n ? "auto" : "100vh",
                        minHeight: "100vh",
                        display: F || !C ? "none" : ""
                    },
                    children: [(0,
                    r.jsx)(L, {
                        starkName: o,
                        section: n,
                        updateSection: O,
                        playerBestScore: f,
                        updateModal: V
                    }), 1 === n ? (0,
                    r.jsx)(ed, {
                        updateModal: V,
                        starkName: o,
                        bestScore: f,
                        setPlayerBestScore: g,
                        sound: D
                    }) : 2 === n ? (0,
                    r.jsx)(ew, {}) : 3 === n ? (0,
                    r.jsx)(R, {}) : 4 === n ? (0,
                    r.jsx)(eT, {}) : (0,
                    r.jsx)(u, {
                        updateSection: O,
                        bestPlayers: l,
                        sound: D
                    }), (0,
                    r.jsx)("div", {
                        className: _().soundControls,
                        onClick: ()=>W(),
                        children: (0,
                        r.jsx)("img", {
                            alt: "sound icon",
                            src: "".concat(D ? "/assets/front/sound-on.svg" : "/assets/front/sound-off.svg")
                        })
                    }), w ? (0,
                    r.jsx)(eC, {
                        isOpen: w,
                        updateModal: V
                    }) : null, (0,
                    r.jsx)(d, {}), t ? (0,
                    r.jsx)(eF, {
                        isWrongNetwork: m,
                        setIsWrongNetwork: x
                    }) : null]
                })]
            })
        }
    },
    6324: function(e) {
        e.exports = {
            "nq-button": "Button_nq-button__G4rbP",
            "nq-button-s": "Button_nq-button-s__BVdjl",
            "nq-button-blue": "Button_nq-button-blue__ImZXv",
            "nq-button-yellow": "Button_nq-button-yellow___zKoi",
            "nq-button-pill": "Button_nq-button-pill__92TfX",
            "nq-button-flash": "Button_nq-button-flash__lQj54",
            flash: "Button_flash__knfPs"
        }
    },
    6908: function(e) {
        e.exports = {
            modalOptions: "Connect_modalOptions__402nL",
            modalOption: "Connect_modalOption__kYaFJ"
        }
    },
    4935: function(e) {
        e.exports = {
            connect: "Header_connect__CvFLP",
            connectButton: "Header_connectButton__5_hyB",
            center: "Header_center__Zh3Nt",
            highScore: "Header_highScore__7xKNf",
            hasScore: "Header_hasScore__bxWFk",
            noScore: "Header_noScore__BJUu9",
            starkName: "Header_starkName__gySyO",
            starkAddr: "Header_starkAddr__qQck1",
            logoLarge: "Header_logoLarge__7SlSJ",
            logo: "Header_logo__6vBZG",
            logoSmall: "Header_logoSmall__GjcZW",
            btnBack: "Header_btnBack__ht43l",
            logout: "Header_logout__W5r9w"
        }
    },
    7953: function(e) {
        e.exports = {
            main: "Home_main__nLjiQ",
            videoContainer: "Home_videoContainer__8PFB1",
            center: "Home_center__4BFgC",
            thirteen: "Home_thirteen__cMI_k",
            rotate: "Home_rotate____XsI",
            footer: "Home_footer____T7K",
            menu: "Home_menu__2ncGe",
            flashableIcon: "Home_flashableIcon__545r2",
            flash: "Home_flash__JdMZ7",
            homeCards: "Home_homeCards__eGncZ",
            homeCardParent: "Home_homeCardParent__c6sN5",
            homeCardContainer: "Home_homeCardContainer__5_e1u",
            homeCard: "Home_homeCard__iK3QC",
            homeCardRank: "Home_homeCardRank___3YOo",
            homeCard2: "Home_homeCard2__5til6",
            homeCardName: "Home_homeCardName__uKVaY",
            homeCardTime: "Home_homeCardTime__diGNM",
            mobileScreen: "Home_mobileScreen__14WAI",
            logo: "Home_logo__27_tb",
            message: "Home_message__qpB0D",
            soundControls: "Home_soundControls__I85je",
            content: "Home_content__Zy02X",
            vercelLogo: "Home_vercelLogo__dtSk9"
        }
    },
    5740: function(e) {
        e.exports = {
            leaderboard: "Leaderboard_leaderboard__LPUjY",
            rank: "Leaderboard_rank__riFQU",
            name: "Leaderboard_name__5WFat",
            first: "Leaderboard_first__HxnsX",
            second: "Leaderboard_second__4inNQ",
            third: "Leaderboard_third__8QGkl",
            score: "Leaderboard_score__twnyk",
            prize: "Leaderboard_prize__vW4h_",
            leaderboardFirst: "Leaderboard_leaderboardFirst__dPX4_",
            pagination: "Leaderboard_pagination__cGYmG",
            btnPagination: "Leaderboard_btnPagination__0UCTq",
            btnParent: "Leaderboard_btnParent__GOpc3",
            btnContainer: "Leaderboard_btnContainer__lddM1",
            enabled: "Leaderboard_enabled__iMpm2",
            disabled: "Leaderboard_disabled__tc3RH",
            pages: "Leaderboard_pages__kUlsM",
            pageNb: "Leaderboard_pageNb__viLjY",
            pageSelected: "Leaderboard_pageSelected__MkgZW",
            overall: "Leaderboard_overall__WH8sG",
            briq: "Leaderboard_briq__BzVha"
        }
    },
    8492: function(e) {
        e.exports = {
            menu: "Modal_menu__NuhzL",
            blackFilter: "Modal_blackFilter__zAAu4",
            menu_close: "Modal_menu_close__zavAG",
            menu_title: "Modal_menu_title__DVbIo",
            buttonContainer: "Modal_buttonContainer__pfvS8",
            flex: "Modal_flex__eg_nk"
        }
    },
    4561: function(e) {
        e.exports = {
            pixelModalParent: "PixelModal_pixelModalParent__ez1G1",
            pixelModalContainer: "PixelModal_pixelModalContainer__9EfS9"
        }
    },
    3419: function(e) {
        e.exports = {
            game: "Play_game__N0BuY",
            gameParent: "Play_gameParent__Qf_28",
            gameContainer: "Play_gameContainer__cIofH",
            gameDisplay: "Play_gameDisplay__1WEO9",
            arrowBtns: "Play_arrowBtns__vMLfb",
            playModal: "Play_playModal__D3COl",
            modalTitle: "Play_modalTitle__c6mGb",
            red: "Play_red__O7Lzq",
            yellow: "Play_yellow__iAlO6",
            modalAction: "Play_modalAction__wrha6",
            btnShare: "Play_btnShare__G0h1_",
            flash: "Play_flash__qoSZq",
            btnGetStark: "Play_btnGetStark__waVOK",
            pressSpace: "Play_pressSpace__kBokj",
            link: "Play_link__5XSfv"
        }
    },
    365: function(e) {
        e.exports = {
            sponsors: "Sponsors_sponsors__xeW2w",
            title: "Sponsors_title__krSNj",
            separator: "Sponsors_separator__BoJwm",
            sponsorsContainer: "Sponsors_sponsorsContainer__BMA9x",
            alphaSponsors: "Sponsors_alphaSponsors__gNrDk",
            betaSponsors: "Sponsors_betaSponsors__gMWbX",
            placeholder: "Sponsors_placeholder__FmKyj"
        }
    },
    9519: function(e) {
        e.exports = {
            tutorial: "Tutorial_tutorial__oeRLj",
            modalHeader: "Tutorial_modalHeader__r_9YP",
            red: "Tutorial_red__43OVN",
            yellow: "Tutorial_yellow__NCj32",
            yellowLink: "Tutorial_yellowLink__KP2qd",
            modalTitle: "Tutorial_modalTitle__zh4DG",
            modalAction: "Tutorial_modalAction__zv2eD",
            title: "Tutorial_title__1T0qF",
            description: "Tutorial_description__qA7kK",
            btnPagination: "Tutorial_btnPagination__AoLqE",
            btnParent: "Tutorial_btnParent__W9635",
            btnContainer: "Tutorial_btnContainer__F1c0I",
            enabled: "Tutorial_enabled___h_Pp",
            disabled: "Tutorial_disabled__y5fIT",
            pagination: "Tutorial_pagination__JgeqU",
            flash: "Tutorial_flash__wu_sE"
        }
    },
    7762: function(e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/starkfighter_bg.44ceb372.wasm"
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [214, 774, 888, 179], function() {
        return t(8312)
    }),
    _N_E = e.O()
}
]);
