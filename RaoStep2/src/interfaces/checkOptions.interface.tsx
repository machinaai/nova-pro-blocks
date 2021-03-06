export interface PropsCheck{
    optionsCheck:string[],
    setFlow:Function,
    fontFamily:Fonts,
    setOnClose:Function | any,
    setShowModal:Function |any,
    setShowDrawer:Function |any
}
export interface Fonts {
    fontTitle:string,
    fontSubtitle:string,
    fontTextTerms:string
}