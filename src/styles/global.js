import styled from "styled-components";

const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export default function GlobalContent({ children, ...props }) {
  return <Content {...props}>{children}</Content>;
}
