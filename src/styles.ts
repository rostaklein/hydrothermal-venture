import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 48px;
  @media only screen and (max-width: 900px) {
    padding: 24px 16px;
  }
`;

export const Textarea = styled.textarea`
  min-width: 240px;
  width: 100%;
  min-height: 460px;
  font-family: monospace;
  padding: 8px;
  color: gray;
  border: none;
  box-sizing: border-box;
  @media only screen and (max-width: 900px) {
    min-height: 160px;
  }
`;

export const Header = styled.header``;

export const MainLayout = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const InputAreaWrapper = styled.aside`
  margin-right: 24px;
  width: 100%;
  flex: 1;
  label {
    cursor: pointer;
  }
`;

export const SolutionAreaWrapper = styled.main`
  flex: 5;
  max-width: 100%;
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
