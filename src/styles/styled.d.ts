import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      green: string;
      blue: string;
      cyan: string;
      orange: string;
      yellow: string;
      primary: string;
      background: string;
      textlight: string;
      textdark: string;
    };
  }
}
