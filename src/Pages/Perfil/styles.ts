import styled from 'styled-components'
import { Colors } from '../../styles'

export const RestauranteImagem = styled.div`
    position: relative;
    width: 100%;
    height: 280px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    line-height: 38px;

    color: ${Colors.white};

    h3 {
        font-size: 32px;
    }

    h4 {
        font-weight: 100;

        font-size: 32px;
    }
    h2 {
        font-weight: 900;
    }

    .container {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 24px 0 32px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
`
