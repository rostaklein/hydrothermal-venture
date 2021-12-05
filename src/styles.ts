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
  width: 240px;
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
  label {
    cursor: pointer;
  }
`;

export const SolutionAreaWrapper = styled.main`
  grid-area: main;
  overflow: hidden;
  code {
    background: rgba(0, 0, 0, 0.05);
    padding: 4px 8px;
    border: solid 1px rgba(0, 0, 0, 0.1);
  }
`;

export const CanvasWrapper = styled.main`
  width: 100%;
  max-height: calc(100vh - 200px);
  overflow: auto;
`;

export const FooterWrapper = styled.footer`
  font-size: smaller;
  color: gray;
  margin-top: 12px;
  grid-area: footer;
  display: flex;
  align-items: center;
  a {
    color: gray;
    margin-left: 4px;
    display: inline-flex;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }
`;
