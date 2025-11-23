import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

export interface TweetProps {
  username?: string;
  handle?: string;
  timestamp?: string;
  content?: React.ReactNode; // accept string or JSX
  avatarUrl?: string;
  replyCount?: number;
  retweetCount?: number;
  likeCount?: number;
  className?: string;
}

export const Tweet: React.FC<TweetProps> = ({
                                              username = "John Doe",
                                              handle = "@johndoe",
                                              timestamp = "2h",
                                              content = "Lorem ipsum dolor sit amet.",
                                              avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe",
                                              replyCount = 0,
                                              retweetCount = 0,
                                              likeCount = 0,
                                              className,
                                            }) => {
  return (
    <article className={className}>
      <div className="flex items-start gap-4">
        {avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={`${username} avatar`} className="w-12 h-12 rounded-full" />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{username}</span>
            {handle && <span className="text-sm text-gray-500">{handle}</span>}
            {timestamp && <span className="text-xs text-gray-400 ml-auto">{timestamp}</span>}
          </div>

          <div className="mt-2 text-sm text-gray-800">
            {content}
          </div>

          <div className="mt-3 flex items-center text-xs text-gray-500 gap-4">
            <span>💬 {replyCount}</span>
            <span>🔁 {retweetCount}</span>
            <span>❤ {likeCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tweet;