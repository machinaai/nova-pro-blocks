
/**
 * Interface to define the account screen component
 */
export interface ComponentProps {
    iconTitle?:string,
    title?: string,
    subtitle?: string,
    textContent?:string,
    optionsButton?: ItemOptions,
    fontFamily?:Fonts,
    onClose?:Function | any
}
interface ItemOptions {
    btn1:BtnOptions,
    btn2:BtnOptions
}
interface BtnOptions{
    title:string,
    color?:string,
    type?:string,
    action:Function | any
}

/**
 * Interface of definition for the component
 */
export interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}