import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

interface TweetProps {
  username?: string;
  handle?: string;
  timestamp?: string;
  content?: string;
  avatarUrl?: string;
  replyCount?: number;
  retweetCount?: number;
  likeCount?: number;
}

export function Tweet({
                        username = "John Doe",
                        handle = "@johndoe",
                        timestamp = "2h",
                        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe",
                        replyCount = 12,
                        retweetCount = 34,
                        likeCount = 156,
                      }: TweetProps) {
  return (
    <article className="bg-white border border-gray-200 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12 flex-shrink-0">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-gray-900 hover:underline">
              {username}
            </span>
            <span className="text-gray-500 text-sm">{handle}</span>
            <span className="text-gray-500 text-sm">·</span>
            <span className="text-gray-500 text-sm hover:underline">
              {timestamp}
            </span>
          </div>

          <p className="text-gray-900 mt-1 text-[15px] leading-5 whitespace-pre-wrap break-words">
            {content}
          </p>

          <div className="flex items-center justify-between mt-3 w-full max-w-full sm:max-w-md flex-wrap gap-2">
            <button className="flex items-center gap-2 group flex-shrink-0">
              <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                <MessageCircle className="h-[18px] w-[18px] text-gray-500 group-hover:text-blue-500 transition-colors" />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
                {replyCount}
              </span>
            </button>

            <button className="flex items-center gap-2 group flex-shrink-0">
              <div className="p-2 rounded-full group-hover:bg-green-50 transition-colors">
                <Repeat2 className="h-[18px] w-[18px] text-gray-500 group-hover:text-green-500 transition-colors" />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-green-500 transition-colors">
                {retweetCount}
              </span>
            </button>

            <button className="flex items-center gap-2 group flex-shrink-0">
              <div className="p-2 rounded-full group-hover:bg-pink-50 transition-colors">
                <Heart className="h-[18px] w-[18px] text-gray-500 group-hover:text-pink-500 transition-colors" />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-pink-500 transition-colors">
                {likeCount}
              </span>
            </button>

            <button className="flex items-center gap-2 group flex-shrink-0">
              <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                <Share className="h-[18px] w-[18px] text-gray-500 group-hover:text-blue-500 transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}