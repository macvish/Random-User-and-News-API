import React from 'react'

import '../style/SkeletonScreen.sass'

const skeletonScreen = () => {
    return (
        <div class="container">
            <div class="post">
                <div class="avatar"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <div class="post">
                <div class="avatar"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <div class="post">
                <div class="avatar"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    )
}

export default skeletonScreen