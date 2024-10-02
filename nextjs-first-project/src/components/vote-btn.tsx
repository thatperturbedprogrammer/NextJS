'use client';

import { useState } from "react";

export default function VoteButton() {
    const [voteCount, setVoteCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    
    const handleUpvote = () => {
        setVoteCount(voteCount + 1);
        setIsDisabled(true);
    };

    const handleDownvote = () => {
        setVoteCount(voteCount - 1);
        setIsDisabled(true);
    };

    return (
        <div>
            <p className="border-zinc-600 text-slate-800 p-2 mt-10">Votes: {voteCount}</p>
            <button
                onClick={handleUpvote}
                disabled={isDisabled}
                className={`p-2 mt-10 ${isDisabled ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'} text-white`}
            >
                Upvote
            </button>
            <button
                onClick={handleDownvote}
                disabled={isDisabled}
                className={`p-2 mt-10 ${isDisabled ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500'} text-white`}
            >
                Downvote
            </button>
        </div>
    );
}
