import{u as p,b as u,c as h,d as j,j as a,C as g,B as f,a as i,L as r,T as t,l as y}from"./index-7ddfa65b.js";import{d as b}from"./ArrowBack-51f39989.js";import{c as w,a as n,G as v,F as S,b as L,I as l,S as I}from"./GrowError-b1623328.js";const R=w().shape({email:n().email("Invalid email").required("Required"),password:n().required("Required")}),F=()=>{const c=p(),d=u(),{state:e}=h(),{error:o,loading:x}=j(s=>s.authSlice);return a.jsx(g,{minheight:"90vh",children:a.jsxs(f,{sx:{position:"relative",maxWidth:"500px",mx:"auto",mt:"100px",backgroundColor:"primary.main",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:2,borderRadius:"10px"},children:[a.jsx(i,{sx:{position:"absolute",top:"15px",left:"10px"},children:a.jsx(r,{to:e?e.from:"/",children:a.jsx(b,{sx:{color:"secondary.main",fontSize:30}})})}),o&&a.jsx(v,{error:o,sx:()=>({position:"absolute",top:"-80px"})}),a.jsx(t,{variant:"h4",children:"Login"}),a.jsx(S,{initialValues:{email:"",password:""},validationSchema:R,onSubmit:async s=>{await c(y({email:s.email,password:s.password})).then(m=>{m.hasOwnProperty("error")||d("/contacts")})},children:a.jsxs(L,{children:[a.jsx(l,{name:"email",label:"Email"}),a.jsx(l,{name:"password",type:"password",label:"Password"}),a.jsx(I,{action:"Login",loading:x}),a.jsxs(t,{variant:"body1",sx:{mt:2,display:"flex",alignItems:"center"},children:["Don't have an account?",a.jsx(r,{to:"/register",children:a.jsx(i,{sx:{color:"secondary.main","&:hover":{color:"secondary.contrastText"}},children:"Register"})})]})]})})]})})};export{F as default};
