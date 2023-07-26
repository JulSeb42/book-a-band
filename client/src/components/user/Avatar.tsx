/*=============================================== Avatar ===============================================*/

import { Image } from "components"

interface AvatarProps {
    src: string
    username?: string
    size?: string | number
}

export const Avatar = ({ src, username, size = 120 }: AvatarProps) => {
    return (
        <Image
            src={src}
            alt={username ? `Avatar ${username}` : undefined}
            width={size}
            height={size}
            borderRadius="circle"
            fit="cover"
        />
    )
}
