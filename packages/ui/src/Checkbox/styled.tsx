import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

import { CheckboxProps } from './types';

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  padding: 5px;
  border-radius: unset;
  color: ${({ theme }) => theme.palette.background.element};
  & > svg {
    width: 1rem;
    height: 1rem;
    > rect {
      fill: currentColor;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.palette.grey[100]};
  }
  &.Mui-disabled:not(.Mui-checked, .MuiCheckbox-indeterminate) {
    color: ${({ theme }) => theme.palette.grey[200]};
      & > svg> rect {
        stroke: currentColor;
      }
    }
  }
  &.Mui-checked,
  &.MuiCheckbox-indeterminate {
      color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      color: ${({ theme }) => theme.palette.primary[700]};
    }
    &.Mui-disabled {
      color: ${({ theme }) => theme.palette.grey[500]};
    }
  }
`;
