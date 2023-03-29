const size ={
    desktop:'1440px',
    tablet: '768px',
    mobile: '375px'

}

export const device = {
    desktop:`(min-width: ${size.desktop})`,
    tablet:`(min-width: ${size.tablet})`,
    mobile:`(min-width: ${size.mobile})`,
}