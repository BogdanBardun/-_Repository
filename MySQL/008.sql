SELECT user.NAME, photo_post.CREATION_DATE as time, photo_post.DESCRIPTION from niepcedb.photo_post
join niepcedb.user on user.USER_ID = photo_post.USER_ID
order by photo_post.CREATION_DATE;