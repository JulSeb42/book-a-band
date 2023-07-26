/*=============================================== Avatar ===============================================*/

import { Image } from "components"

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

interface AvatarProps {
    src: string
    username?: string
    size?: string | number
}
