import { styled } from "@mui/system";


const StyledSearchPageHeaderContainer = styled('div')`
    display: flex;
    flex-direction: column;
`;

const StyledSearchHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  width: 100%;
  box-sizing: border-box;
  min-height: 140px;
  padding: 16px 24px;

  z-index: 1;
  position: sticky;
  top: 0;

  border-bottom: 0.1px solid rgb(95, 99, 104);
  background-color: ${({ theme }) => theme.darkColor};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 16px;
  }
`;

const StyledHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  gap: 24px;

  flex: 1;
  min-width: 0;

  > a {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    > a {
      align-self: center;
    }
  }
`;

const StyledHeaderMiddle = styled("div")`
  display: flex;
  flex-direction: column;

  flex: 1;
  min-width: 0;
  max-width: 640px;

  > form {
    width: 100%;
    min-width: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

const StyledSubOptionsLeft = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;

  padding: 8px 0;
  margin-top: 8px;

  svg {
    color: #969ba1;
    font-size: 1rem;
    margin-right: 8px;
  }

  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    color: rgb(150, 155, 161);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledOptions = styled('div')`
    display: flex;
    align-items: center;
    color: #969ba1;
    font-family: Roboto;
`;

const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;

  svg {
    color: #e8eaed;
  }
`;

const StyledLogo = styled("img")`
  display: block;
  object-fit: contain;
  width: 140px;
  max-width: 100%;
  height: auto;
`;

export {
    StyledSearchPageHeaderContainer,
    StyledSearchHeader,
    StyledHeaderLeft,
    StyledHeaderMiddle,
    StyledSubOptionsLeft,
    StyledOptions,
    StyledHeaderRight,
    StyledLogo,
}
