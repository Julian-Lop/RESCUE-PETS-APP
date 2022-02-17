import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: ${allColors.colors[0]};
  width: 100vw;
  margin: 0 auto 0 auto;
  border-top: 1px solid #e1e1e1;
  margin-top: 2rem;
  padding-top: 2rem;

  .flex-footer {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
    display: flex;
    justify-content: center;
    gap: 12rem;

  .titleFooter{
      color: ${allColors.colors[1]};
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
  }
}
.footer-menu a {
  display: block;
  text-decoration: none;
  color: ${allColors.colors[5]};
}
.copyright {
  text-align: center;
  margin-top: 2.5rem;
  color: ${allColors.colors[7]};
}
`;
