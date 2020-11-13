
/**
 * Interface to define the account screen component
 */
export interface ComponentProps {
    address:string,
    fonts?:Fonts,
    actionBtn:Function | any
}

/**
 * Interface of definition for the component
 */
export interface Fonts{
    fontTitle:string,
    fontSubtitle:string,
    fontAddress:string
}