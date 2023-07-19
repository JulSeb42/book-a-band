# Generate components and pages automatically
# Usage for components: run in terminal `make component name=NameOfComponent`
# Usage for pages: run in terminal `make page pageName=NameOfPage`

define newline


endef

define INDEX_FILE
/*=============================================== $(name) exports ===============================================*/

export * from "components/$(name)/$(name)"
endef

define COMPONENT_FILE
/*=============================================== $(name) component ===============================================*/

import { forwardRef } from "react"
import { ForwardedRef } from "react"

import { Styled$(name) } from "components/$(name)/styles"
import type { $(name)Props } from "components/$(name)/types"

export const $(name) = forwardRef(
    ({ as }: $(name)Props, ref?: ForwardedRef<HTMLDivElement>) => {
		return (
			<Styled$(name) ref={ref} as={as}>

			</Styled$(name)>
		)
    }
)
endef

define STYLES_FILE
/*=============================================== $(name) styles ===============================================*/

import styled from "styled-components"

export const Styled$(name) = styled.div`
	
`
endef

define TYPES_FILE
/*=============================================== $(name) types ===============================================*/

import type { ElementType } from "react"

export interface $(name)Props {
	as?: ElementType
}
endef

define PAGE_INDEX
/*=============================================== $(pageName) exports ===============================================*/

export * from "pages/$(pageName)/$(pageName)"
endef

define PAGE_FILE
/*=============================================== $(pageName) ===============================================*/

import { Page } from "components"

export const $(pageName) = () => {
    return (
        <Page title="$(pageName)">

        </Page>
    )
}
endef

define ROUTE_FILE
/*=============================================== $(routeName) routes ===============================================*/

import { Router } from "express"

const router = Router()

export default router
endef

define MODEL_PAGE
/*=============================================== $(modelName) model ===============================================*/

import { Schema, model } from "mongoose"

const $(modelName)Schema = new Schema(
    {
    },
    { timestamps: true }
)

export const $(modelName)Model = model("$(modelName)", $(modelName)Schema)
endef

define TEXT_FILE
/*=============================================== $(textName) ===============================================*/

import { Styled$(textName) } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const $(textName) = ({ children }: TextProps) => {
    return <Styled$(textName)>{children}</Styled$(textName)>
}
endef

component:
	mkdir client/src/components/$(name)
	touch client/src/components/$(name)/index.ts
	touch client/src/components/$(name)/$(name).tsx
	touch client/src/components/$(name)/styles.tsx
	touch client/src/components/$(name)/types.ts

	@echo '$(subst $(newline),\n,${INDEX_FILE})' > client/src/components/$(name)/index.ts
	@echo '$(subst $(newline),\n,${COMPONENT_FILE})' > client/src/components/$(name)/$(name).tsx
	@echo '$(subst $(newline),\n,${STYLES_FILE})' > client/src/components/$(name)/styles.tsx
	@echo '$(subst $(newline),\n,${TYPES_FILE})' > client/src/components/$(name)/types.ts
	@echo 'export * from "components/$(name)"' >> client/src/components/index.ts

page:
	mkdir client/src/pages/$(pageName)
	touch client/src/pages/$(pageName)/index.ts
	touch client/src/pages/$(pageName)/$(pageName).tsx
	@echo '$(subst $(newline),\n,${PAGE_INDEX})' > client/src/pages/$(pageName)/index.ts
	@echo '$(subst $(newline),\n,${PAGE_FILE})' > client/src/pages/$(pageName)/$(pageName).tsx

route:
	touch server/routes/$(routeName).ts
	@echo '$(subst $(newline),\n,${ROUTE_FILE})' > server/routes/$(routeName).ts

model:
	touch server/models/$(modelName).model.ts
	@echo '$(subst $(newline),\n,${MODEL_PAGE})' > server/models/$(modelName).model.ts
	@echo 'export * from "./$(modelName).model"' >> server/models/index.ts

text:
	touch client/src/components/ui/Text/templates/$(textName).tsx
	@echo '$(subst $(newline),\n,${TEXT_FILE})' > client/src/components/ui/Text/templates/$(textName).tsx