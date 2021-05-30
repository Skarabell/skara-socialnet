import React, {ComponentType} from "react"
import Preloader from "../Preloader/Preloader"

export function withSuspense<WCP> (Component: ComponentType <WCP>) {
            return (props: WCP) => {
                return <React.Suspense fallback={<Preloader />}>
                    <Component {...props} />
                </React.Suspense>
        }
    }
