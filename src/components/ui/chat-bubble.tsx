import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
  emoji?: string;
  className?: string;
}

export const ChatBubble = ({ message, isUser = false, timestamp, emoji, className }: ChatBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex",
        isUser ? "justify-end" : "justify-start",
        className
      )}
    >
      <div className={cn(
        "max-w-[80%] rounded-xl md:rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-xl",
        isUser 
          ? "bg-primary text-primary-foreground rounded-br-sm border-2 border-primary/30" 
          : "bg-background border-2 border-foreground/20 rounded-bl-sm"
      )}>
        <p className="text-[11px] md:text-sm leading-relaxed whitespace-pre-line">
          {emoji && <span className="mr-1.5 md:mr-2">{emoji}</span>}
          {message}
        </p>
        {timestamp && (
          <span className={cn(
            "text-[9px] md:text-xs mt-0.5 md:mt-1 block",
            isUser ? "text-primary-foreground/70" : "text-muted-foreground"
          )}>
            {timestamp}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-start"
    >
      <div className="bg-background border-2 border-foreground/20 rounded-2xl rounded-bl-sm px-4 py-3 shadow-xl">
        <div className="flex gap-1">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-muted-foreground/40 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-muted-foreground/40 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 bg-muted-foreground/40 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export const ChatContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(
      "bg-gradient-to-b from-background to-muted/20 rounded-xl md:rounded-2xl p-4 md:p-6 space-y-2 md:space-y-3 shadow-large border border-border",
      className
    )}>
      {children}
    </div>
  );
};
