SELECT user.NAME FROM niepcedb.photo_post JOIN niepcedb.user ON user.USER_ID = photo_post.USER_ID
GROUP BY photo_post.USER_ID HAVING COUNT(photo_post.USER_ID) > 3;