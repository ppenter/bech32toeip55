import{decode as e,fromWords as r,encode as o,toWords as d}from"bech32";import{stripHexPrefix as t,isValidChecksumAddress as n,toChecksumAddress as c}from"crypto-addr-codec";const u={decoder:e=>{const r=t(e);if(!n(e,null)&&r!==r.toLowerCase()&&r!==r.toUpperCase())throw Error("Invalid address checksum");return Buffer.from(t(e),"hex")},encoder:e=>c(e.toString("hex"),null),name:"ETH"};function s(e){return r=>o(e,d(r))}const f=(o,d)=>{return{decoder:(t=d,o=>{const{prefix:d,words:n}=e(o);if(d!==t)throw Error("Unrecognised address format");return Buffer.from(r(n))}),encoder:s(d),name:o};var t},m=f("ETHERMINT","ethm"),a=e=>{let r=u.decoder(e);return m.encoder(r)},l=e=>{let r=m.decoder(e);return u.encoder(r)},i=f("ATMOS","atmos"),h=e=>{let r=u.decoder(e);return i.encoder(r)},p=e=>{let r=i.decoder(e);return u.encoder(r)},E=(e,r,o)=>{let d=f(r,o).decoder(e);return u.encoder(d)},w=(e,r,o)=>{let d=f(r,o),t=u.decoder(e);return d.encoder(t)};export{i as ATMOS,u as ETH,m as ETHERMINT,w as Eip55ToBech32,p as atmosToEth,E as bech32ToEip55,h as ethToAtmos,a as ethToEthermint,l as ethermintToEth};
//# sourceMappingURL=converter.modern.js.map