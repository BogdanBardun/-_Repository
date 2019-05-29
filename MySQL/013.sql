SELECT user.NAME from niepcedb.user
join niepcedb.photo_post on user.USER_ID = photo_post.USER_ID
where date(photo_post.CREATION_DATE) = date(NOW())
group by user.NAME having count(photo_post.POST_ID) > 3;