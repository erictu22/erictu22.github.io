import styled from "styled-components";

interface FlexProps {
    readonly wrap? : boolean;
}

export const FlexColumn = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    flex-wrap: ${({wrap}) => wrap ? 'wrap' : undefined};

`

export const FlexRow = styled.div<FlexProps>`
    display: flex;
    flex-direction: row;
    flex-wrap: ${({wrap}) => wrap ? 'wrap' : undefined};
`