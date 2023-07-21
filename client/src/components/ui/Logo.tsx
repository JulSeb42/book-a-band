/*=============================================== Logo ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

export const Logo = forwardRef(
    (
        { isWhite, width, height }: LogoProps,
        ref?: ForwardedRef<SVGSVGElement>
    ) => {
        return (
            <StyledLogo
                ref={ref}
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                $width={width}
                $height={height}
            >
                {isWhite ? (
                    <>
                        <g clip-path="url(#clip0_41_14)">
                            <path
                                d="M93.6999 1.4L12.9999 45.7C9.5999 47.5 6.8999 52.1 6.8999 56V144C6.8999 147.8 9.5999 152.5 12.9999 154.3L93.6999 198.6C97.0999 200.5 102.5 200.5 105.9 198.6L186.6 154.3C190 152.4 192.7 147.8 192.7 144V56C192.7 52.2 190 47.5 186.6 45.7L105.9 1.4C104.2 0.5 102 0 99.7999 0C97.5999 0 95.3999 0.5 93.6999 1.4Z"
                                fill="white"
                            />
                            <path
                                d="M130.9 85L138.4 93.5V93.6H145.3L136.7 83.7L144.8 74.6H138L130.9 82.7V65.9H125.2V93.5H130.9V85Z"
                                fill="#142F43"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M74.9998 82.1C74.1998 80.9 72.9998 80.1 71.3998 79.7C72.6998 79.2 73.6998 78.4 74.4998 77.5C75.1998 76.4 75.5998 75.2001 75.5998 73.8C75.5998 71.6001 74.7998 69.9 73.1998 68.7C71.5998 67.4 69.3998 66.8 66.5998 66.8H54.2998V93.6H66.9998C69.7998 93.6 72.0998 92.9 73.7998 91.6C75.4998 90.2 76.2998 88.4 76.2998 86.2C76.2998 84.6 75.8998 83.2 74.9998 82.1ZM65.5998 77.6H59.9998V71.2H65.5998C67.0998 71.2 68.1998 71.5 68.8998 72C69.5998 72.5 69.9998 73.3 69.9998 74.4C69.9998 75.5 69.6998 76.3 68.8998 76.8C68.1998 77.4 67.0998 77.6 65.5998 77.6ZM69.6998 88.2C68.9998 88.7 67.8998 89 66.2998 89H59.9998V82.2H66.2998C67.8998 82.2 68.9998 82.4 69.6998 83C70.3998 83.5 70.7998 84.4 70.7998 85.6C70.7998 86.8 70.3998 87.7 69.6998 88.2Z"
                                fill="#142F43"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M89.1001 93.8C87.1001 93.8 85.3001 93.4 83.8001 92.6C82.3001 91.8 81.1001 90.6 80.3001 89.1C79.5001 87.6 79.1001 85.9 79.1001 83.9C79.1001 81.9 79.5001 80.1 80.3001 78.7C81.1001 77.2 82.3001 76.1 83.8001 75.3C85.3001 74.5 87.1001 74.1 89.1001 74.1C91.1001 74.1 92.9001 74.5 94.3001 75.3C95.7001 76.1 97.0001 77.2 97.8001 78.7C98.6001 80.2 99.0001 81.9 99.0001 83.9C99.0001 85.9 98.6001 87.7 97.8001 89.1C97.0001 90.6 95.8001 91.8 94.3001 92.6C92.8001 93.4 91.1001 93.8 89.1001 93.8ZM89.1001 89.4C90.5001 89.4 91.6001 88.9 92.3001 88C93.1001 87.1 93.4001 85.7 93.4001 83.8C93.4001 82 93.0001 80.6 92.3001 79.6C91.6001 78.7 90.5001 78.2 89.1001 78.2C87.7001 78.2 86.6001 78.7 85.8001 79.6C85.0001 80.5 84.7001 81.9 84.7001 83.8C84.7001 87.6 86.1001 89.4 89.1001 89.4Z"
                                fill="#142F43"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M111.7 93.8C109.7 93.8 107.9 93.4 106.4 92.6C104.9 91.8 103.7 90.6 102.9 89.1C102.1 87.7 101.7 85.9 101.7 83.9C101.7 81.9 102.1 80.2 102.9 78.7C103.7 77.2 104.9 76.1 106.4 75.3C107.9 74.5 109.7 74.1 111.7 74.1C113.7 74.1 115.4 74.5 116.9 75.3C118.4 76.1 119.6 77.2 120.4 78.7C121.2 80.1 121.6 81.9 121.6 83.9C121.6 85.9 121.2 87.6 120.4 89.1C119.6 90.6 118.4 91.8 116.9 92.6C115.5 93.4 113.7 93.8 111.7 93.8ZM111.7 89.5C113.1 89.5 114.2 89 114.9 88.1C115.6 87.1 116 85.7 116 83.9C116 82 115.7 80.6 114.9 79.7C114.2 78.8 113.1 78.3 111.7 78.3C110.2 78.3 109.2 78.8 108.4 79.7C107.7 80.7 107.3 82.1 107.3 83.9C107.3 87.6 108.8 89.5 111.7 89.5Z"
                                fill="#142F43"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M163.2 133.9H157.6V131C157 132 156.2 132.7 155.2 133.3C154.2 133.9 153 134.1 151.6 134.1C150 134.1 148.5 133.7 147.2 132.9C145.9 132 144.9 130.9 144.2 129.4C143.5 127.9 143.1 126.1 143.1 124.2C143.1 122.2 143.5 120.5 144.2 119.1C144.9 117.6 145.9 116.4 147.2 115.6C148.5 114.8 149.9 114.4 151.6 114.4C152.9 114.4 154 114.7 155.1 115.2C156.2 115.7 157 116.5 157.5 117.4V106.3H163.2V133.9ZM153.3 129.8C154.7 129.8 155.8 129.3 156.5 128.4C157.3 127.4 157.6 126 157.6 124.2C157.6 122.4 157.2 121.1 156.4 120.1C155.6 119.1 154.6 118.6 153.2 118.6C151.8 118.6 150.7 119.1 149.9 120C149.1 120.9 148.7 122.3 148.7 124.1C148.7 125.9 149.1 127.3 149.9 128.3C150.8 129.4 151.9 129.8 153.3 129.8Z"
                                fill="#142F43"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M88.9998 120C90.5998 120.5 91.7998 121.3 92.5998 122.4C93.3998 123.5 93.7998 124.9 93.7998 126.3C93.7998 128.6 92.9998 130.4 91.2998 131.7C89.6998 133 87.3998 133.7 84.4998 133.7H71.7998V107H84.0998C86.8998 107 89.0998 107.7 90.6998 108.9C92.2998 110.2 93.0998 111.9 93.0998 114C93.0998 115.4 92.7998 116.6 91.9998 117.7C91.2998 118.8 90.2998 119.5 88.9998 120ZM77.5998 118H83.1998C84.6998 118 85.7998 117.8 86.4998 117.2C87.1998 116.7 87.5998 115.9 87.5998 114.8C87.5998 113.7 87.2998 112.9 86.4998 112.4C85.7998 111.9 84.6998 111.6 83.1998 111.6H77.5998V118ZM83.7998 129.4C85.3998 129.4 86.4998 129.1 87.1998 128.6C87.9998 128 88.2998 127.2 88.2998 126C88.2998 124.8 87.8998 124 87.1998 123.4C86.4998 122.9 85.3998 122.6 83.7998 122.6H77.4998V129.4H83.7998Z"
                                fill="#142F43"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M56.2998 114.9H50.6998V117.6C50.0998 116.6 49.2998 115.8 48.2998 115.3C47.2998 114.7 46.0998 114.4 44.6998 114.4C43.0998 114.4 41.5998 114.8 40.2998 115.7C38.9998 116.5 37.9998 117.7 37.2998 119.2C36.5998 120.7 36.2998 122.5 36.2998 124.4C36.2998 126.4 36.6998 128.1 37.2998 129.6C37.9998 131.1 38.9998 132.2 40.2998 133C41.5998 133.8 42.9998 134.2 44.6998 134.2C45.9998 134.2 47.1998 133.9 48.2998 133.4C49.3998 132.9 50.1998 132.1 50.6998 131.1V133.9H56.2998V114.9ZM49.5998 128.4C48.7998 129.4 47.7998 129.8 46.3998 129.8C44.9998 129.8 43.8998 129.3 43.0998 128.4C42.2998 127.5 41.9998 126.1 41.9998 124.3C41.9998 122.5 42.3998 121.1 43.1998 120.1C43.9998 119.1 45.0998 118.6 46.4998 118.6C47.8998 118.6 48.9998 119.1 49.6998 120.1C50.4998 121 50.7998 122.4 50.7998 124.2C50.6998 126.1 50.3998 127.5 49.5998 128.4Z"
                                fill="#142F43"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M111 133.8H116.6V114.8H110.9V117.5C110.4 116.5 109.6 115.8 108.5 115.2C107.4 114.6 106.2 114.3 104.9 114.3C103.3 114.3 101.9 114.8 100.6 115.6C99.3 116.4 98.3 117.6 97.6 119.1C96.9 120.6 96.5 122.4 96.5 124.3C96.5 126.3 96.9 128 97.6 129.5C98.4 131 99.4 132.1 100.6 132.9C101.9 133.7 103.3 134.1 105 134.1C106.4 134.1 107.6 133.9 108.6 133.3C109.6 132.7 110.4 132 111 131V133.8ZM109.9 128.4C109.2 129.3 108.1 129.8 106.7 129.8C105.2 129.8 104.2 129.4 103.3 128.5C102.6 127.5 102.2 126.2 102.2 124.4C102.2 122.6 102.6 121.2 103.4 120.2C104.2 119.2 105.3 118.7 106.7 118.7C108.1 118.7 109.1 119.2 109.9 120.2C110.6 121.1 111 122.5 111 124.3C111 126.1 110.7 127.5 109.9 128.4Z"
                                fill="#142F43"
                            />
                            <path
                                d="M139.7 122.3C139.7 117 137.5 114.3 132.9 114.3C131.5 114.3 130.3 114.6 129.2 115.2C128.1 115.8 127.3 116.7 126.6 117.8L126.2 114.8H120.9C121.1 116.4 121.2 118.2 121.2 120.2V133.8H126.9V123.1C126.9 121.8 127.3 120.7 128 119.9C128.8 119.1 129.8 118.7 131 118.7C132.1 118.7 132.8 119 133.3 119.6C133.8 120.2 134.1 121.2 134.1 122.5V133.8H139.8V122.3H139.7Z"
                                fill="#142F43"
                            />
                            <path
                                d="M71.7998 136.7H163.2V138.3H71.7998V136.7Z"
                                fill="#142F43"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_41_14">
                                <rect width="200" height="200" fill="white" />
                            </clipPath>
                        </defs>
                    </>
                ) : (
                    <>
                        <g clip-path="url(#clip0_41_2)">
                            <path
                                d="M93.6999 1.4L12.9999 45.7C9.5999 47.5 6.8999 52.1 6.8999 56V144C6.8999 147.8 9.5999 152.5 12.9999 154.3L93.6999 198.6C97.0999 200.5 102.5 200.5 105.9 198.6L186.6 154.3C190 152.4 192.7 147.8 192.7 144V56C192.7 52.2 190 47.5 186.6 45.7L105.9 1.4C104.2 0.5 102 0 99.7999 0C97.5999 0 95.3999 0.5 93.6999 1.4Z"
                                fill="#142F43"
                            />
                            <path
                                d="M130.9 85L138.4 93.5V93.6H145.3L136.7 83.7L144.8 74.6H138L130.9 82.7V65.9H125.2V93.5H130.9V85Z"
                                fill="white"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M74.9998 82.1C74.1998 80.9 72.9998 80.1 71.3998 79.7C72.6998 79.2 73.6998 78.4 74.4998 77.5C75.1998 76.4 75.5998 75.2001 75.5998 73.8C75.5998 71.6001 74.7998 69.9 73.1998 68.7C71.5998 67.4 69.3998 66.8 66.5998 66.8H54.2998V93.6H66.9998C69.7998 93.6 72.0998 92.9 73.7998 91.6C75.4998 90.2 76.2998 88.4 76.2998 86.2C76.2998 84.6 75.8998 83.2 74.9998 82.1ZM65.5998 77.6H59.9998V71.2H65.5998C67.0998 71.2 68.1998 71.5 68.8998 72C69.5998 72.5 69.9998 73.3 69.9998 74.4C69.9998 75.5 69.6998 76.3 68.8998 76.8C68.1998 77.4 67.0998 77.6 65.5998 77.6ZM69.6998 88.2C68.9998 88.7 67.8998 89 66.2998 89H59.9998V82.2H66.2998C67.8998 82.2 68.9998 82.4 69.6998 83C70.3998 83.5 70.7998 84.4 70.7998 85.6C70.7998 86.8 70.3998 87.7 69.6998 88.2Z"
                                fill="white"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M89.1001 93.8C87.1001 93.8 85.3001 93.4 83.8001 92.6C82.3001 91.8 81.1001 90.6 80.3001 89.1C79.5001 87.6 79.1001 85.9 79.1001 83.9C79.1001 81.9 79.5001 80.1 80.3001 78.7C81.1001 77.2 82.3001 76.1 83.8001 75.3C85.3001 74.5 87.1001 74.1 89.1001 74.1C91.1001 74.1 92.9001 74.5 94.3001 75.3C95.7001 76.1 97.0001 77.2 97.8001 78.7C98.6001 80.2 99.0001 81.9 99.0001 83.9C99.0001 85.9 98.6001 87.7 97.8001 89.1C97.0001 90.6 95.8001 91.8 94.3001 92.6C92.8001 93.4 91.1001 93.8 89.1001 93.8ZM89.1001 89.4C90.5001 89.4 91.6001 88.9 92.3001 88C93.1001 87.1 93.4001 85.7 93.4001 83.8C93.4001 82 93.0001 80.6 92.3001 79.6C91.6001 78.7 90.5001 78.2 89.1001 78.2C87.7001 78.2 86.6001 78.7 85.8001 79.6C85.0001 80.5 84.7001 81.9 84.7001 83.8C84.7001 87.6 86.1001 89.4 89.1001 89.4Z"
                                fill="white"
                            />

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M111.7 93.8C109.7 93.8 107.9 93.4 106.4 92.6C104.9 91.8 103.7 90.6 102.9 89.1C102.1 87.7 101.7 85.9 101.7 83.9C101.7 81.9 102.1 80.2 102.9 78.7C103.7 77.2 104.9 76.1 106.4 75.3C107.9 74.5 109.7 74.1 111.7 74.1C113.7 74.1 115.4 74.5 116.9 75.3C118.4 76.1 119.6 77.2 120.4 78.7C121.2 80.1 121.6 81.9 121.6 83.9C121.6 85.9 121.2 87.6 120.4 89.1C119.6 90.6 118.4 91.8 116.9 92.6C115.5 93.4 113.7 93.8 111.7 93.8ZM111.7 89.5C113.1 89.5 114.2 89 114.9 88.1C115.6 87.1 116 85.7 116 83.9C116 82 115.7 80.6 114.9 79.7C114.2 78.8 113.1 78.3 111.7 78.3C110.2 78.3 109.2 78.8 108.4 79.7C107.7 80.7 107.3 82.1 107.3 83.9C107.3 87.6 108.8 89.5 111.7 89.5Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M163.2 133.9H157.6V131C157 132 156.2 132.7 155.2 133.3C154.2 133.9 153 134.1 151.6 134.1C150 134.1 148.5 133.7 147.2 132.9C145.9 132 144.9 130.9 144.2 129.4C143.5 127.9 143.1 126.1 143.1 124.2C143.1 122.2 143.5 120.5 144.2 119.1C144.9 117.6 145.9 116.4 147.2 115.6C148.5 114.8 149.9 114.4 151.6 114.4C152.9 114.4 154 114.7 155.1 115.2C156.2 115.7 157 116.5 157.5 117.4V106.3H163.2V133.9ZM153.3 129.8C154.7 129.8 155.8 129.3 156.5 128.4C157.3 127.4 157.6 126 157.6 124.2C157.6 122.4 157.2 121.1 156.4 120.1C155.6 119.1 154.6 118.6 153.2 118.6C151.8 118.6 150.7 119.1 149.9 120C149.1 120.9 148.7 122.3 148.7 124.1C148.7 125.9 149.1 127.3 149.9 128.3C150.8 129.4 151.9 129.8 153.3 129.8Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M88.9998 120C90.5998 120.5 91.7998 121.3 92.5998 122.4C93.3998 123.5 93.7998 124.9 93.7998 126.3C93.7998 128.6 92.9998 130.4 91.2998 131.7C89.6998 133 87.3998 133.7 84.4998 133.7H71.7998V107H84.0998C86.8998 107 89.0998 107.7 90.6998 108.9C92.2998 110.2 93.0998 111.9 93.0998 114C93.0998 115.4 92.7998 116.6 91.9998 117.7C91.2998 118.8 90.2998 119.5 88.9998 120ZM77.5998 118H83.1998C84.6998 118 85.7998 117.8 86.4998 117.2C87.1998 116.7 87.5998 115.9 87.5998 114.8C87.5998 113.7 87.2998 112.9 86.4998 112.4C85.7998 111.9 84.6998 111.6 83.1998 111.6H77.5998V118ZM83.7998 129.4C85.3998 129.4 86.4998 129.1 87.1998 128.6C87.9998 128 88.2998 127.2 88.2998 126C88.2998 124.8 87.8998 124 87.1998 123.4C86.4998 122.9 85.3998 122.6 83.7998 122.6H77.4998V129.4H83.7998Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M56.2998 114.9H50.6998V117.6C50.0998 116.6 49.2998 115.8 48.2998 115.3C47.2998 114.7 46.0998 114.4 44.6998 114.4C43.0998 114.4 41.5998 114.8 40.2998 115.7C38.9998 116.5 37.9998 117.7 37.2998 119.2C36.5998 120.7 36.2998 122.5 36.2998 124.4C36.2998 126.4 36.6998 128.1 37.2998 129.6C37.9998 131.1 38.9998 132.2 40.2998 133C41.5998 133.8 42.9998 134.2 44.6998 134.2C45.9998 134.2 47.1998 133.9 48.2998 133.4C49.3998 132.9 50.1998 132.1 50.6998 131.1V133.9H56.2998V114.9ZM49.5998 128.4C48.7998 129.4 47.7998 129.8 46.3998 129.8C44.9998 129.8 43.8998 129.3 43.0998 128.4C42.2998 127.5 41.9998 126.1 41.9998 124.3C41.9998 122.5 42.3998 121.1 43.1998 120.1C43.9998 119.1 45.0998 118.6 46.4998 118.6C47.8998 118.6 48.9998 119.1 49.6998 120.1C50.4998 121 50.7998 122.4 50.7998 124.2C50.6998 126.1 50.3998 127.5 49.5998 128.4Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M111 133.8H116.6V114.8H110.9V117.5C110.4 116.5 109.6 115.8 108.5 115.2C107.4 114.6 106.2 114.3 104.9 114.3C103.3 114.3 101.9 114.8 100.6 115.6C99.3 116.4 98.3 117.6 97.6 119.1C96.9 120.6 96.5 122.4 96.5 124.3C96.5 126.3 96.9 128 97.6 129.5C98.4 131 99.4 132.1 100.6 132.9C101.9 133.7 103.3 134.1 105 134.1C106.4 134.1 107.6 133.9 108.6 133.3C109.6 132.7 110.4 132 111 131V133.8ZM109.9 128.4C109.2 129.3 108.1 129.8 106.7 129.8C105.2 129.8 104.2 129.4 103.3 128.5C102.6 127.5 102.2 126.2 102.2 124.4C102.2 122.6 102.6 121.2 103.4 120.2C104.2 119.2 105.3 118.7 106.7 118.7C108.1 118.7 109.1 119.2 109.9 120.2C110.6 121.1 111 122.5 111 124.3C111 126.1 110.7 127.5 109.9 128.4Z"
                                fill="white"
                            />
                            <path
                                d="M139.7 122.3C139.7 117 137.5 114.3 132.9 114.3C131.5 114.3 130.3 114.6 129.2 115.2C128.1 115.8 127.3 116.7 126.6 117.8L126.2 114.8H120.9C121.1 116.4 121.2 118.2 121.2 120.2V133.8H126.9V123.1C126.9 121.8 127.3 120.7 128 119.9C128.8 119.1 129.8 118.7 131 118.7C132.1 118.7 132.8 119 133.3 119.6C133.8 120.2 134.1 121.2 134.1 122.5V133.8H139.8V122.3H139.7Z"
                                fill="white"
                            />
                            <path
                                d="M71.7998 136.7H163.2V138.3H71.7998V136.7Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_41_2">
                                <rect width="200" height="200" fill="white" />
                            </clipPath>
                        </defs>
                    </>
                )}
            </StyledLogo>
        )
    }
)

interface LogoProps {
    isWhite?: boolean
    width?: string | number
    height?: string | number
}

const StyledLogo = styled.svg<{
    $width?: string | number
    $height?: string | number
}>`
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
`
