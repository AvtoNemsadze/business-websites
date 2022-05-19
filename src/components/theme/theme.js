import { createGlobalStyle } from "styled-components"

export const LightTheme = {
    body: 'hsl(210, 60%, 96%)',
    fontColor: 'rgb(12, 18, 32)',
}


export const DarkTheme = {
    body: 'rgb(12, 18, 32)',
    fontColor: 'hsl(210, 60%, 96%)',
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
`