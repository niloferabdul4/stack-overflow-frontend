import React from "react";
import { tags_list } from "./tags_list";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Tags.css";
import TagsList from "./TagsList";
import ChatBotTab from "../../components/ChatBotTab/ChatBotTab";

const Tags = () => {
    return (
        <div className="home_container_1">
            <LeftSidebar />
            <div className="home_container_2">
                <div className="tags-container">
                    <h1 className="tags-h1">Tags</h1>
                    <p className="tags-p">
                        A tag is a keyword or label that categorizes your question with other,
                        similar questions.
                    </p>
                    <p className="tags-p">
                        Using the right tags makes it easier for others to find and answer
                        your question.
                    </p>
                    <div className="tags-list-container">
                        {tags_list.map((tag) => (
                            <TagsList tag={tag} key={tag.id} />
                        ))}
                    </div>
                </div>
            </div>
          <ChatBotTab/>
        </div>
    );
};

export default Tags;