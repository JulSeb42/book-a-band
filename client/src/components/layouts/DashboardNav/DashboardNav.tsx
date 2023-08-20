/*=============================================== DashboardNav component ===============================================*/

import { PATHS } from "data"

import {
    StyledDashboardNav,
    StyledLink,
} from "components/layouts/DashboardNav/styles"

type LinkType = {
    id: number
    text: string
    to: string
    end?: boolean
}

export function DashboardNav() {
    const links: LinkType[] = [
        {
            id: 0,
            text: "Dashboard",
            to: PATHS.DASHBOARD,
            end: true,
        },
        {
            id: 1,
            text: "Artists",
            to: PATHS.DASHBOARD_ARTISTS,
        },
        {
            id: 2,
            text: "Roles",
            to: PATHS.DASHBOARD_ROLES,
        },
    ]

    return (
        <StyledDashboardNav>
            {links.map(({ to, id, end, text }) => (
                <StyledLink to={to} end={end} key={id}>
                    {text}
                </StyledLink>
            ))}
        </StyledDashboardNav>
    )
}
