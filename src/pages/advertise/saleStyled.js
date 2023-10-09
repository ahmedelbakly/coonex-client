import styled from "styled-components";
export   const Slides = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    width: 31%;
    height: 4px;
    background: #e2e2e2;
    border-radius: 146px;
  }
  & .active {
    background: #199956 !important;
  }
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  & h3,
  & p {
    color: var(--black, #3d3d3d);

    font-size: 18px;
    font-weight: 600;
  }
`;

export const titles = [
    "Basic Information",
    "Property Information",
    "Extra Information",
    "Additional Information",
  ];