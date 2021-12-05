import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 48px;
  grid-auto-flow: row;
  grid-row-gap: 24px;
  grid-column-gap: 48px;
`;

export const Textarea = styled.textarea`
  width: 180px;
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
  margin-right: 24px;
`;

export const SolutionAreaWrapper = styled.main`
  grid-area: main;
  overflow: hidden;
`;

export const CanvasWrapper = styled.main`
  width: 100%;
  max-height: calc(100vh - 200px);
  overflow: auto;
`;

export const FooterWrapper = styled.footer`
  grid-area: footer;
`;
