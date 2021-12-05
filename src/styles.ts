import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 48px;
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "input main main main main main"
    "input footer footer footer footer footer";
  grid-auto-flow: row;
  grid-row-gap: 24px;
  grid-column-gap: 48px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 460px;
  font-family: monospace;
  padding: 8px;
  color: gray;
  border: none;
`;

export const Header = styled.header`
  grid-area: header;
`;

export const InputAreaWrapper = styled.aside`
  grid-area: input;
`;

export const SolutionAreaWrapper = styled.main`
  grid-area: main;
`;

export const FooterWrapper = styled.footer`
  grid-area: footer;
`;
