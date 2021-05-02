import styled from 'styled-components';
import * as M from "@material-ui/core";

export const Container = styled(M.Grid)`
    padding: 50px;
`;

export const Content = styled(M.Grid)`
    padding-right: 10px !important;

    input {
        font-size: 16px !important;
    }
`;

export const Card = styled(M.Card)`
    padding: 50px;
`;