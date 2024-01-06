import React from 'react'

import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {

    return (
        <div>
            <div className="home_container_1">
                <LeftSidebar />
                <div className="home_container_2">
                    <QuestionDetails />
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default DisplayQuestion
