var ue=Object.defineProperty,he=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var P=(t,e,i)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,b=(t,e)=>{for(var i in e||(e={}))D.call(e,i)&&P(t,i,e[i]);if(M)for(var i of M(e))F.call(e,i)&&P(t,i,e[i]);return t},B=(t,e)=>he(t,de(e));var O=(t,e)=>{var i={};for(var s in t)D.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&M)for(var s of M(t))e.indexOf(s)<0&&F.call(t,s)&&(i[s]=t[s]);return i};var c=(t,e,i)=>P(t,typeof e!="symbol"?e+"":e,i);var T=(t,e,i)=>new Promise((s,o)=>{var n=u=>{try{l(i.next(u))}catch(h){o(h)}},a=u=>{try{l(i.throw(u))}catch(h){o(h)}},l=u=>u.done?s(u.value):Promise.resolve(u.value).then(n,a);l((i=i.apply(t,e)).next())});import{j as r,u as I,a as K,b as J,m as Z,c as L}from"./framer-motion-WZ_r_mAi.js";import{r as p,b as fe}from"./react-vendor-CGzxjxki.js";import{W as pe}from"./index-DwRPJfbl.js";import{L as ee}from"./react-router-BnFGage6.js";const w="https://netfluence.ca",W=`${w}/images/netfluence-og.jpg`,j={email:"info@netfluence.ca",phone:"514-792-7781",phoneHref:"tel:+15147927781",city:"Montréal, QC",linkedin:"https://www.linkedin.com/company/netfluenceinc/",instagram:"https://www.instagram.com/netfluenceinc/"},te=[{slug:"websites",title:"Websites",description:"New sites and rebuilds of old ones, built to load fast and work well on any phone."},{slug:"software",title:"Custom software",description:"Software built around how your business runs: internal tools, dashboards, automations, and connections between the systems you already use."},{slug:"applications",title:"Web and mobile apps",description:"Apps your customers or team sign into, like booking systems, product catalogues and member areas."},{slug:"hosting",title:"Hosting and maintenance",description:"We host and maintain your website, database and servers, and keep them secure and up to date."}],H=[{path:"/",source:"src/pages/HomePage.jsx",file:"index.html",name:"Home",title:"Web Design & Development in Montréal | Netfluence",description:"Netfluence is a two-person development studio in Montréal. We design, build and host websites, web apps and custom software for local businesses."},{path:"/services",source:"src/pages/ServicesPage.jsx",file:"services.html",name:"Services",title:"Websites, Custom Software, Apps & Hosting in Montréal | Netfluence",description:"Websites, custom software, web and mobile apps, and hosting and maintenance for businesses in and around Montréal, from a two-person development studio."},{path:"/portfolio",source:"src/pages/PortfolioPage.jsx",file:"portfolio.html",name:"Work",title:"Our Work: Websites for Montréal Businesses | Netfluence",description:"Five live client websites by Netfluence, a two-person studio in Montréal: a fish market, an electronics sales agency, a shopping centre, a towing company and a marketing agency."},{path:"/about",source:"src/pages/AboutPage.jsx",file:"about.html",name:"About",title:"About Netfluence | Web Developers in Montréal",description:"Netfluence is Ryan Meziane and Kui Hua Wang, a development studio in Montréal that designs, builds and hosts websites and software for local businesses."},{path:"/contact",source:"src/pages/ContactPage.jsx",file:"contact.html",name:"Contact",title:"Contact | Web and App Development in Montréal | Netfluence",description:"Tell us about your project. Send the form, email info@netfluence.ca or call 514-792-7781, and one of us will get back to you with questions and next steps."},{path:"404",source:"src/pages/NotFoundPage.jsx",file:"404.html",title:"Page not found | Netfluence",description:"This page doesn’t exist on the Netfluence site. Head back to the homepage, or go to our work, services or contact page.",noindex:!0}],ie=`${w}/#organization`,me={"@type":"ProfessionalService","@id":ie,name:"Netfluence",url:w,logo:`${w}/icon-512.png`,image:W,description:"Web, app and software development studio in Montréal, with hosting and maintenance.",email:j.email,telephone:"+1-514-792-7781",address:{"@type":"PostalAddress",addressLocality:"Montreal",addressRegion:"QC",addressCountry:"CA"},areaServed:{"@type":"City",name:"Montreal"},founder:[{"@type":"Person",name:"Ryan Meziane"},{"@type":"Person",name:"Kui Hua Wang"}],sameAs:[j.linkedin,j.instagram],hasOfferCatalog:{"@type":"OfferCatalog",name:"Development Services",itemListElement:te.map(t=>({"@type":"Offer",itemOffered:{"@type":"Service",name:t.title,description:t.description,url:`${w}/services#${t.slug}`}}))}},ge={"@type":"WebSite","@id":`${w}/#website`,name:"Netfluence",url:w,publisher:{"@id":ie}},N=t=>t==="/"?`${w}/`:`${w}${t}`,ve=t=>{var o;const e=(o=H.find(n=>n.path===t))!=null?o:H.find(n=>n.noindex),i=[{tag:"meta",attrs:{name:"description",content:e.description}}];if(e.noindex)return i.push({tag:"meta",attrs:{name:"robots",content:"noindex, follow"}}),{title:e.title,tags:i};const s=[me,ge];return e.path!=="/"&&s.push({"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:N("/")},{"@type":"ListItem",position:2,name:e.name,item:N(e.path)}]}),i.push({tag:"link",attrs:{rel:"canonical",href:N(e.path)}},{tag:"meta",attrs:{property:"og:type",content:"website"}},{tag:"meta",attrs:{property:"og:site_name",content:"Netfluence"}},{tag:"meta",attrs:{property:"og:locale",content:"en_CA"}},{tag:"meta",attrs:{property:"og:url",content:N(e.path)}},{tag:"meta",attrs:{property:"og:title",content:e.title}},{tag:"meta",attrs:{property:"og:description",content:e.description}},{tag:"meta",attrs:{property:"og:image",content:W}},{tag:"meta",attrs:{property:"og:image:width",content:"1200"}},{tag:"meta",attrs:{property:"og:image:height",content:"630"}},{tag:"meta",attrs:{property:"og:image:alt",content:"Netfluence, web and software development in Montréal"}},{tag:"meta",attrs:{name:"twitter:card",content:"summary_large_image"}},{tag:"meta",attrs:{name:"twitter:title",content:e.title}},{tag:"meta",attrs:{name:"twitter:description",content:e.description}},{tag:"meta",attrs:{name:"twitter:image",content:W}},{tag:"script",attrs:{type:"application/ld+json"},json:{"@context":"https://schema.org","@graph":s}}),{title:e.title,tags:i}},st=({path:t})=>{const{title:e,tags:i}=ve(t);return r.jsxs(pe,{children:[r.jsx("title",{children:e}),i.map(({tag:s,attrs:o,json:n})=>{var a,l;return n?r.jsx(s,B(b({},o),{children:JSON.stringify(n)}),"ld"):r.jsx(s,b({},o),(l=(a=o.name)!=null?a:o.property)!=null?l:o.rel)})]})},xe=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,$=1920*1080*4;let _e=class{constructor(e,i,s,o,n=0,a=0,l=2,u=$,h=[]){c(this,"parentElement");c(this,"canvasElement");c(this,"gl");c(this,"program",null);c(this,"uniformLocations",{});c(this,"fragmentShader");c(this,"rafId",null);c(this,"lastRenderTime",0);c(this,"currentFrame",0);c(this,"speed",0);c(this,"currentSpeed",0);c(this,"providedUniforms");c(this,"mipmaps",[]);c(this,"hasBeenDisposed",!1);c(this,"resolutionChanged",!0);c(this,"textures",new Map);c(this,"minPixelRatio");c(this,"maxPixelCount");c(this,"isSafari",ye());c(this,"uniformCache",{});c(this,"textureUnitMap",new Map);c(this,"ownerDocument");c(this,"initProgram",()=>{const e=be(this.gl,xe,this.fragmentShader);e&&(this.program=e)});c(this,"setupPositionAttribute",()=>{const e=this.gl.getAttribLocation(this.program,"a_position"),i=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i);const s=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(s),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)});c(this,"setupUniforms",()=>{const e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([i,s])=>{if(e[i]=this.gl.getUniformLocation(this.program,i),s instanceof HTMLImageElement){const o=`${i}AspectRatio`;e[o]=this.gl.getUniformLocation(this.program,o)}}),this.uniformLocations=e});c(this,"renderScale",1);c(this,"parentWidth",0);c(this,"parentHeight",0);c(this,"parentDevicePixelWidth",0);c(this,"parentDevicePixelHeight",0);c(this,"devicePixelsSupported",!1);c(this,"intersectionObserver",null);c(this,"isInViewport",!0);c(this,"resizeObserver",null);c(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([e])=>{var i;if(e!=null&&e.borderBoxSize[0]){const s=(i=e.devicePixelContentBoxSize)==null?void 0:i[0];s!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=s.inlineSize,this.parentDevicePixelHeight=s.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});c(this,"setupIntersectionObserver",()=>{const e=this.ownerDocument.defaultView;e!=null&&e.IntersectionObserver&&(this.intersectionObserver=new e.IntersectionObserver(([i])=>{var s;this.isInViewport=(s=i==null?void 0:i.isIntersecting)!=null?s:!0,this.updateCurrentSpeed()}),this.intersectionObserver.observe(this.parentElement))});c(this,"handleVisualViewportChange",()=>{var e;(e=this.resizeObserver)==null||e.disconnect(),this.setupResizeObserver()});c(this,"handleResize",()=>{var f;let e=0,i=0;const s=Math.max(1,window.devicePixelRatio),o=(f=visualViewport==null?void 0:visualViewport.scale)!=null?f:1;if(this.devicePixelsSupported){const d=Math.max(1,this.minPixelRatio/s);e=this.parentDevicePixelWidth*d*o,i=this.parentDevicePixelHeight*d*o}else{let d=Math.max(s,this.minPixelRatio)*o;if(this.isSafari){const x=Se(this.ownerDocument);d*=Math.max(1,x)}e=Math.round(this.parentWidth)*d,i=Math.round(this.parentHeight)*d}const n=Math.sqrt(this.maxPixelCount)/Math.sqrt(e*i),a=Math.min(1,n),l=Math.round(e*a),u=Math.round(i*a),h=l/Math.round(this.parentWidth);(this.canvasElement.width!==l||this.canvasElement.height!==u||this.renderScale!==h)&&(this.renderScale=h,this.canvasElement.width=l,this.canvasElement.height=u,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});c(this,"render",e=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const i=e-this.lastRenderTime;this.lastRenderTime=e,this.currentSpeed!==0&&(this.currentFrame+=i*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});c(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});c(this,"setTextureUniform",(e,i)=>{if(!i.complete||i.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);const s=this.textures.get(e);s&&this.gl.deleteTexture(s),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);const o=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+o);const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const a=this.gl.getError();if(a!==this.gl.NO_ERROR||n===null){console.error("Paper Shaders: WebGL error when uploading texture:",a);return}this.textures.set(e,n);const l=this.uniformLocations[e];if(l){this.gl.uniform1i(l,o);const u=`${e}AspectRatio`,h=this.uniformLocations[u];if(h){const f=i.naturalWidth/i.naturalHeight;this.gl.uniform1f(h,f)}}});c(this,"areUniformValuesEqual",(e,i)=>e===i?!0:Array.isArray(e)&&Array.isArray(i)&&e.length===i.length?e.every((s,o)=>this.areUniformValuesEqual(s,i[o])):!1);c(this,"setUniformValues",e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([i,s])=>{let o=s;if(s instanceof HTMLImageElement&&(o=`${s.src.slice(0,200)}|${s.naturalWidth}x${s.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[i],o))return;this.uniformCache[i]=o;const n=this.uniformLocations[i];if(!n){console.warn(`Uniform location for ${i} not found`);return}if(s instanceof HTMLImageElement)this.setTextureUniform(i,s);else if(Array.isArray(s)){let a=null,l=null;if(s[0]!==void 0&&Array.isArray(s[0])){const u=s[0].length;if(s.every(h=>h.length===u))a=s.flat(),l=u;else{console.warn(`All child arrays must be the same length for ${i}`);return}}else a=s,l=a.length;switch(l){case 2:this.gl.uniform2fv(n,a);break;case 3:this.gl.uniform3fv(n,a);break;case 4:this.gl.uniform4fv(n,a);break;case 9:this.gl.uniformMatrix3fv(n,!1,a);break;case 16:this.gl.uniformMatrix4fv(n,!1,a);break;default:console.warn(`Unsupported uniform array length: ${l}`)}}else typeof s=="number"?this.gl.uniform1f(n,s):typeof s=="boolean"?this.gl.uniform1i(n,s?1:0):console.warn(`Unsupported uniform type for ${i}: ${typeof s}`)})});c(this,"getCurrentFrame",()=>this.currentFrame);c(this,"setFrame",e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())});c(this,"setSpeed",(e=1)=>{this.speed=e,this.updateCurrentSpeed()});c(this,"updateCurrentSpeed",()=>{this.setCurrentSpeed(this.ownerDocument.hidden||!this.isInViewport?0:this.speed)});c(this,"setCurrentSpeed",e=>{this.currentSpeed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});c(this,"setMaxPixelCount",(e=$)=>{this.maxPixelCount=e,this.handleResize()});c(this,"setMinPixelRatio",(e=2)=>{this.minPixelRatio=e,this.handleResize()});c(this,"setUniforms",e=>{this.setUniformValues(e),this.providedUniforms=b(b({},this.providedUniforms),e),this.render(performance.now())});c(this,"handleDocumentVisibilityChange",()=>{this.updateCurrentSpeed()});c(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if((e==null?void 0:e.nodeType)===1)this.parentElement=e;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const x=this.ownerDocument.createElement("style");x.innerHTML=we,x.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(x)}const f=this.ownerDocument.createElement("canvas");this.canvasElement=f,this.parentElement.prepend(f),this.fragmentShader=i,this.providedUniforms=s,this.mipmaps=h,this.currentFrame=a,this.minPixelRatio=l,this.maxPixelCount=u;const d=f.getContext("webgl2",o);if(!d)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=d,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setupIntersectionObserver(),this.setSpeed(n),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function G(t,e,i){const s=t.createShader(e);return s?(t.shaderSource(s,i),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(console.error("An error occurred compiling the shaders: "+t.getShaderInfoLog(s)),t.deleteShader(s),null)):null}function be(t,e,i){const s=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT),o=s?s.precision:null;o&&o<23&&(e=e.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),i=i.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const n=G(t,t.VERTEX_SHADER,e),a=G(t,t.FRAGMENT_SHADER,i);if(!n||!a)return null;const l=t.createProgram();return l?(t.attachShader(l,n),t.attachShader(l,a),t.linkProgram(l),t.getProgramParameter(l,t.LINK_STATUS)?(t.detachShader(l,n),t.detachShader(l,a),t.deleteShader(n),t.deleteShader(a),l):(console.error("Unable to initialize the shader program: "+t.getProgramInfoLog(l)),t.deleteProgram(l),t.deleteShader(n),t.deleteShader(a),null)):null}const we=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function ye(){const t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")&&!t.includes("android")}function Se(t){var l,u;const e=(l=visualViewport==null?void 0:visualViewport.scale)!=null?l:1,i=(u=visualViewport==null?void 0:visualViewport.width)!=null?u:window.innerWidth,s=window.innerWidth-t.documentElement.clientWidth,o=e*i+s,n=outerWidth/o,a=Math.round(100*n);return a%5===0?a/100:a===33?1/3:a===67?2/3:a===133?4/3:n}const Re={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},je={none:0,contain:1,cover:2},Ae=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Ee=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,Ue=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,q={maxColorCount:10},Me=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${q.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${Ae}
${Ee}
${Ue}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float mixerGrain = 0.;
  if (u_grainMixer > 0.) {
    mixerGrain = .4 * u_grainMixer * (noise(grainUV, vec2(0.)) - .5);
  }

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${q.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`;function Be(t){if(Array.isArray(t))return t.length===4?t:t.length===3?[...t,1]:A;if(typeof t!="string")return A;let e,i,s,o=1;if(t.startsWith("#"))[e,i,s,o]=Oe(t);else if(t.startsWith("rgb")){const n=Te(t);if(n===null)return A;[e,i,s,o]=n}else if(t.startsWith("hsl")){const n=Ne(t);if(n===null)return A;[e,i,s,o]=ze(n)}else return console.error("Unsupported color format",t),A;return[z(e,0,1),z(i,0,1),z(s,0,1),z(o,0,1)]}function Oe(t){if(t=t.replace(/^#/,""),(t.length===3||t.length===4)&&(t=t.split("").map(n=>n+n).join("")),t.length===6&&(t=t+"ff"),!/^[0-9a-f]{8}$/i.test(t))return console.warn("Invalid hex color"),A;const e=parseInt(t.slice(0,2),16)/255,i=parseInt(t.slice(2,4),16)/255,s=parseInt(t.slice(4,6),16)/255,o=parseInt(t.slice(6,8),16)/255;return[e,i,s,o]}function Te(t){var i,s,o;const e=t.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return e?[parseInt((i=e[1])!=null?i:"0")/255,parseInt((s=e[2])!=null?s:"0")/255,parseInt((o=e[3])!=null?o:"0")/255,e[4]===void 0?1:parseFloat(e[4])]:null}function Ne(t){var i,s,o;const e=t.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return e?[parseInt((i=e[1])!=null?i:"0"),parseInt((s=e[2])!=null?s:"0"),parseInt((o=e[3])!=null?o:"0"),e[4]===void 0?1:parseFloat(e[4])]:null}function ze(t){const[e,i,s,o]=t,n=e/360,a=i/100,l=s/100;let u,h,f;if(i===0)u=h=f=l;else{const d=(y,S,m)=>(m<0&&(m+=1),m>1&&(m-=1),m<.16666666666666666?y+(S-y)*6*m:m<.5?S:m<.6666666666666666?y+(S-y)*(.6666666666666666-m)*6:y),x=l<.5?l*(1+a):l+a-l*a,R=2*l-x;u=d(R,x,n+1/3),h=d(R,x,n),f=d(R,x,n-1/3)}return[u,h,f,o]}const z=(t,e,i)=>Math.min(Math.max(t,e),i),A=[.5,.5,.5,1],Ce="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function Ve(t){const e=p.useRef(void 0),i=p.useCallback(s=>{const o=t.map(n=>{if(n!=null){if(typeof n=="function"){const a=n,l=a(s);return typeof l=="function"?l:()=>{a(null)}}return n.current=s,()=>{n.current=null}}});return()=>{o.forEach(n=>n==null?void 0:n())}},t);return p.useMemo(()=>t.every(s=>s==null)?null:s=>{e.current&&(e.current(),e.current=void 0),s!=null&&(e.current=i(s))},t)}function X(t){if(t.naturalWidth<1024&&t.naturalHeight<1024){if(t.naturalWidth<1||t.naturalHeight<1)return;const e=t.naturalWidth/t.naturalHeight;t.width=Math.round(e>1?1024*e:1024),t.height=Math.round(e>1?1024:1024/e)}}function Y(t){return T(this,null,function*(){const e={},i=[],s=n=>{try{return n.startsWith("/")||new URL(n),!0}catch(a){return!1}},o=n=>{try{return n.startsWith("/")?!1:new URL(n,window.location.origin).origin!==window.location.origin}catch(a){return!1}};return Object.entries(t).forEach(([n,a])=>{if(typeof a=="string"){const l=a||Ce;if(!s(l)){console.warn(`Uniform "${n}" has invalid URL "${l}". Skipping image loading.`);return}const u=new Promise((h,f)=>{const d=new Image;o(l)&&(d.crossOrigin="anonymous"),d.onload=()=>{X(d),e[n]=d,h()},d.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${l}`),f()},d.src=l});i.push(u)}else if(a instanceof HTMLImageElement){const l=a.decode().then(()=>{X(a),e[n]=a});i.push(l)}else e[n]=a}),yield Promise.all(i),e})}const se=p.forwardRef(function(y,R){var S=y,{fragmentShader:e,uniforms:i,webGlContextAttributes:s,speed:o=0,frame:n=0,width:a,height:l,minPixelRatio:u,maxPixelCount:h,mipmaps:f,style:d}=S,x=O(S,["fragmentShader","uniforms","webGlContextAttributes","speed","frame","width","height","minPixelRatio","maxPixelCount","mipmaps","style"]);const[m,C]=p.useState(!1),U=p.useRef(null),_=p.useRef(null),V=p.useRef(s);p.useEffect(()=>(T(this,null,function*(){const E=yield Y(i);U.current&&!_.current&&(_.current=new _e(U.current,e,E,V.current,o,n,u,h,f),C(!0))}),()=>{var E;(E=_.current)==null||E.dispose(),_.current=null}),[e]),p.useEffect(()=>{let v=!1;return T(this,null,function*(){var k;const ce=yield Y(i);v||(k=_.current)==null||k.setUniforms(ce)}),()=>{v=!0}},[i,m]),p.useEffect(()=>{var v;(v=_.current)==null||v.setSpeed(o)},[o,m]),p.useEffect(()=>{var v;(v=_.current)==null||v.setMaxPixelCount(h)},[h,m]),p.useEffect(()=>{var v;(v=_.current)==null||v.setMinPixelRatio(u)},[u,m]),p.useEffect(()=>{var v;(v=_.current)==null||v.setFrame(n)},[n,m]);const le=Ve([U,R]);return r.jsx("div",b({ref:le,style:a!==void 0||l!==void 0?b({width:typeof a=="string"&&isNaN(+a)===!1?+a:a,height:typeof l=="string"&&isNaN(+l)===!1?+l:l},d):d},x))});se.displayName="ShaderMount";function Pe(t,e){var i,s,o;if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t){if(n==="colors"){const a=Array.isArray(t.colors),l=Array.isArray(e.colors);if(!a||!l){if(Object.is(t.colors,e.colors)===!1)return!1;continue}if(((i=t.colors)==null?void 0:i.length)!==((s=e.colors)==null?void 0:s.length)||!((o=t.colors)!=null&&o.every((u,h)=>{var f;return u===((f=e.colors)==null?void 0:f[h])})))return!1;continue}if(Object.is(t[n],e[n])===!1)return!1}return!0}const g={params:B(b({},Re),{speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0})},We=p.memo(function(U){var _=U,{speed:e=g.params.speed,frame:i=g.params.frame,colors:s=g.params.colors,distortion:o=g.params.distortion,swirl:n=g.params.swirl,grainMixer:a=g.params.grainMixer,grainOverlay:l=g.params.grainOverlay,fit:u=g.params.fit,rotation:h=g.params.rotation,scale:f=g.params.scale,originX:d=g.params.originX,originY:x=g.params.originY,offsetX:R=g.params.offsetX,offsetY:y=g.params.offsetY,worldWidth:S=g.params.worldWidth,worldHeight:m=g.params.worldHeight}=_,C=O(_,["speed","frame","colors","distortion","swirl","grainMixer","grainOverlay","fit","rotation","scale","originX","originY","offsetX","offsetY","worldWidth","worldHeight"]);const V={u_colors:s.map(Be),u_colorsCount:s.length,u_distortion:o,u_swirl:n,u_grainMixer:a,u_grainOverlay:l,u_fit:je[u],u_rotation:h,u_scale:f,u_offsetX:R,u_offsetY:y,u_originX:d,u_originY:x,u_worldWidth:S,u_worldHeight:m};return r.jsx(se,B(b({},C),{speed:e,frame:i,fragmentShader:Me,uniforms:V}))},Pe),re="/assets/victoria-fish-Dkq3xvot.webp",ne="/assets/northtouch-7HH1Snem.webp",Ie="/assets/chateau-hudson-D-E8btVV.webp",Le="/assets/montreal-towing-BC0sns0_.webp",oe="/assets/social-rebrand--OFraGKn.webp",ke="/assets/ryan-QQIMdVI-.webp",De="/assets/kui-C1m1WN6v.webp",nt=[{name:"Victoria Fish",kind:"Website",stack:["React","Tailwind","Node.js"],description:"A Montréal fish market open for over 50 years, known for its smoked salmon.",href:"https://victoriafish.ca/",domain:"victoriafish.ca",image:re},{name:"Northtouch Canada",kind:"Website",stack:["React","Tailwind","Node.js"],description:"A bilingual site for a manufacturer’s agent in assembly, test and programming equipment.",href:"https://northtouch.com",domain:"northtouch.com",image:ne},{name:"Le Château Hudson",kind:"Website",stack:["Bootstrap","JavaScript"],description:"Store directory, events and gallery for a shopping centre.",href:"https://lechateauhudson.com/",domain:"lechateauhudson.com",image:Ie},{name:"Montreal Towing",kind:"Website",stack:["WordPress","Elementor"],description:"Services and booking for a towing company with Montréal and Cornwall divisions.",href:"https://montrealtowing.net",domain:"montrealtowing.net",image:Le},{name:"Social Rebrand Collective",kind:"Website",stack:["React","Tailwind","Node.js"],description:"A site for a Montréal digital marketing agency.",href:"https://socialrebrand.ca",domain:"socialrebrand.ca",image:oe}],Fe=[{quote:"Netfluence completely transformed our online presence. Our new website has significantly increased our visibility and customer engagement. Their design perfectly captures the essence of our local fish market and has helped drive substantial growth in our online orders.",name:"Demetri Papageorgiou",role:"Manager",company:"Victoria Fish",image:re},{quote:"Working with Netfluence was a seamless experience from start to finish. They understood our vision immediately and created a website that perfectly represents our brand’s values and aesthetic. The results have exceeded our expectations in both design and functionality.",name:"Ahmad Sidawi",role:"Founder",company:"Social Rebrand Collective",image:oe},{quote:"The website Netfluence developed for us has been a game-changer for our business. Their team’s technical expertise and creative approach resulted in a platform that’s not only visually stunning but also highly functional. The attention to detail and user experience design has impressed both our team and our clients.",name:"Benoit Giroux",role:"CEO",company:"Northtouch",image:ne}],He=[{key:"ryan",name:"Ryan Meziane",role:"Co-founder, full-stack developer",bio:"Computer Science graduate from John Abbott College with 5+ years of programming experience. Currently pursuing a Bachelor’s degree while working on client projects.",photo:ke},{key:"kui",name:"Kui Hua Wang",role:"Co-founder, full-stack developer",bio:"Computer Science graduate from John Abbott College. Currently working towards a Bachelor’s degree while building client projects.",photo:De}],$e=[{title:"Discovery",description:"We learn how your business works, who your customers are, and what the project needs to do for them."},{title:"Design",description:"We design the screens around your content and the people using them, and go through them with you before we build."},{title:"Development",description:"We build with current, well-supported tools so it runs fast and stays easy to maintain."},{title:"Launch and support",description:"We test on real phones and browsers, launch, and stay on afterwards to keep it running."}],Ge=t=>{const[e,i]=p.useState(!1);return p.useEffect(()=>{const s=window.matchMedia(t),o=()=>i(s.matches);return o(),s.addEventListener("change",o),()=>s.removeEventListener("change",o)},[t]),e},qe=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})}),Xe=()=>r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M5 11 11 5M6 5h5v5"})}),Ye=["#0b1014","#001b32","#08131c","#00456d","#0091d4","#38b6ff"];class Qe extends fe.Component{constructor(){super(...arguments);c(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?null:this.props.children}}const ae=i=>{var s=i,{active:t}=s,e=O(s,["active"]);const o=I();return r.jsx(Qe,{children:r.jsx(We,b({colors:Ye,distortion:.85,swirl:.35,grainMixer:.18,grainOverlay:.12,speed:o||!t?0:.18,maxPixelCount:1920*1080},e))})},ot=({label:t,lines:e,lede:i,children:s})=>{const o=p.useRef(null),n=I(),a=L(o,{margin:"0px 0px -10% 0px"}),{scrollYProgress:l}=K({target:o,offset:["start start","end start"]}),u=J(l,[0,1],[1,n?1:0]);return r.jsxs("section",{ref:o,className:"nf-phero",children:[r.jsxs(Z.div,{className:"nf-phero__bg","aria-hidden":"true",style:{opacity:u},children:[r.jsx(ae,{active:a,className:"nf-shader nf-shader--fade",offsetX:.4,offsetY:-.3,scale:1.3}),r.jsx("div",{className:"nf-phero__scrim"})]}),r.jsxs("div",{className:"nf-wrap",children:[t&&r.jsx("p",{className:"nf-phero__label nf-fade",style:{"--d":"0ms"},children:t}),r.jsx("h1",{className:"nf-phero__title",children:e.map((h,f)=>r.jsx("span",{className:"nf-line",children:r.jsx("span",{style:{"--d":`${60+f*70}ms`},children:h})},h))}),i&&r.jsx("p",{className:"nf-phero__lede nf-fade",style:{"--d":"260ms"},children:i}),s&&r.jsx("div",{className:"nf-phero__extra nf-fade",style:{"--d":"340ms"},children:s})]})]})},at=({title:t="Have a project in mind?",lede:e="Tell us about your business and what you need. We’ll get back to you with questions and next steps.",showButton:i=!0})=>{const s=p.useRef(null),o=L(s,{margin:"0px 0px -10% 0px"});return r.jsxs("section",{ref:s,className:"nf-close",children:[r.jsxs("div",{className:"nf-close__bg","aria-hidden":"true",children:[r.jsx(ae,{active:o,className:"nf-shader",offsetX:.45,offsetY:-.05,scale:1.4}),r.jsx("div",{className:"nf-close__scrim"})]}),r.jsxs("div",{className:"nf-wrap",children:[r.jsx("h2",{className:"nf-close__title",children:t}),r.jsxs("div",{className:"nf-close__row nf-grid",children:[r.jsx("p",{className:"nf-lede",children:e}),r.jsxs("div",{className:"nf-close__actions",children:[i&&r.jsx(ee,{to:"/contact",className:"nf-btn nf-btn--primary",children:"Start a project"}),r.jsx("a",{className:"nf-close__contact",href:`mailto:${j.email}`,children:j.email}),r.jsx("a",{className:"nf-close__contact",href:j.phoneHref,children:j.phone})]})]})]})]})},lt=({p:t,index:e})=>r.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"nf-card",children:[r.jsx("div",{className:"nf-card__media",children:r.jsx("img",{src:t.image,alt:`${t.name} website`,width:"1200",height:"750",loading:"lazy",decoding:"async"})}),r.jsxs("div",{className:"nf-card__meta",children:[r.jsx("span",{className:"nf-card__index",children:String(e+1).padStart(2,"0")}),r.jsxs("div",{children:[r.jsx("h3",{children:t.name}),r.jsxs("p",{className:"nf-card__tags",children:[t.kind," · ",t.stack.join(", ")]}),r.jsx("p",{children:t.description}),r.jsxs("span",{className:"nf-card__url",children:[t.domain," ",r.jsx(Xe,{})]})]})]})]}),ct=({items:t=te,className:e=""})=>r.jsx("ul",{className:`nf-services__list ${e}`,children:t.map(i=>r.jsx("li",{children:r.jsxs(ee,{to:`/services#${i.slug}`,className:"nf-service",children:[r.jsx("h3",{children:i.title}),r.jsx("p",{children:i.description}),r.jsx("span",{className:"nf-service__arrow","aria-hidden":"true",children:r.jsx(qe,{})})]})},i.slug))}),Q=({t})=>r.jsxs("figcaption",{children:[r.jsx("img",{className:"nf-quote__thumb",src:t.image,alt:"",loading:"lazy"}),r.jsxs("span",{className:"nf-quote__who",children:[r.jsx("strong",{children:t.name}),r.jsxs("span",{children:[t.role,", ",t.company]})]})]}),ut=({title:t="From our clients"})=>{const[e,...i]=Fe;return r.jsx("section",{id:"testimonials",className:"nf-section nf-quotes",children:r.jsxs("div",{className:"nf-wrap nf-grid",children:[r.jsxs("figure",{className:"nf-quote nf-quote--lead",children:[r.jsx("h2",{className:"nf-h2 nf-quotes__head",children:t}),r.jsx("blockquote",{children:r.jsxs("p",{children:[e.quote,"”"]})}),r.jsx(Q,{t:e})]}),r.jsx("div",{className:"nf-quotes__side",children:i.map(s=>r.jsxs("figure",{className:"nf-quote nf-quote--side",children:[r.jsx("blockquote",{children:r.jsxs("p",{children:["“",s.quote,"”"]})}),r.jsx(Q,{t:s})]},s.name))})]})})},ht=({withBio:t=!1})=>r.jsx("div",{className:"nf-team__people",children:He.map(e=>r.jsxs("div",{className:`nf-person nf-person--${e.key}`,children:[r.jsx("img",{src:e.photo,alt:e.name,width:"460",height:"575",loading:"lazy",decoding:"async"}),r.jsx("h3",{children:e.name}),r.jsx("p",{children:e.role}),t&&r.jsx("p",{className:"nf-person__bio",children:e.bio})]},e.name))}),Ke=({step:t,index:e})=>{const i=p.useRef(null),s=Ge("(prefers-reduced-motion: reduce)"),o=L(i,{margin:"0px 0px -42% 0px"});return r.jsxs("li",{ref:i,className:`nf-step${o||s?" is-reached":""}`,children:[r.jsx("span",{className:"nf-step__num",children:String(e+1).padStart(2,"0")}),r.jsxs("h3",{children:[r.jsx("span",{className:"nf-step__dot","aria-hidden":"true"}),t.title]}),r.jsx("p",{children:t.description})]})},dt=({items:t=$e})=>{const e=p.useRef(null),i=I(),{scrollYProgress:s}=K({target:e,offset:["start 75%","end 55%"]}),o=J(s,[0,1],[i?1:0,1]);return r.jsxs("div",{ref:e,className:"nf-steps",children:[r.jsx("span",{className:"nf-steps__rail","aria-hidden":"true",children:r.jsx(Z.i,{style:{scaleY:o}})}),r.jsx("ol",{children:t.map((n,a)=>r.jsx(Ke,{step:n,index:a},n.title))})]})};export{qe as A,ae as B,at as C,st as P,ut as Q,ct as S,ht as T,dt as a,lt as b,ot as c,Xe as d,He as e,j as f,nt as p,te as s,Fe as t,Ge as u};
