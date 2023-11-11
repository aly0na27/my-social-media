import React from "react";
import ContentLoader from "react-content-loader";
import {Skeleton} from "antd";

// const NewsLoader: React.FC = () => {
//     return (
//         <ContentLoader
//             speed={2}
//             width={400}
//             height={160}
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//             viewBox="0 0 400 160">
//             <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
//             <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
//             <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
//             <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
//             <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
//             <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
//             <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
//             <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
//             <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
//             <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
//             <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
//             <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
//             <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
//             <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
//             <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
//             <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
//             <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
//             <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
//             <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
//             <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
//             <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
//             <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
//             <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
//             <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
//             <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
//             <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
//             <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
//             <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
//             <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
//             <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
//             <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
//             <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
//             <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
//             <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
//             <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
//             <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" /></ContentLoader>
//     )
// }

const NewsLoader: React.FC = () => {
    return (
        <>
            <Skeleton.Image active={true}></Skeleton.Image>
        </>
    )
}
export default NewsLoader