import{c,as as l,r as i,s as n,bc as f,bd as u}from"./index-VumGgQqC.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=c("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function C(){const{user:e}=l(),[a,t]=i.useState({});return i.useEffect(()=>{if(!e){t({});return}let o=!0;return(async()=>{const{data:r}=await n.from("perfis_trial").select("nome, telefone").eq("user_id",e.id).maybeSingle();if(!o)return;if(r){t(r);return}const{data:s}=await n.from("user_profiles").select("nome, telefone").eq("user_id",e.id).maybeSingle();o&&s&&t(s)})(),()=>{o=!1}},[e==null?void 0:e.id]),{url:i.useMemo(()=>f(e?{nome:a.nome,email:e.email,telefone:a.telefone}:void 0),[e==null?void 0:e.email,a.nome,a.telefone]),aoClicar:()=>{e&&u()}}}export{p as S,C as u};
