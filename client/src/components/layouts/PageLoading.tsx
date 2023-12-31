/*=============================================== PageLoading ===============================================*/

import { Fragment } from "react"

import styled from "styled-components"

import { COLORS, Loader, Mixins } from "components"
import { Helmet } from "components/layouts/Helmet"

export function PageLoading() {
    return (
        <Fragment>
            <Helmet title="Page loading" />

            <Main>
                <Loader size={48} color="white" />
            </Main>
        </Fragment>
    )
}

const Main = styled.main`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${COLORS.PRIMARY};
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })}
`
