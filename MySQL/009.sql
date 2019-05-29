SELECT user.NAME, photo_post.CREATION_DATE from niepcedb.photo_post
join niepcedb.user on user.USER_ID = photo_post.USER_ID
where LENGTH(photo_post.DESCRIPTION) > 12;