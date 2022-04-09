import qButton from "./qButton/index.vue"

const components = [qButton]

const install = (app:any)=>{
   components.forEach(c=>{
       app.component(c.name,c)
   })
}

export {qButton};
export default {
    install
}