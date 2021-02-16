import theme from '../index'
import { css } from 'styled-components'

const { breakpoints } = theme;

export function breakpointsMedia(cssBreakpoints){
    const breakpointsName = Object.keys(cssBreakpoints)
    return breakpointsName.map((breakpointName)=>{
        return css`
        @media screen and (min-width: ${breakpoints[breakpointName]}px){
          ${cssBreakpoints[breakpointName]}
      }
        `
    }).join('')
}