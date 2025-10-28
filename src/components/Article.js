import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate emojis based on minutes
  const getReadingTimeEmoji = () => {
    if (!minutes) return "";
    
    if (minutes < 30) {
      // Coffee cups every 5 minutes
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      // Bento boxes every 10 minutes 
      const bentos = Math.ceil(minutes / 10);
      return "🍱".repeat(bentos) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <small> • {getReadingTimeEmoji()}</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;