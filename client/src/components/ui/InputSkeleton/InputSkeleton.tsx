/*=============================================== InputSkeleton component ===============================================*/

import { SkeletonCard, Skeleton } from "tsx-library-julseb"

import { Label } from "components/ui/InputSkeleton/styles"
import type { InputSkeletonProps } from "components/ui/InputSkeleton/types"

export const InputSkeleton = ({ label }: InputSkeletonProps) => {
    return (
        <SkeletonCard flexDirection="column" gap="xxs" alignItems="stretch">
            {label && <Label>{label}</Label>}

            <Skeleton height={32} borderRadius="s" animation="shine" />
        </SkeletonCard>
    )
}
