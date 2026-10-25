import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const StyledInputWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  max-width: 560px;
  min-width: 0;
  min-height: 52px;
  box-sizing: border-box;

  padding: 12px 16px;
  margin: 24px auto 0;

  border: 0.1px solid rgb(95, 99, 104);
  border-radius: 999px;

  > svg {
    flex-shrink: 0;
  }

  input {
    flex: 1;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.body.darkColor};
    border: none;
    padding: 0;
    font-size: 1rem;
    color: white;

    &:focus {
      outline-width: 0;
    }
  }

  &:focus-within {
    outline: 2px solid #8ab4f8;
    outline-offset: 2px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
    color: #9aa0a6;
    font-size: 1.5rem;
    cursor: pointer;
`;

const StyledMicIcon = styled(MicIcon)`
    color: #9aa0a6;
    font-size: 1.5rem;
    cursor: pointer;
`;

const StyledButtonContainer = styled("div")`
    display: ${(props) => (props.showButtons ? "flex" : "none")};
    justify-content: center;
    padding: 18px;
    button {
        min-height: 32px;
        text-transform: inherit;
        font-size: 0.875rem;
        font-family: Roboto, arial, sans-serif;
        background-color: #303134;
        color: #e8eaed;
        border: 1px solid #303134;
        border-radius: 4px;
        padding: 0 16px;
        margin: 11px 4px;
        &:hover {
            border: 1px solid lightgray;
            border-radius: 4px;
        }
    }
`;


export {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
};
