export interface ModalProps {
    iconTitle?:string,
    title?: string,
    subtitle?: string,
    textContent?:string,
    optionsButton?: ItemOptions | any ,
    fontFamily?:Fonts,
    onlyModal?:boolean,
    onlyScreen?:boolean,
    onClose?:Function | any
}
export interface ItemOptions {
    btn1:BtnOptions,
    btn2:BtnOptions
}
interface BtnOptions{
    title:string,
    color?:string,
    type?:string,
    action:Function | any
}
interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}
